import React,{ Component } from 'react';
import DefaultPropsChildren from './Children';
const person={
  name:'小明',
  age:12
};

class DefaultProps extends Component {
  render() {
    return (
      <div>
        <DefaultPropsChildren />
        <DefaultPropsChildren {...person}/>
      </div>
    );
  }
}

export default DefaultProps;
