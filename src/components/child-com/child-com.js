import './child-com.css'
import React from 'react'
import { Input } from 'antd';

class ChildCom extends React.Component{
  constructor(props) {
    super(props)
    this.valueChange = this.valueChange.bind(this)
  }

  valueChange(e) {
    const value = e.target.value || ''
    this.props.changeName(value)
  }
  render() {
    const value = this.props.value || ''
    return (
      <div className="child-com">
        <Input value={value} onInput={this.valueChange}></Input>
      </div>
    )
  }
}

export default ChildCom