import React,{ Component } from 'react';
import PropTypes from 'prop-types';

class PropsChildren extends Component {
  render(){
    const {firstname,lastname,age} = this.props;
    return (
      <div>
        <div>父组件传值为：{this.props.propsData}</div>
        <div>父组件传值name为：{this.props.name}</div>

        <div>firstname：{this.props.firstname}</div>
        <div>lastname：{this.props.lastname}</div>
        <div>age：{this.props.age}</div>

        <div>firstname：{firstname}</div>
        <div>lastname：{lastname}</div>
        <div>age：{age}</div>

      </div>
    );
  }

}

PropsChildren.propTypes = {
  firstname: PropTypes.string,
  age:PropTypes.number
};

export default PropsChildren;
