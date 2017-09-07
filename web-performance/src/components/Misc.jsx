import React from 'react';
import {
  SearchBar, Tabs, Steps,
  NavBar, Icon, Button,
} from 'antd-mobile';

export default class Misc extends React.Component{
  render() {
    return (<div style={{ marginBottom: 30 }}>
      <NavBar
        leftContent="返回" mode="light"
        onLeftClick={() => alert('onLeftClick') }
        rightContent={[
          <Icon key="1" type="search" />,
          <Button key="2" type="primary" inline onClick={(e) => alert(e.toString()) }>Start</Button>
        ]}
      >NavBar</NavBar>

      <SearchBar placeholder="搜索" />

      <Tabs tabs={[{ title: '选项卡一' }, { title: '选项卡二' }]} renderTab={tab => tab.title} initialPage={1}>
        <Steps direction="horizontal">
          <Steps.Step title="现在" description="立即买入" />
          <Steps.Step title="11月3日" description="买入成功" />
          <Steps.Step title="11月4日" description="收益到账" />
        </Steps>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 2000 }}>
          选项卡二内容，内容很长，测试向下滑动页面，是否会导致 tab content 内容的左右偏移
        </div>
      </Tabs>
    </div>);
  }
}
