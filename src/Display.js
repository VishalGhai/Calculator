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
                <span className="displaytext">{this.props.whichValue===1?(this.props.value1).toString().substr(0,(this.props.value1).toString().length>9?9:(this.props.value1).toString().length):
                (this.props.value2).toString().substr(0,(this.props.value2).toString().length>9?9:(this.props.value2).toString().length)}</span>
            </div>
        )
    }
}

export default Display;
