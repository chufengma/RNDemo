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
    ToastAndroid,
} from 'react-native';

var Log = require("./js/log/Log.js");

class TouchDemoView extends Component {
    render() {
        return (
            <View
                style={this.props.style}
                onStartShouldSetResponder={this.onStartShouldSetResponder}
                onResponderMove={this.onResponderMove}>
            </View>
        );
    }

    onStartShouldSetResponder() {
        return true;
    }

    showEvent(str) {
    }

    onResponderMove(evt) {
        Log.i("onResponderMove" + evt.nativeEvent.locationX + ":" + evt.nativeEvent.locationY);
    }

}

module.exports = TouchDemoView;