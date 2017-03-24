import React from 'react';
import { hashHistory } from 'react-router';
import { Button, NavBar, WhiteSpace } from 'antd-mobile';

export default class App extends React.Component{
  render() {
    const history=hashHistory;
    return (
      <div style={{minHeight:480}}>
        <NavBar mode="light" iconName={false}>第一界面</NavBar>

        <WhiteSpace size="lg"/>
        <Button onClick={() => {
          history.push("/next");
          console.log('第一界面 点击按钮 B');
        }}>
          父页面 button 测试 点击穿透
        </Button>

      </div>
    );
  }
}
