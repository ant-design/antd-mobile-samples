import { Popup, List, Button, Icon, Checkbox } from 'antd-mobile';

const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let wrapProps;
if (isIPhone) {
  wrapProps = {
    onTouchStart: e => e.preventDefault(),
  };
}

export default React.createClass({
  getInitialState() {
    return {
      sel: '',
    };
  },
  onClick() {
    Popup.show(<div>
      <List renderHeader={() => (
        <div style={{ position: 'relative' }}>
          委托买入 <Checkbox onChange={() => console.log('ccc')}>Checkbox</Checkbox>
          <span
            style={{
              position: 'absolute', right: 3, top: -5,
            }}
            onClick={() => this.onClose('cancel')}
          >
            <Icon type="cross" />
          </span>
        </div>)
      }>
        <List.Item>股票名称</List.Item>
        <List.Item>股票代码</List.Item>
        <List.Item>买入价格</List.Item>
        <List.Item>买入数量</List.Item>
        <Checkbox.CheckboxItem onChange={() => console.log('ccc')}>Checkbox</Checkbox.CheckboxItem>
      </List>
      <ul style={{ padding: '0.18rem 0.3rem' }}>
        <li>投资说明投资说明...</li>
        <li style={{ marginTop: '0.18rem' }}>
          <Button type="primary" onClick={() => this.onClose('cancel')}>买入</Button>
        </li>
      </ul>
    </div>, { animationType: 'slide-up', wrapProps: wrapProps });
  },
  onClose(sel) {
    this.setState({ sel });
    Popup.hide();
  },
  render() {
    return (<div style={{ padding: '15px' }}>
      <Button type="ghost" size="small" onClick={this.onClick}>Popup 弹出层</Button>
    </div>);
  },
});
