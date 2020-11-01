import './fragment-comp.css';
import React from 'react';

class FragmentComp extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      name: '111'
    }
  }
  // render() {
  //   return (
  //     <React.Fragment>
  //       <div className="fragment-comp">
  //         111111
  //       </div>
  //       <div className="fragment-comp">
  //         222222
  //       </div>
  //     </React.Fragment>
  //   )
  // }
  render() {
    return (
      <>
        <div className="fragment-comp">
          {this.state.name}
        </div>
        <div className="fragment-comp">
          222222
        </div>
      </>
    )
  }
}

export default FragmentComp;