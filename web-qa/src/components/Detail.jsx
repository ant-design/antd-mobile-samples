import React from 'react';
import { hashHistory } from 'react-router';
import { Button, NavBar, WhiteSpace } from 'antd-mobile';

export default class Detail extends React.Component{
  constructor(props){
    super(props);
    this.state={
      current: 'Next',
    };
  }
  render() {
    const history = hashHistory;
    return (
      <div style={{minHeight:480}}>
        <NavBar mode="light" onLeftClick={() => history.push("/")}>第二界面</NavBar>

        <WhiteSpace size="lg"/>
        <Button onClick={(e) => {
          e.preventDefault();
          alert('触发了第二界面的【Button】按钮');
        }}>
          子页面 button 是否触发 点击穿透
        </Button>

      </div>
    );
  }
}

