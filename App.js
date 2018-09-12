import React from 'react';
import { Text, TextInput, View } from 'react-native';


class App extends React.Component {

    constructor (props) {
        super(props);

        this.state = {
            entropy: 0
        };

        this.onTextChanged = this.onTextChanged.bind(this);
    }

    render () {
        const mainStyle = {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 40,
        };

        const textInputStyle = {
            borderColor: "black",
            borderWidth: 1,
            borderRadius: 3,
            padding: 2,
            margin: 10,
            width: 300,
        };

        const binitsStyle = {
            color: "red"
        };

        return (
            <View
                style={mainStyle}
            >
                <Text>Texto:</Text>
                <View
                    style={textInputStyle}
                >
                    <TextInput
                        onChangeText={this.onTextChanged}
                    />
                </View>
                <Text
                    style={{margin: 10}}
                >Entropia:</Text>
                <View>
                    <Text style={{color: "red"}}>
                        <Text style={{fontWeight: "bold"}}>
                            {this.state.entropy}
                        </Text> binits
                    </Text>
                </View>
            </View>
        )
    }

    calculateEntropy(string) {
        const length = string.length;

        if (length === 0)  return 0;

        let chars = [];
        let count = [];

        for (let i = 0; i < length; i++){
            const char = string[i];
            const index = chars.indexOf(char);
            if (index > -1) {
                count[index] += 1;
            }
            else {
                chars = [...chars, char];
                count = [...count, 1]
            }
        }

        const probabilities = count.map( (c) => c / length );

        const entropy = -1 * probabilities.reduce(  (acc, p) => acc + p*Math.log2(p), 0 );

        return entropy;
    }

    onTextChanged(text) {
        this.setState({entropy: this.calculateEntropy(text)})
    }

}


export default App
