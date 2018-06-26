import React from 'react'
import { StyleSheet, View, Text, Platform } from 'react-native'
import { Popover } from 'antd-mobile-rn'

const Item = Popover.Item

const styles = StyleSheet.create({
  contextStyle: {
    margin: 50,
    flex: 1
  },
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    height: 400,
    paddingHorizontal: 5,
    paddingVertical: 10
  },
  triggerStyle: {
    flexDirection: 'row',
    paddingHorizontal: 10
  },
  overlayStyle: {
    left: 90,
    marginTop: 20
  },
  // 在 iOS 上弹出层有阴影，Android 上没有，
  // 详细：http://facebook.github.io/react-native/releases/0.39/docs/shadow-props.html#shadowcolor
  androidOverlayStyle: {
    borderWidth: 1,
    borderColor: '#ccc'
  }
})

export const title = 'Popover'
export const description = 'Popover example'

export default class PopoverExample extends React.Component {
  constructor (props) {
    super(props)
    // componentDidMount() {
    //  setInterval(() => {
    //   this.refs.mc.refs.menuContext.toggleMenu('m')
    //  }, 2000)
    // }
    this.state = {
      // visible: false,
      selected: ''
    }
  }
  // handleVisibleChange = (_visible) => {
  //  this.setState({
  //   visible,
  //  })
  // }

  onSelect = value => this.setState({ selected: value })

  render () {
    let overlay = [1, 2, 3].map((i, index) => (<Item key={index} value={`option ${i}`}><Text>option {i}</Text></Item>))
    overlay = overlay.concat([
      <Item key='4' value='disabled' disabled><Text style={{ color: '#ddd' }}>disabled option</Text></Item>,
      <Item key='6' value='shut down' style={{ backgroundColor: '#efeff4' }}><Text>shut down</Text></Item>
    ])
    return (
      <View>
        <View>
          <Text style={{ marginTop: 30, marginLeft: 100 }}>Selected: {this.state.selected}</Text>
        </View>
        <View style={styles.menuContainer}>
          <Popover
            ref='mc'
            name='m'
            style={{ backgroundColor: '#eee' }}
            overlay={overlay}
            contextStyle={styles.contextStyle}
            overlayStyle={[styles.overlayStyle, Platform.OS === 'android' && styles.androidOverlayStyle]}
            triggerStyle={styles.triggerStyle} onSelect={this.onSelect}
          >
            <Text>Menu</Text>
          </Popover>
        </View>
      </View>
    )
  }
}
