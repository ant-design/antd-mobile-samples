import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Platform,
  TouchableOpacity,
  Alert,
  Linking,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import { List } from 'antd-mobile';
import { Font } from 'expo';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  logo: {
    width: 108,
    height: 108,
    alignSelf: 'center',
    marginTop: 45,
  },
  logoText: {
    alignSelf: 'center',
    fontSize: 24,
    marginTop: 24,
    color: '#28B5F5',
  },
  logoTextSub: {
    alignSelf: 'center',
    fontSize: 20,
    marginTop: 12,
    color: '#626262',
  },
  list: {
    marginTop: 32,
    marginBottom: 0,
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
  },
  version: {
    textAlign: 'center',
    color: '#888',
    fontSize: 12,
  },
});

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animating: false,
    };
  }

  componentWillMount() {
    StatusBar.setBarStyle('light-content');
  }

  componentDidMount() {
    Font.loadAsync({
      'anticon': require('../assets/fonts/iconfont.ttf'),
    });
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: 'https://zos.alipayobjects.com/rmsportal/qyucQHYfzZlVaQo.png' }}
          style={styles.logo}
        />
        <Text style={styles.logoText}>Ant Design Mobile</Text>
        <Text style={styles.logoTextSub}>移动端UI组件库</Text>
        <List style={styles.list}>
          <List.Item
            thumb="https://zos.alipayobjects.com/rmsportal/UIqwcqpVsIjvyYZ.png"
            arrow="horizontal"
            onClick={() => navigate('web')}
          >H5 组件</List.Item>
          <List.Item
            thumb="https://zos.alipayobjects.com/rmsportal/lSsJiCJnOzSnBJG.png"
            onClick={() => navigate('native')}
            arrow="horizontal"
          >React Native 组件</List.Item>
        </List>
        <View style={styles.footer}>
          <Text style={styles.version}>Demo 版本: 2.0.0</Text>
        </View>
      </View>
    );
  }
}

export default Home;
