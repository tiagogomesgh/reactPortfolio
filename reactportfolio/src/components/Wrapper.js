import React from 'react';
// import SubWrapper from './components/SubWrapper';

export default function Wrapper(children) {
  return <div className="wrapper">
      <div className="name">
       <strong>Tiago Gomes</strong>
       <strong>(727)-504-2518</strong>
       <a href="https://www.linkedin.com/in/tiago-gomes-a85990221/">Linked-In</a>
       <a href="https://github.com/tiagogomesgh">GitHub</a>
       <strong>tiagogomesfl@outlook.com</strong>
         

      </div>

      <div className="skills">
        <strong>Node.js</strong>
        <strong>React.js</strong>
        <strong>C#</strong>
        <strong>SQL</strong>
        <strong>CSS</strong>
      
      </div>

      <div className="sub-wrapper">
            {/* <SubWrapper>

            </SubWrapper> */}

      </div>
  </div>;
}


