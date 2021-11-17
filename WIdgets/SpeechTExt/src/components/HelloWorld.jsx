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

    constructor(props){
        super(props);
        props.SpeechT=""
        this.state={
            results:"",
            text1:props.text1,
            SpeechT:props.SpeechT.value
        }
        Voice.onSpeechResults=this.onSpeechResults;
        // Voice.onChange=this.onChange.bind(this)
    }

    onSpeechResults= (e) => {
       // alert(e.value[0]);
        var text=e.value[0];
        this.props.SpeechT.setValue(text);
        this.setState({
            SpeechT:text
        });
        this.props.onClick.execute();
        //this.props.text1.setValue(e.value[0]);
        /*this.setState({
            results:e.value[0],
            text1:e.value[0]
        })*/
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
                <Text onLongPress={this.onSpeechStart.bind()}><FontAwesome name='microphone' size={60} color='white'/></Text>
                {/* <Text onPress={this.onSpeechEnd.bind()}><FontAwesome name='microphone' size={60} /></Text> */}
            </View>
        );
    }
}
