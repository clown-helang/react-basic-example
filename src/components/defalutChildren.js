import React,{ Component } from 'react';

class DefaultPropsChildren extends Component {
  render(){
    return (
      <div>
        <div>{this.props.name}:{this.props.age}岁</div>
      </div>
    );
  }

}
DefaultPropsChildren.defaultProps = {
  name:'Bill Gates',
  age:56,
}

export default DefaultPropsChildren;
