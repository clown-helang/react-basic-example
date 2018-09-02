/* Children.js */
import React,{ Component } from 'react';
import PropTypes from 'prop-types';

class Children extends Component {
  render(){
    const showContent=this.props.showContent;
    return (
      <div>
        <div className='screen'>{showContent}</div>
      </div>
    );
  }

}

Children.propTypes = {
  showContent: PropTypes.string,
};
Children.defaultProps={
  showContent:'无内容'
} //设置静态显示内容


export default Children;
