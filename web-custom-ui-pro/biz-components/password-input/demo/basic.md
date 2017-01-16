---
order: 0
title: 基本
---


````jsx
import { PasswordInput } from 'antd_custom_ui';

const Demo = React.createClass({
  render() {
    const onComplete = function () {};
    const onFocus = function () {};
    const onInput = function () {};
    const onBlur = function () {};
    return (
      <PasswordInput
        visible
        onComplete={onComplete}
        onFocus={onFocus}
        onInput={onInput}
        onBlur={onBlur}
      />
    );
  },
});

ReactDOM.render(<Demo />, mountNode);
````
