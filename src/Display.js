import React, { Component } from 'react';

class Display extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
            
    //     }
    // }
    
    componentDidUpdate(props,state){

        console.log('in display',this.props.whichValue)
    }
    render() {
        return (
            <div className="display">
                <span className="displaytext">{this.props.whichValue===1?this.props.value1:this.props.value2}</span>
            </div>
        )
    }
}

export default Display;
