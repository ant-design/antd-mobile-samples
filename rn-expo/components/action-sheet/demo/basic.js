import React from 'react'
import { View, Text, Platform } from 'react-native'
import { ActionSheet, Button } from 'antd-mobile-rn'

export const title = 'ActionSheet'

export const description = 'ActionSheet example'

export default class Test extends React.Component {
  constructor () {
    super()
    this.state = {
      clicked: 'none',
      text: ''
    }
  }

  showActionSheet = () => {
    const BUTTONS = ['Option 1', 'Option 2', 'Option 3', 'Delete', 'Cancel']
    ActionSheet.showActionSheetWithOptions({
      title: 'Title',
      message: 'I am describing that',
      options: BUTTONS,
      cancelButtonIndex: 4,
      destructiveButtonIndex: 3
    }, (buttonIndex) => {
      this.setState({ clicked: BUTTONS[buttonIndex] })
    })
  }

  showShareActionSheet = () => {
    const opts = {
      url: 'https://www.alipay.com/',
      message: 'message to go with the shared url',
      excludedActivityTypes: [
        <Button onClick={() => ActionSheet.close()}>close ActionSheet</Button>
      ],
      subject: null
    }
    if (Platform.OS === 'ios') {
      opts.subject = 'a subject to go in the email heading'
      opts.excludedActivityTypes = [
        'com.apple.UIKit.activity.PostToTwitter'
      ]
    }
    ActionSheet.showShareActionSheetWithOptions(opts, (error) => alert(error), (success, method) => {
      let text
      if (success) {
        text = `by ${method} share it`
      } else {
        text = 'You did not share'
      }
      this.setState({ text })
    })
  }

  render () {
    return (
      <View style={{ marginTop: 30 }}>
        <View style={[{ padding: 8 }]}>
          <Button onClick={this.showActionSheet}>Default state action list</Button>
        </View>
        <Text style={[{ padding: 8 }]}>
          Clicked button: {this.state.clicked}
        </Text>
        <View style={[{ padding: 8 }]}>
          <Button onClick={this.showShareActionSheet}>Sharing actions</Button>
        </View>
        <Text style={[{ padding: 8 }]}>
          {this.state.text}
        </Text>
      </View>
    )
  }
}
