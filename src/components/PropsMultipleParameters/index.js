import React,{ Component } from 'react';
import Children from './Children';
const person = {
  firstname:'Bill',
  lastname:'Gates',
   age:'56'
};

class PropsMultipleParameters extends Component {
  render(){
    return (
      <div>
        <Children firstname={person.firstname} lastname={person.lastname} age={person.age}/>
      </div>
    );
  }

}

export default PropsMultipleParameters;
