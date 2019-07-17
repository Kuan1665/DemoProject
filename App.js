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
	// ví dụ khi t đang ghi như thế này
	//thằng git sẽ lắng nghe thay đổi
	//muốn xem thử khác nhau gữa trước và sau khi dùng câu lệnh
	//git add .
	//thì làm như này 
	//git status
	//bây h test cái cho nóng
	// quên phải save nhé ^^ 
	//đó nó thấy liền 
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