import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { WhiteSpace, WingBlank, Button, Flex, ActivityIndicator } from 'antd-mobile-rn'

const styles = StyleSheet.create({
  demo: {
    marginTop: 20
  },
  darkBg: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 89,
    height: 89,
    backgroundColor: '#2B2F42'
  },
  gray: {
    backgroundColor: '#CCC'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 8
  }
})

export default class ActivityIndicatorExample extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      animating: false
    }
  }

  componentWillUnmount () {
    clearTimeout(this.closeTimer)
  }

  loadingToast = () => {
    this.setState({ animating: !this.state.animating })
    this.closeTimer = setTimeout(() => {
      this.setState({ animating: !this.state.animating })
    }, 2000)
  }

  render () {
    return (
      <View style={[styles.demo]}>
        <WingBlank>
          <Flex>
            <Flex.Item>
              <Text>No copy Icon</Text>
            </Flex.Item>
            <Flex.Item>
              <ActivityIndicator />
            </Flex.Item>
          </Flex>
        </WingBlank>
        <WhiteSpace size='xl' style={{ backgroundColor: '#fff' }} />
        <WingBlank>
          <Flex>
            <Flex.Item>
              <Text>Tape copy Icon</Text>
            </Flex.Item>
            <Flex.Item>
              <ActivityIndicator text='Loading...' />
            </Flex.Item>
          </Flex>
        </WingBlank>
        <WhiteSpace size='xl' style={{ backgroundColor: '#fff' }} />
        <WingBlank>
          <Flex>
            <Flex.Item>
              <Text>Dark background</Text>
            </Flex.Item>
            <Flex.Item>
              <View style={[styles.darkBg]}>
                <ActivityIndicator color='#fff' />
              </View>
            </Flex.Item>
          </Flex>
        </WingBlank>
        <WhiteSpace size='xl' style={{ backgroundColor: '#fff' }} />
        <WingBlank>
          <Flex>
            <Flex.Item>
              <Text>Large icon</Text>
            </Flex.Item>
            <Flex.Item>
              <ActivityIndicator size='large' />
            </Flex.Item>
          </Flex>
        </WingBlank>
        <WhiteSpace size='xl' style={{ backgroundColor: '#fff' }} />
        <WingBlank>
          <Button onClick={this.loadingToast}>Click to show Toast</Button>
        </WingBlank>
        <ActivityIndicator animating={this.state.animating} toast size='large' text='Loading' />
      </View>
    )
  }
}
