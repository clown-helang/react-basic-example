  /*index.js*/
  import React from 'react';

  class RenderExample extends React.Component{
    state = {
      date: new Date().toLocaleTimeString()
    };
    componentDidMount(){
      const _this = this;
      this.timer = setInterval(()=>{
        _this.setState({date: new Date().toLocaleTimeString()})
      }, 1000)
    }
    componentWillUnmount(){
      clearInterval(this.timer)
    }
    render (){
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date}.</h2>
        </div>
      );
    }
  }

  export default RenderExample;









