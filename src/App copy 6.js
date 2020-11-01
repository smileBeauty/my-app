import './App.css';
import zhCN from 'antd/lib/locale/zh_CN';
import React from 'react';
import { ConfigProvider } from 'antd';
import FragmentComp from './components/fragment-comp/fragment-comp'

function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <div className="App">
        <FragmentComp></FragmentComp>
      </div>
    </ConfigProvider>
  );
}

export default App;
