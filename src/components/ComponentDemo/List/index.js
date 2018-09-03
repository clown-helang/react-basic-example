  import React from 'react';

  function List({data, ul}) {
    return (
      <ul ref={ul} style={{backgroundColor: '#ccc', width: 300, height: 200}}>
        任务任务列表：
        {data.length>0 && data.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    )
  }

  export default List;











