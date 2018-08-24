import React,{ Component } from 'react';
import DefaultPropsChildren from './children';
const person={
  name:'小明',
  age:12
}

class defaultPropsPage extends Component {
  render() {
    return (
      <div>
        <DefaultPropsChildren />
        <DefaultPropsChildren {...person}/>
      </div>
    );
  }
}

export default defaultPropsPage;
