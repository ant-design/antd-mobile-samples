import React from 'react';
import { Drawer, List, NavBar } from 'antd-mobile';

export default class DrawerTest extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      open: false,
      position: 'right',
    };
  }

  onOpenChange = () => {
    this.setState({ open: !this.state.open });
  }

  render() {
    const sidebar = (<List>{[...Array(20).keys()].map((i, index) => (<List.Item key={index}>item{index}</List.Item>))}</List>);
    const drawerProps = {
      open: this.state.open,
      position: this.state.position,
      onOpenChange: this.onOpenChange,
    };
    return (<div style={{ height: '100%' }}>
      <NavBar iconName="ellipsis" onLeftClick={this.onOpenChange}>Click Left Navbar</NavBar>
      <div style={{ position: 'relative', height: '100%' }}>
        <Drawer sidebar={sidebar} {...drawerProps}>drawer content</Drawer>
      </div>
    </div >);
  }
}
