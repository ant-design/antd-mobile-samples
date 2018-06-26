/* tslint:disable:jsx-no-multiline-js */
import React from 'react'
import { Image, ScrollView, View } from 'react-native'
import { List } from 'antd-mobile-rn'

const Item = List.Item
const Brief = Item.Brief

export default class BasicListExample extends React.Component {
  render () {
    return (
      <ScrollView
        style={{ flex: 1, backgroundColor: '#f5f5f9' }}
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <List renderHeader={() => 'basic'}>
          <Item data-seed='logId'>Headline text click no feedback, text is long, hidden, text is long, hidden</Item>
          <Item wrap>Text Long Line Text Long Line Text Long Line Text Long Line Text Long Line</Item>
          <Item disabled extra='Right arrow' arrow='horizontal' onClick={() => { }}>Headline text</Item>
          <Item extra='Down arrow' arrow='down' onClick={() => { }}>Headline text</Item>
          <Item extra='Up arrow' arrow='up' onClick={() => { }}>Headline text</Item>
          <Item extra='No arrow' arrow='empty'>Headline text</Item>
          <Item
            extra={
              <View>
                 Content Details
                <Brief style={{ textAlign: 'right' }}>Auxiliary text content</Brief>
              </View>}
            multipleLine
          >
            Center vertical alignment
          </Item>
          <Item extra=' Content Details' multipleLine>
            Center vertical alignment<Brief>Auxiliary text content</Brief>
          </Item>
          <Item wrap extra='Text Long Lines Text Long Lines Text Long Lines Text Long Lines Text Long Lines Text Long Lines Long Lines Long Lines' multipleLine align='top' arrow='horizontal'>
            Top alignment
            <Brief>Auxiliary text contentAuxiliary text contentAuxiliary text contentAuxiliary text content</Brief>
            <Brief>Auxiliary text content</Brief>
          </Item>
          <Item
            extra={<View>
               Content Details
              <Brief style={{ textAlign: 'right' }}>Auxiliary text content</Brief>
            </View>}
            multipleLine
            align='bottom'
          >
            Bottom alignment
          </Item>
        </List>
        <List renderHeader={() => 'With thumbnails'}>
          <Item thumb='https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png'>thumb</Item>
          <Item
            thumb='https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png'
            arrow='horizontal'
          >
            thumb
          </Item>
          <Item
            extra={<Image
              source={{ uri: 'https://os.alipayobjects.com/rmsportal/mOoPurdIfmcuqtr.png' }}
              style={{ width: 29, height: 29 }}
            />}
            arrow='horizontal'
          >
            extra with Image
          </Item>
        </List>
      </ScrollView>
    )
  }
}
