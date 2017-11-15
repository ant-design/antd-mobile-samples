import React from 'react';
import { Icon } from 'antd-mobile';

const CustomIcon = ({ type, className = '', size = 'md', ...restProps }) => (
  <svg
    className={`am-icon am-icon-${type.substr(1)} am-icon-${size} ${className}`}
    {...restProps}
  >
    <use xlinkHref={type} /> {/* svg-sprite-loader@0.3.x */}
    {/* <use xlinkHref={#${type.default.id}} /> */} {/* svg-sprite-loader@lastest */}
  </svg>
);

export default class IconExp extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="container">
        参考： <a href="https://mobile.ant.design/docs/react/upgrade-notes-cn#Icon">icon upgrade</a>

        <br />
        {/* 1.x 中 “内置” svg icon 类型，在 2.0 中依然有效
          并且用法相同，比如 loading icon 用法如下：
        */}
        <Icon type="loading" />

        {/*
        1.x 中 “本地” svg 文件用法 <Icon type={require('./foo.svg)'} /> 在 2.0 中 “也可以” 这样用，
        但 “需要增加以上 CustomIcon 代码” 来实现，然后需要用 CustomIcon 组件(代替 Icon)，用法如下：
        */}
        <CustomIcon type={require('./foo.svg')} />

      </div>
    );
  }
}
