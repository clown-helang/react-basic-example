import React,{ Component } from 'react';
import Children from './children';

class PropsSingle extends Component {
  constructor(props){
    super(props);
    this.state = {
      name:'Ran'
    }
  }
  render(){
    return (
      <div>
        <Children propsData = 'props' name={this.state.name}/>
      </div>
    );
  }

}

export default PropsSingle;
