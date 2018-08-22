import React,{ Component } from 'react';

class StatePage extends Component {
  constructor(props){
    super(props);
    this.state = {//初始化 state
      num:0
    }
  }
  add = () =>{
    this.setState({
      num:++this.state.num //state 值改变
    });
  };
  clearNum = ()=>{
    this.setState({ //state 值改变
      num:0
    })
  }
  render(){
    return (
      <div>
        <div>{this.state.num}</div>
        <div><button onClick={this.add}>点击累加</button></div>
        <div><button onClick={this.clearNum}>清零</button></div>
      </div>
    );
  }

}


export default StatePage;
