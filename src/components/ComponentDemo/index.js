import React from 'react';
import List from './List';

class ComponentDemo extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      tasks:[],
      styles: '',
      width: 400,
      height: 300
    };
    this.input = React.createRef();
    this.ul = null;
  }

  componentWillUpdate() {
    console.log("componentWillUpdate");
  }
  componentDidUpdate() {
    if(this.state.tasks.length >3 && this.ul.style.width !== '600px'){
      this.ul.style.width = '600px';
      this.ul.style.height = '400px';
    }
  }

  addTask = () => {
    const input = this.input.current;
    let tasks = this.state.tasks;
    tasks.push(input.value);
    this.setState({ tasks });
    input.value = '';
    input.focus();
  };

  getDOMStyles = () => {
    let ul = this.ul.current;
    console.log('ul', ul);
    this.setState({
      styles:`ul盒模型宽度: ${ul.offsetWidth},
        ul盒模型高度: ${ul.offsetHeight},
        ul距离顶部高度: ${ul.screenTop},
        ul距离左边高度: ${ul.scrollLeft},`
    })
  };

  render(){
    return (
      <div>
        <div>
          <label>任务：</label>
          <input ref={this.input}/>
          <button onClick={()=>this.addTask()}>添加任务</button>
          <button onClick={()=>this.getDOMStyles()}>获取ul样式</button>
        </div>
        <List data = {this.state.tasks} ul={el => this.ul = el}/>
        <div>
          {this.state.styles}
        </div>
      </div>
    )
  }
}

export default ComponentDemo;
