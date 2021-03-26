import React, { Component } from 'react';
import Button from './Button';
class FunctionContainer extends Component {


    constructor(props) {
        super(props);
        this.state = {
            value1: 0,
            value2: 0,
            whichValue: 1,
            operator: ""
        }
    }

    deleteOperation = (whichValue) => {
        if (this.state.whichValue === 1) {
            if (this.state.value1.length === 1) {
                this.setState({
                    value1: 0
                })
                this.props.onchnge(0, 0, 1);
            } else {
                this.setState({
                    value1: parseInt(this.state.value1.toString().substring(0, this.state.value1.length - 1))
                })
                this.props.onchnge(parseInt(this.state.value1.toString().substring(0, this.state.value1.length - 1)), 0, 1);
            }
        } else {
            if (this.state.value2.length === 1) {
                this.setState({
                    value2: 0
                })
                this.props.onchnge(0, 0, 2);
            } else {
                this.setState({
                    value2: parseInt(this.state.value2.toString().substring(0, this.state.value2.length - 1))
                })
                this.props.onchnge(this.state.value1, parseInt(this.state.value2.toString().substring(0, this.state.value2.length - 1)), 2);
            }
        }
    }

    componentDidUpdate(props, state) {
        console.log('updateValueOpeartion : ', this.state.value1, ' and ', this.state.value2, ' whichvalue is ', this.state.whichValue)
    }
    updateValueOperation = (value, whichValue) => {
        if (this.state.whichValue === 1) {
            if (this.state.value1 !== 0) {
                this.setState({
                    value1: this.state.value1 + value
                })
                this.props.onchnge(this.state.value1 + value, 0, 1);
            } else {
                this.setState({
                    value1: value,
                    whichValue: 1
                })
                this.props.onchnge(value, 0, 1);
            }
        } else {
            if (this.state.value2 !== 0) {
                this.setState({
                    value2: this.state.value2 + value
                })
                this.props.onchnge(this.state.value1, this.state.value2 + value, 2);
            } else {
                this.setState({
                    value2: value,
                    whichValue: 2
                })
                this.props.onchnge(this.state.value1, value, 2);
            }
        }
    }

    performCalculation = () => {
        switch (this.state.operator) {
            case '+':
                this.props.onchnge(parseFloat(this.state.value1) + parseFloat(this.state.value2), 0, 1);
                // this.props.onchnge(0, 1);
                this.setState({
                    value1: parseFloat(this.state.value1) + parseFloat(this.state.value2),
                    value2: 0,
                    whichValue: 2
                })
                break;
            case '-':
                this.props.onchnge(parseFloat(this.state.value1) - parseFloat(this.state.value2), 0, 1);
                // this.props.onchnge(0, 2);
                this.setState({
                    value1: parseFloat(this.state.value1) - parseFloat(this.state.value2),
                    value2: 0,
                    whichValue: 2
                })
                break;
            case 'x':
                this.props.onchnge(parseFloat(this.state.value1) * parseFloat(this.state.value2), 0, 1);
                // this.props.onchnge(0, 2);
                this.setState({
                    value1: parseFloat(this.state.value1) * parseFloat(this.state.value2),
                    value2: 0,
                    whichValue: 2
                })
                break;
            case '/':
                this.props.onchnge(parseFloat(this.state.value1) / parseFloat(this.state.value2), 0, 1);
                // this.props.onchnge(0, 2);
                this.setState({
                    value1: parseFloat(this.state.value1) / parseFloat(this.state.value2),
                    value2: 0,
                    whichValue: 2
                })
                break;
            case '%':
                this.props.onchnge(parseFloat(this.state.value1) / parseFloat(this.state.value2) * 100.0, 0, 1);
                // this.props.onchnge(0, 2);
                this.setState({
                    value1: parseFloat(this.state.value1) / parseFloat(this.state.value2) * 100.0,
                    value2: 0,
                    whichValue: 2
                })
                break;

            default:
                break;
        }

    }

    toggleValue = () => {
        if (this.state.whichValue === 1) {
            this.setState({ value1: -this.state.value1 })
            this.props.onchnge(-this.state.value1, this.state.value2, 1)
        } else {
            this.setState({ value2: -this.state.value2 })
            this.props.onchnge(this.state.value1, -this.state.value2, 2)
        }
    }


    setValue = (value, whichValue) => {
        // if (value >= 0 && value <= 9)
        //     console.log('in functioncontainer', this.state.value)

        switch (value) {
            case '+':
                this.props.onchnge(this.state.value1, 0, 2);
                // this.props.onchnge(0, 2);
                this.setState({
                    whichValue: 2,
                    operator: "+"
                })
                break;
            case '-':
                this.props.onchnge(this.state.value1, 0, 2);
                // this.props.onchnge(0, 2);
                this.setState({
                    whichValue: 2,
                    operator: "-"
                })
                break;
            case 'x':
                this.props.onchnge(this.state.value1, 0, 2);
                // this.props.onchnge(0, 2);
                this.setState({
                    whichValue: 2,
                    operator: "x"
                })
                break;
            case '/':
                this.props.onchnge(this.state.value1, 0, 2);
                // this.props.onchnge(0, 2);
                this.setState({
                    whichValue: 2,
                    operator: "/"
                })
                break;
            case '=':
                this.performCalculation();
                break;
            case '+/-':
                this.toggleValue();
                break;
            case '%':
                this.props.onchnge(this.state.value1, 0, 2);
                // this.props.onchnge(0, 2);
                this.setState({
                    whichValue: 2,
                    operator: "%"
                })
                break;
            case 'C':
                this.setState({
                    value1: 0,
                    value2: 0,
                    whichValue: 1
                })
                this.props.onchnge(0, 0, 1);
                // this.props.onchnge(0,0,2);
                break;
            case 'del':
                this.deleteOperation(whichValue);
                break;
            default:
                this.updateValueOperation(value, whichValue);
                break;
        }
        // console.log('changing value', this.props.currentValue, ' value1 is ', this.state.value1, ' and value2 is ', this.state.value2);
    }

    render() {

        let clearcolor = "clearcolor";
        let clearcolortext = "clearcolor";
        let defaultcolor = "defaultcolor";
        let defaultcolortext = "defaultcolor";
        let functioncolor = "functioncolor";
        let functioncolortext = "functioncolor";

        return (
            <div className="functioncontainer">
                <div className="row">
                    <Button onchnge={this.setValue} text={"C"} textColor={clearcolortext} bgColor={clearcolor} />
                    <Button onchnge={this.setValue} text={"+/-"} textColor={defaultcolortext} bgColor={defaultcolor} />
                    <Button onchnge={this.setValue} text={"%"} textColor={defaultcolortext} bgColor={defaultcolor} />
                    <Button onchnge={this.setValue} text={"/"} textColor={functioncolortext} bgColor={functioncolor} />
                </div>
                <div className="row">
                    <Button onchnge={this.setValue} text={"7"} textColor={defaultcolortext} bgColor={defaultcolor} />
                    <Button onchnge={this.setValue} text={"8"} textColor={defaultcolortext} bgColor={defaultcolor} />
                    <Button onchnge={this.setValue} text={"9"} textColor={defaultcolortext} bgColor={defaultcolor} />
                    <Button onchnge={this.setValue} text={"x"} textColor={functioncolortext} bgColor={functioncolor} />
                </div>
                <div className="row">
                    <Button onchnge={this.setValue} text={"4"} textColor={defaultcolortext} bgColor={defaultcolor} />
                    <Button onchnge={this.setValue} text={"5"} textColor={defaultcolortext} bgColor={defaultcolor} />
                    <Button onchnge={this.setValue} text={"6"} textColor={defaultcolortext} bgColor={defaultcolor} />
                    <Button onchnge={this.setValue} text={"-"} textColor={functioncolortext} bgColor={functioncolor} />
                </div>
                <div className="row">
                    <Button onchnge={this.setValue} text={"1"} textColor={defaultcolortext} bgColor={defaultcolor} />
                    <Button onchnge={this.setValue} text={"2"} textColor={defaultcolortext} bgColor={defaultcolor} />
                    <Button onchnge={this.setValue} text={"3"} textColor={defaultcolortext} bgColor={defaultcolor} />
                    <Button onchnge={this.setValue} text={"+"} textColor={functioncolortext} bgColor={functioncolor} />
                </div>
                <div className="row">
                    <Button onchnge={this.setValue} text={"0"} textColor={defaultcolortext} bgColor={defaultcolor} />
                    <Button onchnge={this.setValue} text={"."} textColor={defaultcolortext} bgColor={defaultcolor} />
                    <Button onchnge={this.setValue} text={"del"} textColor={clearcolortext} bgColor={clearcolor} />
                    <Button onchnge={this.setValue} text={"="} textColor={functioncolortext} bgColor={functioncolor} />
                </div>

            </div>
        )
    }
}

export default FunctionContainer;