import React,{ Component } from 'react';
import PropsChildren from './PropsChildren';
const person = {
  firstname:'Bill',
  lastname:'Gates',
   age:'56'
};

class PropsPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      name:'Ran'
    }
  }
  render(){
    return (
      <div>
        <PropsChildren propsData = 'props' name={this.state.name}/>

        <PropsChildren firstname={person.firstname} lastname={person.lastname} age={person.age}/>

        <PropsChildren {...person}/>

      </div>
    );
  }

}

export default PropsPage;
