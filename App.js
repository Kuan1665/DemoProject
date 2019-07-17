/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';

export default class ABC extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }
    }
    increment = () => {
        //code here
        this.setState({
            counter: this.state.counter++
        })
    }
    render() {
        return (
            <View>
                <Text>{this.state.counter}</Text>

                <Button
                    title="click me"
                    onPress={() => { this.increment() }}
                />
                <WebView
                    source={{ uri: 'https://bitboard.bit-corp.work/' }}
                />

            </View>

        )
    }
}