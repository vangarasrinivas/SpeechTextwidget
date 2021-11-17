import { Component, createElement } from "react";

// import { HelloWorld } from "./components/HelloWorld";


import { HelloWorld } from "./components/HelloWorld";

// const defaultStyle = {
//     container: {},
//     label: {
//         color: "#F6BB42"
//     }
// };


export class SpeechText extends Component {
    // render() {
    //     return <HelloWorld name={this.props.yourName} style={this.props.style} />;
    // }

    // constructor(prop){
    //     super(prop);
    //     Voice._onSpeechResults=(res)=>{
    //         alert(JSON.stringify(res));
    //     }
    // }

    // render() {
    //     return (
    //         <View>
    //             <Text onPress={()=>Voice.start('en-US')}> <FontAwesome name='microphone' size={50} /></Text>
                

    //         </View>
    //     );
    // }

    // constructor(){
    //     super();
    //     this.state={
    //         results:[]
    //     }
    //     Voice.onSpeechResults=this.onSpeechResults.bind(this);
    // }

    // onSpeechResults(e){
    //     this.setState({
    //         results:e.value
    //     })
    // }

    // onSpeechStart(){
    //     Voice.start('en-US')
    // }

    // onSpeechEnd(){
    //     Voice.stop();
    // }

    render() {
        return <HelloWorld text={this.props.text} />
    }

}
