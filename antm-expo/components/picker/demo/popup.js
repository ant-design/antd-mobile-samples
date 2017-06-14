import { View } from 'react-native';
import { Picker, List } from 'antd-mobile';
import React from 'react';
import { district } from 'antd-mobile-demo-data';
export default class PopupExample extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = () => {
            // console.log('start loading data');
            setTimeout(() => {
                this.setState({
                    data: district,
                });
            }, 500);
        };
        this.onChange = (value) => {
            // console.log(value);
            this.setState({ value });
        };
        this.state = {
            data: [],
            value: [],
        };
    }
    render() {
        return (<View style={{ marginTop: 30 }}>
      <List>
        <Picker data={this.state.data} cols={2} value={this.state.value} onChange={this.onChange}>
          <List.Item arrow="horizontal" last onClick={this.onClick}>省市选择(异步加载)</List.Item>
        </Picker>
      </List>
    </View>);
    }
}
