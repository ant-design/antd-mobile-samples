import React from 'react';
import { hashHistory } from 'react-router';
import { Button, WhiteSpace } from 'antd-mobile';

export default class Index extends React.Component{
  componentDidMount() {
    this.props.changeTitle('第一界面')
  }
  render() {
    return (
      <div>
        <WhiteSpace size="lg"/>
        <Button onClick={() => {
          hashHistory.push("/next");
          console.log('第一界面 点击按钮 B');
        }}>
          父页面 button 测试 点击穿透
        </Button>
      </div>
    );
  }
}
