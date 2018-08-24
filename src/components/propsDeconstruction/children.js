import React,{ Component } from 'react';

class Children extends Component {
  render(){
    const {firstname,lastname,age} = this.props;
    return (
      <div>
        <div>firstname：{firstname}</div>
        <div>lastname：{lastname}</div>
        <div>age：{age}</div>
      </div>
    );
  }

}

export default Children;
