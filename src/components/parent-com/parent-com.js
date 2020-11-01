import './parent-com.css'
import React from 'react'
import { Button, message } from 'antd';
import ChildCom from '../child-com/child-com'

class ParentCom extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      name: '1'
    }
    this.changeName = this.changeName.bind(this)
  }
  changeName() {
    this.setState({
      name: this.state.name + '-zhangsan'
    }, () => {
      message.info(this.state.name)
    })
  }
  render() {
    return (
      <div className="parent-com">
        <div>{this.state.name}</div>
        <Button type="primary" onClick={this.changeName}>add</Button>
        <ChildCom value={this.state.name} changeName={this.changeName}></ChildCom>
      </div>
    )
  }
}

export default ParentCom