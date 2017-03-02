import { createForm } from 'rc-form';
import moment from 'moment'; // moment.min ~= 48kb
import { district } from 'antd-mobile-demo-data';

import { Picker, DatePicker, List, Checkbox } from 'antd-mobile';
import enUs from 'antd-mobile/lib/date-picker/locale/en_US';

import AsyncPicker from './Picker';

const CheckboxItem = Checkbox.CheckboxItem;

// 如果不是使用 List.Item 作为 children
const CustomChildren = (props) => {
  return (
    <div
      onClick={props.onClick}
      style={{ backgroundColor: '#fff', height: '0.9rem', lineHeight: '0.9rem', padding: '0 0.3rem' }}
    >
      {props.children}
      <span style={{ float: 'right' }}>{props.extra}</span>
    </div>
  );
};

let Test = React.createClass({
  getInitialState() {
    return {
      pickerValue: [],
      // pickerValue: ['340000', '340800', '340824']
      // dpValue: moment(),
      dpValue: null,
    }
  },
  render() {
    const { getFieldProps } = this.props.form;
    const { pickerValue, dpValue } = this.state;
    return (<div className="form">
      <List renderHeader={() => <b>选择时间</b>}>
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
          {...getFieldProps('date1', { initialValue: moment() })}
          minDate={moment('2015-08-06', 'YYYY-MM-DD')}
          maxDate={moment('2017-12-03', 'YYYY-MM-DD')}
        >
          <List.Item arrow="horizontal">日期</List.Item>
        </DatePicker>
      </List>
      <AsyncPicker>
        <CustomChildren>多列异步 Picker</CustomChildren>
      </AsyncPicker>
      <Picker data={district} title="选择地区" extra="请选择(可选)" value={pickerValue} onChange={(v) => this.setState({ pickerValue: v })}>
        <CustomChildren>省市区选择</CustomChildren>
      </Picker>
      <DatePicker mode="date" title="选择日期" extra="请选择(可选)" value={dpValue} onChange={(v) => this.setState({ dpValue: v })}>
        <CustomChildren>时间选择</CustomChildren>
      </DatePicker>
    </div>);
  },
});

Test = createForm()(Test);
export default Test;
