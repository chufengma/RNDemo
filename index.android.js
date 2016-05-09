/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    Image,
    View,
    ToastAndroid,
    PixelRatio,
} from 'react-native';

var Button = require("./Button");
var TouchableView = require("./TouchableView");
var TouchDemoView = require("./TouchDemoView");

class DemoProject extends Component {

    constructor(props) {
        super(props);
        this.state = {
            testFlag: false,
            testStr: "Fengma is a greate man",
        };

        this.test = {
            testStr: "Ok , it is test",
        };
    }

    render() {

        // this.setState({testStr: "hahaha"});

        return (
            <View style={styles.container}>
                <View style={styles.title_layout}>
                    <Image style={styles.avatar} source={require('./img/avatar.png')}/>
                    <Text style={styles.title}>
                        ReactNativeDemo
                    </Text>
                    <Text style={styles.title_btn}>
                        Like
                    </Text>
                </View>
                <Button underlayColor='#ff3322'
                        style={styles.style_view_button}
                        text='登录有点击效果'
                        onPress={this.onBtnPress}>
                </Button>

                <TouchDemoView style={styles.content_layout}></TouchDemoView>

            </View>
        );
    }

    onBtnPress() {
        console.warn('按钮被点击');
    }

    onLayoutPress() {
        console.warn('Layout被点击');
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        alignItems: "stretch",
        flex: 1,
    },
    title_layout: {
        backgroundColor: '#81c04d',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#81c14c',
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        flex: 1,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    title_btn: {
        width: 50,
        fontSize: 20,
        textAlign: 'center',
        color: '#FFFFFF',
    },
    avatar: {
        width: 36,
        height: 36,
        borderRadius: 18,
        marginLeft: 10,
        borderColor: '#FFF',
        borderWidth: 1,
    },
    style_view_button: {
    },
    touch_demo_view: {
        height: 150,
        width: 200,
        backgroundColor: '#113322',
    },
    content_layout: {
        flex:1,
        backgroundColor: '#463322',
        margin:10,
    }

});

AppRegistry.registerComponent('DemoProject', () => DemoProject);
