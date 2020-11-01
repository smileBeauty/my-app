import './App.css';
import zhCN from 'antd/lib/locale/zh_CN';
import { ConfigProvider } from 'antd';
import FormDemo from './components/form-demo/form-demo'
function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <div className="App">
        <FormDemo />
      </div>
    </ConfigProvider>
  );
}

export default App;
