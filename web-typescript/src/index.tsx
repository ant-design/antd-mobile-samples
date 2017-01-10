import * as React from "react";
import * as ReactDOM from "react-dom";

import { TsExample } from "./components/TsExample";

export class Index extends React.Component<any, any> {
  render() {
    return (<div>
      <TsExample compiler="TypeScript" />
    </div>);
  }
}

ReactDOM.render(<Index />, document.getElementById("example"));
