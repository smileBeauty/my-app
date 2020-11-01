import './form-demo.css'
import React from 'react'
import { Form, Input, Radio, InputNumber, DatePicker, Select, Button, message } from 'antd';
import moment from 'moment';
const { Option } = Select;
const { TextArea } = Input;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
}

const formRules = {
  name: [
    { required: true, message: '请输入姓名!' }
  ],
  password: [
    { required: true, message: '请输入密码!' }
  ],
  sex: [
    { required: true, message: '请选择性别!' }
  ],
  age: [
    { required: true, message: '请输入年龄!' }
  ],
  birthday: [
    { required: true, message: '请选择出生日期!' }
  ],
  fruite: [
    { required: true, message: '请选择喜欢的水果!' }
  ],
  hobby: [
    { required: true, message: '请选择喜欢的运动!' }
  ],
  address: [
    { required: true, message: '请输入家庭住址!' }
  ]
}

function disabledDate(current) {
  // Can not select days before today and today
  return current && current < moment().endOf('day');
}

class FormDemo extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      fruiteOptions: [],
      hobbyOptions: [],
      formObject: {
        id: '',
        icon: null,
        name: '',
        password: '',
        sex: '',
        age: null,
        birthday: null,
        fruite: '',
        hobby: [],
        address: ''
      }
    }
    this.hobbyOptionsRef = React.createRef();
    this.onFinish = this.onFinish.bind(this)
    this.onFinishFailed = this.onFinishFailed.bind(this)
  }
  onFinish(values) {
    console.log('Success:', values);
    message.success('成功')
  }

  onFinishFailed(errorInfo) {
    console.log('Failed:', errorInfo);
    console.log('hobbyOptionsRef:', this.hobbyOptionsRef);
  }

  getFruiteOptions() {
    fetch('/mock/fruite.json').then(res => {
      return res.json()
    }).then(res => {
      this.setState({
        fruiteOptions: res || []
      })
    }).catch(error => {
      console.error(error)
    })
  }

  getHobbyOptions() {
    fetch('/mock/hobby.json').then(res => {
      return res.json()
    }).then(res => {
      this.setState({
        hobbyOptions: res || []
      })
    }).catch(error => {
      console.error(error)
    })
  }

  componentDidMount() {
    this.getFruiteOptions()
    this.getHobbyOptions()
  }

  render() {
    return (
      <div className="form-demo">
        <Form {...layout} name="basic" onFinish={this.onFinish} onFinishFailed={this.onFinishFailed}>
          <Form.Item label="姓名" name="name" rules={formRules.name}>
            <Input />
          </Form.Item>
          <Form.Item label="密码" name="password" rules={formRules.password}>
            <Input type="password" />
          </Form.Item>
          <Form.Item label="性别" name="sex" rules={formRules.sex}>
            <Radio.Group>
              <Radio value="男">男</Radio>
              <Radio value="女">女</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="年龄" name="age" rules={formRules.age}>
            <InputNumber min={1} />
          </Form.Item>
          <Form.Item label="出生日期" name="birthday" rules={formRules.birthday}>
            <DatePicker disabledDate={disabledDate}/>
          </Form.Item>
          <Form.Item label="喜欢的水果" name="fruite" rules={formRules.fruite}>
            <Select>
              {this.state.fruiteOptions.map(item => {
                return (
                  <Option key={item.id} value={item.value}>{item.name}</Option>
                )
              })}
            </Select>
          </Form.Item>
          <Form.Item label="爱好" name="hobby" rules={formRules.hobby}>
            <Select mode="multiple">
              {this.state.hobbyOptions.map(item => {
                return (
                  <Option ref={this.hobbyOptionsRef} key={item.id} value={item.value}>{item.name}</Option>
                )
              })}
            </Select>
          </Form.Item>
          <Form.Item label="家庭住址" name="address" rules={formRules.address}>
            <TextArea showCount />
          </Form.Item>
          <Form.Item wrapperCol={ {offset: 8} }>
            <Button type="primary" htmlType="submit">Submit</Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

export default FormDemo