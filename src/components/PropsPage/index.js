/* index.js*/
import React,{ Component } from 'react';
import Children from './Children';

class PropsPage extends Component {
  constructor(){
    super()
    this.state={status:'off'}//设置默认状态为'off'
  }
  clickButton(){
    this.setState(
      {status:this.state.status=='off'?'on':'off'}//改变status
    )
  }
  render(){
    return(
      <div>
        <button onClick={this.clickButton.bind(this)}>开关</button>
        <Children showContent={this.state.status=='off'?'显示器关了':'显示器亮了'} />
      </div>
    )
  }
}


export default PropsPage;
