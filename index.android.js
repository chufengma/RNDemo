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
    View
} from 'react-native';

class RNDemo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.title_layout}>
                    <Image style={styles.avatar} source={require('./img/avatar.png')} />
                    <Text style={styles.title}>
                        ReactNativeDemo
                    </Text>
                    <Text style={styles.title_btn}>
                        Like
                    </Text>
                </View>

                <View style={styles.content}>
                    <Text>
                        Content
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
    },
    title_layout: {
        backgroundColor:'#81c04d',
        height:50,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor: '#81c14c',
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        flex:1,
        fontWeight:'bold',
        color:'#FFFFFF',
    },
    title_btn:{
        width:50,
        fontSize: 20,
        textAlign: 'center',
        color:'#FFFFFF',
    },
    avatar:{
        width:36,
        height:36,
        borderRadius:18,
        marginLeft:10,
        borderColor:'#FFF',
        borderWidth:2,
    },
    content: {
        flex:1,
        backgroundColor:'#CCCCCC',
    }

});

AppRegistry.registerComponent('RNDemo', () => DemoProject);
