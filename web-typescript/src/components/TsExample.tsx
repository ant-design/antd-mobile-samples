import * as React from "react";
import { Button } from 'antd-mobile';

export interface HelloProps {
  compiler: string;
}

export class TsExample extends React.Component<HelloProps, {}> {
  render() {
    return (<div>
      <h1>This is {this.props.compiler} + antd-mobile demo!</h1>
      <Button size="small" inline type="primary">Start</Button>
    </div>);
  }
}