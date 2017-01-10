import React from 'react';
import Icon from 'antd-mobile/lib/icon/index.web';
import assign from 'object-assign';

export interface Props {
  prefixCls?: string;
}
export default class MyIcon extends React.Component<Props, any> {
  static defaultProps = {
    prefixCls: 'am-icon',
  };
  render() {
    const props = assign({}, this.props);
    delete props.prefixCls;
    return (
      <span className="extend-icon"><Icon {...props} /></span>
    );
  }
}
