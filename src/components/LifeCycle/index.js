import React,{ Component } from 'react';

class LifeCycle extends Component {
  constructor(props) {
    super(props);
    alert("Initial render");
    alert("constructor");
    this.state = {
      message: "Hello World"
    };
  }
  componentWillMount() {
    alert("componentWillMount");
  }
  componentDidMount() {
    alert("componentDidMount");
  }
  componentWillReceiveProps(nextProps) {
    alert("componentWillReceiveProps");
  }
  shouldComponentUpdate() {
    alert("shouldComponentUpdate");
    return true;        // 记得要返回true
  }
  componentWillUpdate() {
    alert("componentWillUpdate");
  }
  componentDidUpdate() {
    alert("componentDidUpdate");
  }
  componentWillUnmount() {
    alert("componentWillUnmount");
  }
  setTheState() {
    let s = "hello";
    if (this.state.str === s) {
      s = "HELLO";
    }
    this.setState({
      str: s
    });
  }
  render() {
    alert("render");
    return(
      <div>
        {this.state.message}
        <br/>
        <button onClick={()=>this.setState({message: '你好'})}>点击更新渲染</button>
      </div>
    );
  }
}

export default LifeCycle;
