import React from 'react';
import { Button, SearchBar, Icon, Stepper } from 'antd-mobile';

const Example = (props) => {
  return (
    <div>
      <Button loading>Start</Button>
      <Icon type="check" />
      <Icon type={require('../assets/money.svg')} />
      <SearchBar />
      <Stepper showNumber max={10} min={1} />
    </div>
  );
};

Example.propTypes = {
};

export default Example;
