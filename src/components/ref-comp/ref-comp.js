import './ref-comp.css';
import React from 'react';

const FancyButton = React.forwardRef((props, ref) => {
  function onBtnClick(e) {
    console.log('ref1', ref)
  }
  return (
    <button ref={ref} className="FancyButton" onClick={onBtnClick}>
      {props.children}
    </button>
  )
});

export default FancyButton;