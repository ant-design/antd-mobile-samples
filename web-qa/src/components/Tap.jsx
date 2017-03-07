import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import { Button, NavBar, WhiteSpace, WingBlank, List, Card } from 'antd-mobile';

class Base extends React.Component{
  render() {
    return (this.props.children != null ? this.props.children : <App {...this.props} />);
  }
};
class App extends React.Component{
  render() {
    const history=hashHistory;
    return (
      <div style={{minHeight:480}}>
        <NavBar mode="light" iconName={false}>第一界面</NavBar>
        <WhiteSpace size="lg"/>
        <List>
          <List.Item arrow="horizontal"
            onClick={() => { history.push("/next"); console.log('第一界面 点击 List.Item A'); }}>
            <span style={{color: "green"}}>List.Item A——出现异常</span>
          </List.Item>
        </List>
        <WhiteSpace size="lg"/>
        <Button onClick={() => { history.push("/next"); console.log('第一界面 点击按钮 B'); }}>
          <span style={{color: "green"}}>Button 按钮B——出现异常</span>
        </Button>

        <WhiteSpace size="lg"/>
        <Button onClick={() => setTimeout(()=>history.push("/next"),0)}>
          <span style={{color: "green"}}>Button 按钮C 点击无异常</span>
        </Button>

        <WhiteSpace size="lg"/>
        <div style={{backgroundColor:"#FFF",paddingLeft:15,height:42,lineHeight:"42px"}}
          onClick={() => history.push("/next")}>
          <span style={{color: "green"}}>Div 按钮C——点击无异常</span>
        </div>

        <WingBlank size="lg">
          <Card onClick={() => console.log('点击 Card 测试 Fastclick')}>
            <Card.Header title="在Android浏览器中出现onClick穿透"></Card.Header>
            <Card.Body style={{lineHeight:"20px",fontSize:"16px"}}>
              当前测试在List.Item,Button组件存在此类问题，<br/>
              即在第一界面点击“List.Item A”进入第二界面时，会触发第二界面相同位置上的“事件A”按钮.</Card.Body>
          </Card>
        </WingBlank>
      </div>
    );
  }
}
class Next extends React.Component{
  constructor(props){
    super(props);
    this.state={
      current:"Next"
    }
  }
  onClickA = (content) => {
    console.log(content);
    alert(content);
  }
  onClickB = (e, content) => {
    e.preventDefault();
    console.log(content);
    alert(content);
  }

  render() {
    const history=hashHistory;
    return (
      <div style={{minHeight:480}}>
        <NavBar mode="light" onLeftClick={()=>history.push("/")}>第二界面</NavBar>
        <WhiteSpace size="lg"/>
        <List>
          <List.Item arrow="horizontal"
                      onClick={() => this.onClickA("触发了第二界面的【List.Item】")}>
            <span style={{color: "red"}}>List.Item</span>
          </List.Item>
        </List>

        <WhiteSpace size="lg"/>
        <Button onClick={(e) => this.onClickB(e, "触发了第二界面的【Button】按钮")}>
          <span style={{color: "red"}}>Button</span>
        </Button>

        <WhiteSpace size="lg"/>
        <Button onClick={(e) => this.onClickB(e, "触发了第二界面的【Button2】按钮")}>
          <span style={{color: "red"}}>Button2</span>
        </Button>

        <WhiteSpace size="lg"/>
        <div style={{backgroundColor:"#FFF",paddingLeft:15,height:42,lineHeight:"42px"}}
          onClick={(e) => this.onClickB(e, "触发了第二界面的【Div】按钮")}>
          <span style={{color: "red"}}>Div</span>
        </div>
      </div>
    );
  }
}

export default function TapTest() {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={Base}>
        <Route path="app" component={App}></Route>
        <Route path="next" component={Next}></Route>
      </Route>
    </Router>
  );
};
