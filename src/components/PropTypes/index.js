import React,{ Component } from 'react';
import PropsTypesChildren from './Children';
const person = {
  firstname:'Bill',
  age:'Bill'//age接收number 当传入string时 控制台会 Warning提示，通过提示可以很快定位到错误字段
};

class PropsTypes extends Component {
  render(){
    return (
      <div>
        <PropsTypesChildren {...person}/>
      </div>
    );
  }

}

export default PropsTypes;
