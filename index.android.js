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
    Animated
} from 'react-native';

var Button = require("./Button");
var TouchableView = require("./TouchableView");
var TouchDemoView = require("./TouchDemoView");

class DemoProject extends Component {

    constructor(props) {
        super(props);
        this.state = {
            transXValue: new Animated.Value(0),
            scaleXValue: new Animated.Value(1),
            rotateValue: new Animated.Value(0),
        };
    }

    render() {
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
                <Button
                        text='登录有点击效果'
                        onPress={this.onBtnPress}>
                </Button>
                <View style={styles.content_layout}>
                    <Animated.View style={[styles.animated_view, {transform: [
                        {translateX: this.state.transXValue},
                        {scale: this.state.scaleXValue},
                        {rotate: this.state.rotateValue.interpolate({
                        inputRange: [0,1],
                        outputRange: ['0deg', '360deg']
                    })},
                    ]}]} />
                </View>
            </View>
        );
    }

    onBtnPress = ()=> {
        this.state.transXValue.setValue(0);
        this.state.rotateValue.setValue(0);
        this.state.scaleXValue.setValue(1);
        Animated.parallel([
            Animated.spring(
                this.state.scaleXValue,
                {
                    toValue: 0.5,
                    friction: 10,
                },
            ),
            Animated.decay(
                this.state.transXValue,
                {
                    velocity: 0.3,
                },
            ),
            Animated.timing(
                this.state.rotateValue,
                {
                    toValue: 360,
                }
            ),
        ]).start();
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
        margin:10,
    },
    animated_view: {
        height: 100,
        width: 100,
        backgroundColor: '#f3f',
    }
});

AppRegistry.registerComponent('DemoProject', () => DemoProject);
