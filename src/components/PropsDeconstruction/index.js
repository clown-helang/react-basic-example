import React,{ Component } from 'react';
import Children from './Children';
const person = {
  firstname:'Bill',
  lastname:'Gates',
   age:'56'
};

class PropsDeconstruction extends Component {
  render(){
    return (
      <div>
        <Children {...person}/>
      </div>
    );
  }

}

export default PropsDeconstruction;
