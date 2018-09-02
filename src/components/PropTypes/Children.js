import React,{ Component } from 'react';
import PropTypes from 'prop-types';

class PropsTypesChildren extends Component {
  render(){
    const {firstname,age} = this.props;
    return (
      <div>
        <div>firstname：{firstname}</div>
        <div>age：{age}</div>
      </div>
    );
  }

}

PropsTypesChildren.propTypes = {
  firstname: PropTypes.string,
  age:PropTypes.number
};

export default PropsTypesChildren;
