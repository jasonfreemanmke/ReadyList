import React from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
    Button,
    Alert,
    Text,
} from 'react-native';

import ProgressBarAnimated from 'react-native-progress-bar-animated';

export default class App extends React.Component {

    state = {
        progress: 20,
        progressWithOnComplete: 0,
        progressCustomized: 0,
    }

    increase = (key, value) => {
        this.setState({
            [key]: this.state[key] + value,
        });
    }

    render() {
        const barWidth = Dimensions.get('screen').width - 30;
        const progressCustomStyles = {
            backgroundColor: 'red',
            borderRadius: 0,
            borderColor: 'orange',
        };

        return (
            <View style={styles.container}>
                <View>

                    <ProgressBarAnimated
                        width={barWidth}
                        value={this.state.progress}
                        backgroundColorOnComplete="#6CC644"
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.buttonInner}>
                            <Button
                                title="Increase 20%"
                                onPress={this.increase.bind(this, 'progress', 20)}
                            />
                        </View>
                    </View>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        marginTop: 50,
        padding: 15,
    },
    buttonContainer: {
        marginTop: 15,
    },
    separator: {
        marginVertical: 30,
        borderWidth: 0.5,
        borderColor: '#DCDCDC',
    },
    label: {
        color: '#999',
        fontSize: 14,
        fontWeight: '500',
        marginBottom: 10,
    },
});
