import React from 'react';
import { createForm } from 'rc-form';
import { district } from 'antd-mobile-demo-data';

import { Picker, DatePicker, List, Checkbox, InputItem } from 'antd-mobile';
import enUs from 'antd-mobile/lib/date-picker/locale/en_US';

const CheckboxItem = Checkbox.CheckboxItem;

// 如果不是使用 List.Item 作为 children
const CustomChildren = (props) => {
  return (
    <div
      onClick={props.onClick}
      style={{ backgroundColor: '#fff', height: 45, lineHeight: '45px', padding: '0 15px' }}
    >
      {props.children}
      <span style={{ float: 'right' }}>{props.extra}</span>
    </div>
  );
};

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pickerValue: [],
      // pickerValue: ['340000', '340800', '340824']
      // dpValue: new Date(),
      dpValue: null,
    };
  }
  componentDidMount() {
    this.props.changeTitle('Stage 3');
  }
  render() {
    const { getFieldProps } = this.props.form;
    const { pickerValue, dpValue } = this.state;
    return (<form className="form" onsubmit="return false">
      <List renderHeader={() => <b>表单项</b>}>
        <InputItem />
        <InputItem type="number" />
        <InputItem pattern="[0-9]*" required />
        <InputItem type="submit" value="submit" />
        <CheckboxItem onChange={(e) => console.log('checkbox', e)}>
          CheckboxItem
        </CheckboxItem>
        <Picker extra="请选择(可选)" data={district} title="选择地区" {...getFieldProps('district', {
          initialValue: ['340000', '340800', '340824'],
        })}
        >
          <List.Item arrow="horizontal">省市区选择</List.Item>
        </Picker>
        <DatePicker
          mode="date"
          title="选择日期"
          extra="可选,小于结束日期"
          {...getFieldProps('date1', { initialValue: new Date() }) }
          minDate={new Date(2015, 8, 6)}
          maxDate={new Date(2017, 12, 3)}
        >
          <List.Item arrow="horizontal">日期</List.Item>
        </DatePicker>
      </List>
      <Picker data={district} title="选择地区" extra="请选择(可选)" value={pickerValue} onChange={(v) => this.setState({ pickerValue: v })}>
        <CustomChildren>省市区选择</CustomChildren>
      </Picker>
      <DatePicker mode="date" title="选择日期" extra="请选择(可选)" value={dpValue} onChange={(v) => this.setState({ dpValue: v })}>
        <CustomChildren>时间选择</CustomChildren>
      </DatePicker>
    </form>);
  }
}

export default createForm()(Demo);
