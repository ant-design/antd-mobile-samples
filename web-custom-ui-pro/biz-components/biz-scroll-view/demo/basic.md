---
order: 0
title: 基本
---


````jsx
import { BizScrollView, Icon } from 'antd_mobile_custom_ui_exa';

const data = [
  { url: '/trade.htm?page=buy', type: 'info', text: '买入', 'data-seed': 'BJS49.P2325.B6628' },
  { url: '/trade.htm?page=sell', type: 'check', text: '卖出', 'data-seed': 'BJS49.P2325.B6629' },
  { url: '/trade.htm?page=revoke', type: 'info', text: '撤单', 'data-seed': 'BJS49.P2325.B6630' },
  { url: '/trade.htm?page=query', type: 'check-circle', text: '查询', 'data-seed': 'BJS49.P2325.B6631' },
  { url: '/transfer.htm', type: 'check', text: '银证', 'data-seed': 'BJS49.P2325.B6632' },
];

const Demo = React.createClass({
  renderItem({url, type, text}) {
    return (
      <div onClick={() => pushWindow(url) } className="content-wrap">
        <Icon type={type} />
        <div className="biz-label">{text}</div>
      </div>
    );
  },
  render() {
    return (
      <BizScrollView visibleItemsAmount={4}
        data={data.map(d => this.renderItem(d))}
      />
    );
  },
});

ReactDOM.render(<Demo />, mountNode);
````
