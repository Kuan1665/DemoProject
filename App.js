/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
// ví dụ khi t đang ghi như thế này
//thằng git sẽ lắng nghe thay đổi
//muốn xem thử khác nhau gữa trước và sau khi dùng câu lệnh
//git add .
//thì làm như này
//git status
//bây h test cái cho nóng
// quên phải save nhé ^^
//đó nó thấy liền
import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  WebView,
  SafeAreaView,
  TouchableWithoutFeedback
} from "react-native";

export default class ABC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      //link gốc
      link: "https://bitboard.bit-corp.work/",
      // init giá trị của cangoback
      canGoBack: false,
      page: 1
    };
  }
  increment = () => {
    //code here
    this.setState({
      counter: this.state.counter + 1
    });
  };

  // khi có sự kiện thay đổi sẽ gọi đến hàm này
  handleStateChange = wvState => {
    //kiểm tra thông tin của ws
    console.log(wvState);
    //kiểm tra wsState có gì
    this.setState({
      canGoBack: wvState.canGoBack
    });
  };
  //xử lý sự kiện goback
  goBack = () => {
    console.log(this.webview);
    //kiểm tra có goback đc hay không
    if (this.state.canGoBack) {
      //nếu được thì goback
      this.webview.goBack();
    }
  };
  change = () => {
    if (this.state.page === 1) {
      this.setState({
        page: 2
      });
    } else {
      this.setState({
        page: 1
      });
    }
  };
  render() {
    console.log(this.state.counter);
    return (
      //canh lề trên dưới cho iphoneX
      <SafeAreaView style={styles.container}>
        {this.state.page === 1 ? (
          <View>
            <Text>{this.state.counter}</Text>
            <Button
              title="click me"
              onPress={() => {
                this.increment();
              }}
            />
            <Button onPress={this.change} title="web view" />
          </View>
        ) : (
          <View style={{ flex: 1 }}>
            <View style={styles.header}>
              {/* xử lý sự kiện khi click goback */}
              <TouchableWithoutFeedback onPress={this.goBack}>
                <Text
                  // check xem có thể goback hay không
                  // nếu có thì dùng styles.active
                  // nếu không thì dùng styles.nonActive
                  style={
                    this.state.canGoBack ? styles.active : styles.nonActive
                  }
                >
                  GoBack
                </Text>
              </TouchableWithoutFeedback>
              <Button onPress={this.change} title="counter" />
            </View>
            <WebView
              //khai báo ref cho webview
              ref={c => (this.webview = c)}
              // lắng nghe thay đổi khi có sự kiện di chuyển
              onNavigationStateChange={wvState =>
                this.handleStateChange(wvState)
              }
              //link cho webview
              source={{ uri: this.state.link }}
            />
          </View>
        )}
      </SafeAreaView>
    );
  }
}

// khai báo 1 biến styles để gọi lại
// dễ quản lý code
// code đẹp hơn
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    height: 70,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20
  },
  active: {
    color: "blue"
  },
  nonActive: {
    color: "grey"
  }
});
