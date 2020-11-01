import './error-component.css'
import React from 'react'

class ErrorComponent extends React.Component{
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // 更新 state 使下一次渲染可以显降级 UI
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // "组件堆栈" 例子:
    //   in ComponentThatThrows (created by App)
    //   in ErrorBoundary (created by App)
    //   in div (created by App)
    //   in App
    console.error('error', error)
    console.error('info', info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-com">
          应用异常
        </div>
      )
    }
    return this.props.children
  }
}

export default ErrorComponent