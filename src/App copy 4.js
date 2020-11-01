import './App.css';
import zhCN from 'antd/lib/locale/zh_CN';
import React from 'react';
import { ConfigProvider } from 'antd';
import FancyButton from './components/ref-comp/ref-comp';

function App() {
  const ref = React.createRef();
  return (
    <ConfigProvider locale={zhCN}>
      <div className="App">
        <FancyButton ref={ref}>Click me!</FancyButton>
      </div>
    </ConfigProvider>
  );
}

export default App;
