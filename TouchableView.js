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

class TouchableView extends Component {
    render() {
        return (
            <TouchableHighlight
                activeOpacity={0.5}
                style={[this.styles.btn, this.props.style]}
                onPress={this.props.onPress}>
                <View>
                    {this.props.children}
                </View>
            </TouchableHighlight>

        );
    }
}

module.exports = TouchableView;