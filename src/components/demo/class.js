import React, { Component } from 'react'
import '../../styles/class.css'

export default class Class extends Component {
  // 属性默认值 或 Class.defaultProps
  static defaultProps = {
    a: 1,
    b: 2,
    c: 3,
  }
  state = {
    time: this.props.attr.time,
  }
  //   handleClick(e) {
  //     console.log(e, this)
  //   }
  handleClick = (e) => {
    console.log(e, this)
  }
  constructor(props) {
    super(props) // this.props = props;
    console.log(this.props, props, props === this.props)
    this.timer = setInterval(() => {
      this.setState({
        time: this.state.time - 1,
      })
      if (this.state.time === 0) {
        clearInterval(this.timer)
      }
    }, 1000)
  }
  render() {
    return (
      <div className="wrapper font">
        class component 计时：{this.state.time}
        <button
          style={{ display: 'block', width: '50px', height: '25px' }}
          //   onClick={this.handleClick.bind(this)}
          onClick={this.handleClick}
          draggable
        >
          点击
        </button>
      </div>
    )
  }
}
// Class.defaultProps = {
//   d: 4,
// }
