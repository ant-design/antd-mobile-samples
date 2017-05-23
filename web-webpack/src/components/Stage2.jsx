import React from 'react';
import {
  SearchBar, Tabs, Steps,
} from 'antd-mobile';

const TabPane = Tabs.TabPane;

export default class Demo extends React.Component {
  componentDidMount() {
    this.props.changeTitle('Stage 2');
  }
  render() {
    return (<div style={{ marginBottom: 30 }}>

      <SearchBar placeholder="搜索" />

      <Tabs defaultActiveKey="1">
        <TabPane tab="选项卡一" key="1">
          <Steps direction="horizontal">
            <Steps.Step title="现在" description="立即买入" />
            <Steps.Step title="11月3日" description="买入成功" />
            <Steps.Step title="11月4日" description="收益到账" />
          </Steps>
        </TabPane>
        <TabPane tab="选项卡二" key="2">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 2000 }}>
            选项卡二内容，内容很长，测试向下滑动页面，是否会导致 tab content 内容的左右偏移
          </div>
        </TabPane>
      </Tabs>
    </div>);
  }
}
