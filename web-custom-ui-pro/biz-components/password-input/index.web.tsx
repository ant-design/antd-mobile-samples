import React from 'react';
import './style/index.less';

class PasswordInput extends React.Component<any, any> {
  refs: any;
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
    this.onInput = this.onInput.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.resetPassword = this.resetPassword.bind(this);

    this.state = {
      password: '',
    };
  }

  componentDidUpdate(preProps) {
    if (!preProps.visible && this.props.visible) {
      this.refs.input.focus();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.visible && this.props.visible) {
      this.setState({
        password: '',
      });
    }
  }

  onInput() {
    const inputEl = this.refs.input;
    const password = inputEl.value;

    this.setState({
      password,
    });

    if (this.props.onInput) {
      this.props.onInput(password);
    }
    if (password.length === 6 && this.props.onComplete) {
      // complete 时，需要让input失去焦点，否则键盘会无法收起
      inputEl.blur();
      // TODO: 使用 this.state.password 以 props.value 作为默认值，当 props.value
      // 变更时重新设置 state。届时清空密码的操作可以通过父组件变更 props.value
      // 来实现，不需要这里传入函数给父组件。
      setTimeout(() => {
        this.props.onComplete(password, this.resetPassword);
      }, 100);
    }
  }

  onClick() {
    this.refs.input.focus();
    addClass(this.refs.password, 'active');
    if (this.props.onFocus) {
      this.props.onFocus();
    }
  }

  onBlur() {
    removeClass(this.refs.password, 'active');
    if (this.props.onBlur) {
      this.props.onBlur();
    }
  }

  resetPassword() {
    this.setState({
      password: '',
    });
  }

  render() {
    const { password } = this.state;
    const { visible } = this.props;

    const tpl = getPasswordBoxTpl(password);
    const containerClass = getContainerClass(visible);

    return (
      <div className={containerClass} ref="password">
        <ul
          className="password-input-container"
          onClick={this.onClick}
        >
          {tpl}
        </ul>
        <input
          ref="input"
          type="number"
          pattern="[0-9]*"
          value={password}
          onBlur={this.onBlur}
          onInput={this.onInput}
        />
      </div>
    );
  }
}

function getContainerClass(visible) {
  return visible ? 'password-input' : 'password-input hidden';
}

function getPasswordBoxTpl(password) {
  const passwordLength = password ? password.length : 0;
  const tpl = [] as any;
  for (let i = 0; i < 6; i++) {
    tpl.push(
      <li
        key={i}
        className={i < passwordLength ? 'password' : ''}
      ></li>
    );
  }
  return tpl;
}

function addClass(elem, className) {
  const names = elem.className.trim().split(/\s+/);
  if (names.indexOf(className) < 0) {
    names.push(className);
    elem.className = names.join(' ');
  }
}

function removeClass(elem, className) {
  const names = elem.className.trim().split(/\s+/);
  const index = names.indexOf(className);
  if (index >= 0) {
    names.splice(index, 1);
    elem.className = names.join(' ');
  }
}

export default PasswordInput;
