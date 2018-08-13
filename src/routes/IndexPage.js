import React,{ Component } from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css'

function GetUserName(userName) {
  if (userName) {
    return <h1>Hello, {userName.firstName+' '+userName.lastName}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

class IndexPage extends Component {
  render(){
    const i = 1;
    const element = <h1>Hello, React!</h1>;
    const userName = {
      firstName: 'LeBron',
      lastName: 'James'
    };
    const user = (
      <div>
        <h1> firstName: { userName.firstName } </h1>
        <h1> age: { 30+4 } </h1>
      </div>
    );
    const conditionalElement = (
      <div>
        <h1> { i === 1 ? 'true' : 'false' } </h1>
      </div>
    );
    const tab1 = <div tabIndex="1">tab1</div>;
    const avatar = <img src={require('../assets/yay.jpg')} />;
    //内联样式  注意：style 后使用 {{}}
    const inlineStyle = <h1 style={{ color:'red' }}>内联样式</h1>;
    //外部样式  备注：JSX 的 className 代表的就是 HTML 标签中的 class 属性
    const externalStyle = <h1 className={styles.externalStyle}>外部样式</h1>;
    const annotation = (
      <div>
        {/*这是一段演示注释使用方式的代码*/}
        <h2>注释</h2>
      </div>
    );
    const title = <h1>这是标题</h1>;
    const content = <p>这是内容...</p>;
    const article = (
      <div style={{border:'1px solid red'}}>
        {title}
        {content}
        <p>这里是结尾</p>
      </div>
    );
    return (
      <div>
        {element}
        {user}
        {conditionalElement}
        {GetUserName(userName)}
        {tab1}
        {avatar}
        {inlineStyle}
        {externalStyle}
        {annotation}
        {article}
      </div>
    );
  }
}


export default connect()(IndexPage);
