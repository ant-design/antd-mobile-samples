import { Modal, Button, SearchBar } from 'antd-mobile';

export default React.createClass({
  getInitialState() {
    return { visible: false };
  },
  showModal() {
    this.setState({
      visible: true,
    });
  },
  onClose() {
    this.setState({
      visible: false,
    });
  },
  render() {
    return (
      <div>
        <Button type="ghost" size="small" inline onClick={this.showModal}>
          Modal 弹出层
        </Button>
        <Modal
          title="这是 title"
          closable={true}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <div>
            <SearchBar placeholder="搜索" />
          </div>
          <div style={{ marginTop: 500, padding: 20 }}>
            <input type="text" style={{ border: '1px solid #ccc' }} />
          </div>
        </Modal>
      </div>
    );
  },
});
