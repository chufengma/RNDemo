/**
 * Created by yfchu on 2016/5/4.
 */
'use strict';

import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
} from 'react-native';




class Button extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mStyle: styles.btn,
        };
    }

    onBtnPress() {
        console.warn("on btn press");
    }

    render() {
        return (
            <TouchableHighlight
                underlayColor='#81c04d8f'
                activeOpacity={1}
                style={this.state.mStyle}
                onPress={this.props.onPress}>
                <Text style={styles.text}>
                    {this.props.text}
                </Text>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({

    btn: {
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#81c04d',
        borderColor: '#5bc0de',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10,
    },

    text: {
        fontSize: 16,
        color: '#fff'
    }
});

module.exports = Button;