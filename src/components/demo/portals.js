import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import '../../styles/portals.css'

const modal = document.getElementById('modal-root')
class Model extends Component {
  constructor(props) {
    super(props)
    this.el = document.createElement('div')
  }
  componentDidMount() {
    modal.appendChild(this.el)
  }
  render() {
    return ReactDOM.createPortal(this.props.children, this.el)
  }
}

export default class Portals extends Component {
  state = {
    showModel: false,
  }
  componentDidMount() {
    console.log(modal)
  }
  handleClick = () => {
    this.setState({
      showModel: !this.state.showModel,
    })
  }
  render() {
    const display = this.state.showModel ? (
      <Model>
        <div className="modal">
          <div>该层为model弹出层</div>
          <button style={{ display: 'block' }} onClick={this.handleClick}>
            点击隐藏
          </button>
        </div>
      </Model>
    ) : null
    return (
      <div>
        点击展示弹出层
        <button style={{ display: 'block' }} onClick={this.handleClick}>
          点击展示
        </button>
        {display}
      </div>
    )
  }
}
