import React, { Component } from 'react'
import PropTypes from 'prop-types'

const ctx = React.createContext()

// 在函数组件中，需要使用Consumer来获取上下文数据
function ChildA(props) {
    return <div>
        <h1>ChildA</h1>
        <h2>
            <ctx.Consumer>
                {value => <>{value.a}，{value.b}</>}
            </ctx.Consumer>
        </h2>
        <ChildB />
    </div>
}

// 在类组件中，直接使用this.context获取上下文数据
class ChildB extends React.Component {
  static contextType = ctx;

  // 如果，上下文提供者（Context.Provider）中的value属性发生变化(Object.is比较)，
  // 会导致该上下文提供的所有后代元素全部重新渲染，无论该子元素是否有优化（无论shouldComponentUpdate函数返回什么结果）
  shouldComponentUpdate(nextProps, nextState) {
    console.log('运行了优化')
    return false
  }

  render() {
    console.log('childB render')
    return (
      <h1>
        {/* a:{this.props.a}，b:{this.props.b} */}
        a:{this.context.a}，b:{this.context.b}
      </h1>
    )
  }
}

export default class NewContext extends Component {
  state = {
    a: 0,
    b: 'abc',
    changeA: (newA) => {
      this.setState({
        a: newA,
      })
    },
  }

  render() {
    return (
      //   <div>
      //     <ChildB {...this.state} />
      //     <button
      //       onClick={() => {
      //         this.setState({
      //           a: this.state.a + 1,
      //         })
      //       }}
      //     >
      //       父组件的按钮，a加1
      //     </button>
      //   </div>

      <ctx.Provider value={this.state}>
        <div>
          <ChildA />

          <button
            onClick={() => {
              this.setState({
                a: this.state.a + 1,
              })
            }}
          >
            父组件的按钮，a加1
          </button>
        </div>
      </ctx.Provider>
    )
  }
}
