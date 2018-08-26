import React,{ Component } from 'react';

class Children extends Component {
  render(){
    return (
      <div>
        <div>父组件传值为：{this.props.propsData}</div>
        <div>父组件传值name为：{this.props.name}</div>
      </div>
    );
  }

}

export default Children;
