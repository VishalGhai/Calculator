import React, { Component } from 'react';
import Display from './Display';
import FunctionContainer from './FunctionContainer';
class Main extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            value1: 0,
            value2:0,
            whichValue:1
        }
    }

    setValue = (value1,value2,whichValue) => {
        if(whichValue === 1) {
            this.setState({
                value1: value1,
                value2: value2,
                whichValue:whichValue
            })
        }else{
            this.setState({
                value1: value1,
                value2: value2,
                whichValue:whichValue
            })
        }
        // console.log(this.state.value1," ",this.state.value2," ",whichValue)
    }


    render() {
        return (
            <div className="container">
                <div className="title"><h1>CALCULATOR</h1></div>
                <Display whichValue={this.state.whichValue} value1={this.state.value1} value2={this.state.value2} />
                <FunctionContainer currentValue={this.state.whichValue} onchnge={this.setValue} value1={this.state.value1} value2={this.state.value2}/>
            </div>
        )
    }
}
export default Main;