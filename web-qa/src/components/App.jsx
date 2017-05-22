import React from 'react';
import { hashHistory } from 'react-router';
import { NavBar } from 'antd-mobile';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: 'app',
    };
  }
  render() {
    // console.log(this.props.route, this.props.params, this.props.routeParams);
    return (
      <div className="root-layout">
        <NavBar mode="light" onLeftClick={() => hashHistory.goBack()}>{this.state.title}</NavBar>
        {React.cloneElement(this.props.children, {
          changeTitle: title => this.setState({ title })
        })}
      </div>
    );
  }
}
