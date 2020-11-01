import './fancy-button.css';
import React from 'react';
import logProps from '../log-props/log-props';

class FancyButton extends React.Component {
  render() {
    return (
      <button className="FancyButton">
        {this.props.children}
      </button>
    );
  }
}

// 我们导出 LogProps，而不是 FancyButton。
// 虽然它也会渲染一个 FancyButton。
export default logProps(FancyButton);