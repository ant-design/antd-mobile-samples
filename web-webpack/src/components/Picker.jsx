import { Button, Picker } from 'antd-mobile';
import React from 'react';

export default React.createClass({
  getInitialState() {
    return {
      value: [],
      cols: 2,
      data: [
        {
          "label": "北京",
          "value": "1",
          "children": [
            {
              "label": "东城区",
              "value": "1-1"
            },
            {
              "label": "西城区",
              "value": "1-2"
            }
          ]
        },
        {
          "label": "浙江",
          "value": "2",
          "children": []
        }
      ]
    }
  },
  handlePickerChange(value) {
    const d = [...this.state.data];
    if (value[0] === "2") {
      //动态加两列数据
      d[1].children = [
        {
          "label": "杭州",
          "value": "2-1",
          "children": [
            {
              "label": "西湖",
              "value": "2-1-1"
            },
          ]
        },
        {
          "label": "宁波",
          "value": "2-2"
        }
      ];
     	this.setState({
        data: d,
        cols: 3,
        value: ["2", "2-1", "2-1-1"]
      });
    }
  },
  render() {
    return (
      <div>
        <Picker {...this.state} onPickerChange={this.handlePickerChange}>
          {this.props.children}
        </Picker>
    	</div>
    )
  }
})
