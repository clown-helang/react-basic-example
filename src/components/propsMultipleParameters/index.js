import React,{ Component } from 'react';
import Children from './children';
const person = {
  firstname:'Bill',
  lastname:'Gates',
   age:'56'
};

class propsMultipleParameters extends Component {
  render(){
    return (
      <div>
        <Children firstname={person.firstname} lastname={person.lastname} age={person.age}/>
      </div>
    );
  }

}

export default propsMultipleParameters;
