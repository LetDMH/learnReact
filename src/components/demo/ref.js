import React, { Component } from 'react'

class A extends Component {
  print() {
    console.log('class component A')
  }
  render() {
    return <div>Class Component A</div>
  }
}

export default class RefDemo extends Component {
  state = {
    show: true,
  }
  handleClick = (e) => {
    console.log(this.refs, this.txt, this.cmpA)
    // 字符串赋值
    // this.refs.cmpA.print()
    // this.refs.cmpInp.focus()

    // 对象赋值
    // this.cmpA.current.print()
    // this.txt.current.focus()

    // 函数赋值
    this.cmpA.print()
    // this.txt.focus()
    this.setState({
      show: !this.state.show
    })
  }
  // 如何给元素dom配置ref注入的参数是dom对象,自定义组件时是实例对象
  getRef = (el) => {
    console.log(el)
    this.txt = el
  }
  getCmpRef = (el) => {
    console.log(el)
    this.cmpA = el
  }
  constructor(props) {
    super(props)
    console.log(this.props)
    // this.txt = React.createRef()
    // this.cmpA = React.createRef()
  }
  componentDidMount() {
    console.log(this.txt, this.cmpA)
  }
  render() {
    return (
      // ref使用字符串赋值已经过时，但还可以用
      //   <>
      //     <p>
      //       <input type="text" ref="cmpInp" />
      //     </p>
      //     <A ref="cmpA" />
      //     <button onClick={this.handleClick}>点击触发</button>
      //   </>

      // ref使用对象赋值，需要在构造函数中使用React.createRef()方法
      //   <>
      //     <p>
      //       <input type="text" ref={this.txt} />
      //     </p>
      //     <A ref={this.cmpA} />
      //     <button onClick={this.handleClick}>点击触发</button>
      //   </>

      // ref使用函数赋值
      // componentDidMount的时候会自动调用该函数，并且可以在其中使用组件的ref
      // 如果ref的值发生了变动（旧的函数被新的函数替代），分别调用旧的函数以及新的函数，时间点出现在componentDidUpdate之前
      // 旧的函数被调用时，传递null
      // 新的函数被调用时，传递对象
      // 如果ref所在的组件被卸载，会调用函数
      <>
        {this.state.show && (
          <p>
            <input type="text" ref={this.getRef} />
          </p>
        )}
        <A ref={this.getCmpRef} />
        <button onClick={this.handleClick}>点击触发</button>
      </>
    )
  }
}
