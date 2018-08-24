import React,{ Component } from 'react';

class Children extends Component {
  render(){
    return (
      <div>
        <div>firstname：{this.props.firstname}</div>
        <div>lastname：{this.props.lastname}</div>
        <div>age：{this.props.age}</div>
      </div>
    );
  }

}

export default Children;
