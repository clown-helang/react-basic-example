import React,{ Component } from 'react';
import PropsTypesChildren from './children';
const person = {
  firstname:'Bill',
  age:'56'//age接收number 当传入string时 控制台会 Warning提示，通过提示可以很快定位到错误字段
};

class PropsPage extends Component {
  render(){
    return (
      <div>
        <PropsTypesChildren {...person}/>
      </div>
    );
  }

}

export default PropsPage;
