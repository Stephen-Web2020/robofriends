import React from 'react';

// children- every props object has children
const Scroll = (props) => {
  return (
    <div style={{overflowY: 'scroll', border: '5px solid black', height: '800px'}}>
      {props.children}
    </div>
  );
};


export default Scroll;
