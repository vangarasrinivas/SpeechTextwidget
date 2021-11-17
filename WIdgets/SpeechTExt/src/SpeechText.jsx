import { Component, createElement } from "react";

// import { HelloWorld } from "./components/HelloWorld";


import { HelloWorld } from "./components/HelloWorld";

export class SpeechText extends Component {
    
    render() {
        return <HelloWorld
        onClick={this.props.onClick}
        SpeechT={this.props.SpeechT}
        generalAttr={this.props}
        />
    }

}
