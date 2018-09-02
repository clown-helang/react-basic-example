import React,{ Component } from 'react';

class FunctionPage extends Component {
  constructor(){
    super();
    this.state = {name:'Hello world!'};
  }

  preventPop(name, e){    //事件对象e要放在最后
    e.preventDefault();
    alert(name);
  }

  render(){
    return (
      <div>
        <p>hello</p>
        {/* 通过 bind() 方法传递参数。 */}
        <a href="https://reactjs.org" onClick={this.preventPop.bind(this,this.state.name)}>Click</a>
      </div>
    );
  }

}


export default FunctionPage;
