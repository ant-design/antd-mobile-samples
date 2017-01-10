import * as React from "react";
import { Button, Accordion, List, TextareaItem } from 'antd-mobile';

export interface HelloProps {
  compiler: string;
}

export class TsExample extends React.Component<HelloProps, {}> {
  render() {
    return (<div>
      <h1>This is {this.props.compiler} + antd-mobile demo!</h1>
      <Button loading disabled size="small">Start</Button>
      <TextareaItem maxLength={2} count={3} />
      <Accordion accordion openAnimation={{}} className="my-accordion">
          <Accordion.Panel header="标题一">
            <List>
              <List.Item>子内容一</List.Item>
              <List.Item>子内容二</List.Item>
              <List.Item>子内容三</List.Item>
            </List>
          </Accordion.Panel>
          <Accordion.Panel header="标题二" className="pad">this is panel content2 or other</Accordion.Panel>
          <Accordion.Panel header="标题三" className="pad">
            文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本
          </Accordion.Panel>
        </Accordion>
    </div>);
  }
}
