import './App.css';
import zhCN from 'antd/lib/locale/zh_CN';
import React, { useState, useEffect } from 'react';
import { ConfigProvider } from 'antd';

// function App() {
//   return (
//     <ConfigProvider locale={zhCN}>
//       <div className="App">
//         <Example></Example>
//       </div>
//     </ConfigProvider>
//   );
// }

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      time: 0
    }
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        time: this.state.time + 1
      })
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    return (
      <ConfigProvider locale={zhCN}>
        <div className="App">
          { this.state.time > 15 ? <div>111111</div> : <Example /> }
        </div>
      </ConfigProvider>
    )
  }
}

function Example() {
  const [count, setCount] = useState(0);
  const [dingshiqi, setDingshiqi] = useState(0);
  useEffect(() => {
    const a = setInterval(() => {
      console.log(dingshiqi + 1)
      setDingshiqi(dingshiqi + 1)
    }, 1000);
    return () => {
      clearInterval(a)
    }
  })
  return (
    <div>
      <p>You clicked {count} times</p>
      <p>timer {dingshiqi}</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default App;
