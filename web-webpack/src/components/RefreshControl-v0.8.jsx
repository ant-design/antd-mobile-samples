import { RefreshControl, List } from 'antd-mobile';

let count = 1;
const App = React.createClass({
  getInitialState() {
    return {
      items: null,
    };
  },
  loadingFunction() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (this.addItem()) {
          resolve();
        } else {
          reject();
        }
      }, 500);
    });
  },
  addItem() {
    const newItems = this.state.items ? [...this.state.items] : [];
    newItems.unshift(
      <List.Item key={`item-${count}`} extra="horizontal,箭头向右" arrow="horizontal">标题文字 {count++}</List.Item>
    );
    this.setState({
      items: newItems,
    });
    return true;
  },
  render() {
    return (
      <RefreshControl
        loadingFunction={this.loadingFunction}
        resistance={1}
        className="am-refresh-control-demo1"
        style={{
          textAlign: 'center',
          height: 400,
        }}
      >
        <List title="下拉刷新">
          <List.Body>
            {this.state.items}
            <List.Item extra="horizontal,箭头向右" arrow="horizontal">标题文字</List.Item>
            <List.Item extra="down,箭头向下" arrow="down">标题文字</List.Item>
            <List.Item extra="up,箭头向上" arrow="up">标题文字</List.Item>
          </List.Body>
        </List>
      </RefreshControl>
    );
  },
});
export default App;
