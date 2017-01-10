import * as React from "react";
import { Button, SearchBar } from 'antd-mobile';

export interface HelloProps {
  compiler: string;
}

export class TsExample extends React.Component<HelloProps, {}> {
  render() {
    return (<div>
      <h1>Hello this is {this.props.compiler} + antd-mobile demo!</h1>
      <Button>Start</Button>
      <SearchBar />
    </div>);
  }
}
