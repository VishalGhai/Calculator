import React, { Component } from 'react';

class Button extends Component {
    
    
    setValue = () => {
        // console.log(this.state.value)
        this.props.onchnge(this.props.text)
    }

    render() {



        return (
            <div className="buttoncontainer">
                <div className="btn">
                    <button onClick={this.setValue} className={this.props.textColor}>{this.props.text}</button>
                </div>
            </div>
        )
    }
}

export default Button;