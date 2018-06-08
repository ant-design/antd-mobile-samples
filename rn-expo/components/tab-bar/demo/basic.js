import React from 'react'
import { View, Text } from 'react-native'
import { TabBar, SearchBar } from 'antd-mobile-rn'
export default class BasicTabBarExample extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedTab: 'redTab'
    }
  }
  renderContent = pageText =>
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
      <SearchBar placeholder='search for' showCancelButton cancelText='Cancel' />
      <Text style={{ margin: 50 }}>{pageText}</Text>
    </View>

  onChangeTab = tabName => this.setState({ selectedTab: tabName })

  render () {
    return (<TabBar unselectedTintColor='#949494' tintColor='#33A3F4' barTintColor='#ccc'>
      <TabBar.Item title='Life' icon={require('./alipay.png')} selectedIcon={require('./alipay_sel.png')} selected={this.state.selectedTab === 'blueTab'} onPress={() => this.onChangeTab('blueTab')}>
        {this.renderContent('Life Tab')}
      </TabBar.Item>
      <TabBar.Item icon={require('./koubei.png')} selectedIcon={require('./koubei_sel.png')} title='Chat' badge={2} selected={this.state.selectedTab === 'redTab'} onPress={() => this.onChangeTab('redTab')}>
        {this.renderContent('Chat Tab')}
      </TabBar.Item>
      <TabBar.Item icon={require('./friend.png')} selectedIcon={require('./friend_sel.png')} title='Friends' selected={this.state.selectedTab === 'greenTab'} onPress={() => this.onChangeTab('greenTab')}>
        {this.renderContent('Friends Tab')}
      </TabBar.Item>
      <TabBar.Item icon={require('./busi.png')} selectedIcon={require('./busi_sel.png')} title='Me' selected={this.state.selectedTab === 'yellowTab'} onPress={() => this.onChangeTab('yellowTab')}>
        {this.renderContent('Me Tab')}
      </TabBar.Item>
    </TabBar>)
  }
}
