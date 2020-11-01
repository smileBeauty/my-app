import './App.css';
import zhCN from 'antd/lib/locale/zh_CN';
import React from 'react';
import { ConfigProvider } from 'antd';
import FancyBtn from './components/fancy-button/fancy-button'

function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <div className="App">
        <FancyBtn>1111</FancyBtn>
      </div>
    </ConfigProvider>
  );
}

export default App;
