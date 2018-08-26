  /* index.js */
  import React from 'react';
  import styles from './index.css';
  function GetUserName(userName) {
    if (userName) {
      return <h1>Hello, {userName.firstName+' '+userName.lastName}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
  }
  const JSXExample = () => {
    const userName = {
      firstName: 'LeBron',
      lastName: 'James'
    };
    return (
      <div>
        <h1 className={styles.title}>JSXExample</h1>
        {/*JSX注释示例*/}
        <div style={{marginTop: 20}}>
         { userName !== null
           ? GetUserName(userName)
           : GetUserName()
         }
        </div>
      </div>
    );
  };
  export default JSXExample;


