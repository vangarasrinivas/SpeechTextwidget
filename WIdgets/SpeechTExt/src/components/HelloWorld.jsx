import { Component, createElement } from "react";
import { Text, View } from "react-native";


// import { mergeNativeStyles } from "@mendix/pluggable-widgets-tools";


import Voice from '@react-native-voice/voice';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

// const defaultStyle = {
//     container: {},
//     label: {
//         color: "#F6BB42"
//     }
// };

export class HelloWorld extends Component {

    

    constructor(){
        super();
        this.state={
            results:[]
        }
        Voice.onSpeechResults=this.onSpeechResults.bind(this);
        // Voice.onChange=this.onChange.bind(this)
    }

    onSpeechResults(e){
        this.setState({
            results:e.value
        })
        // props.text.value(e);
    }

    //  onChange = e => {
    //     setStartDate(e);
    //     props.reservationDate.value(e);
    // };

    onSpeechStart(){
        Voice.start('en-US')
    }

    // componentWillReceiveProps(props) {
    //     this.setState({
    //         results: props.text,
    //     })
    // }


    render() {
        return (
            <View>
                <Text onLongPress={this.onSpeechStart.bind()}><FontAwesome name='microphone' size={60} onChange={this.onChange.bind()} /></Text>
                {/* <Text onPress={this.onSpeechEnd.bind()}><FontAwesome name='microphone' size={60} /></Text> */}
                {this.state.results.map((text, index)=>{
                    return(
                        <Text key={index}>{text}</Text>
                    )
                })}
            </View>
        );
    }
}
