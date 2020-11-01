import React from 'react';

class CustomerList extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      date: new Date(),
      age: 0
    };
    this.changeAge = this.changeAge.bind(this)
  }
  changeAge() {
    // this.setState({
    //   age: this.state.age + 1
    // })
    this.setState((state, props) => {
      return {
        age: state.age + 1
      }
    }, () => {
      console.log(1111)
    })
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <h2>age: {this.state.age}</h2>
        <button onClick={this.changeAge}>add-in-customer</button>
      </div>
    )
  }
}

export default CustomerList;