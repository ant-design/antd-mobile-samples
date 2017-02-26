import React from 'react';
import { Button, SearchBar, Icon } from 'antd-mobile';

const Example = (props) => {
  return (
    <div>
      <Button loading>Start</Button>
      <Icon type="check" />
      <Icon type={require('../assets/money.svg')} />
      <SearchBar />
    </div>
  );
};

Example.propTypes = {
};

export default Example;
