import './App.css';
import zhCN from 'antd/lib/locale/zh_CN';
import React, { Suspense } from 'react';
import { ConfigProvider } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
// import ParentCom from './components/parentCom/parentCom';
const ParentCom = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(import('./components/parent-com/parent-com'))
    }, 3000);
  })
});

function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <div className="App">
        <Suspense fallback={ <LoadingOutlined />}>
          <ParentCom />
        </Suspense>
      </div>
    </ConfigProvider>
  );
}

export default App;
