import React from 'react';
import { Button, WhiteSpace } from 'antd-mobile';

export default class Detail extends React.Component{
  componentDidMount() {
    this.props.changeTitle('第二界面')
  }
  render() {
    return (
      <div>
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

