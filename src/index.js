import React from 'react'
import ReactDOM from 'react-dom'
import FunctionalCom from './components/demo/functional'
import ClassCom from './components/demo/class'
import CheckBox from './components/form/checkbox'
import RefDemo from './components/demo/ref'
import ContextOld from './components/demo/context-old'
import ContextNew from './components/demo/context-new'
import RenderProps from './components/demo/renderProps'

const obj = { name: 'zyl', age: 30, time: 30 }
const funcObj = { name: 'dmh', age: 24, content: <div>content</div> }
const renderPoint = (mouse) => (
  <>
    横坐标：{mouse.x}，纵坐标：{mouse.y}
  </>
)
const renderDiv = (mouse) => (
  <>
    <div
      style={{
        width: 100,
        height: 100,
        background: '#008c8c',
        position: 'absolute',
        left: mouse.x - 50,
        top: mouse.y - 50,
      }}
    ></div>
  </>
)

ReactDOM.render(
  <h1>
    <div>
      Hello, world!
      <FunctionalCom attr={funcObj} />
      <ClassCom attr={obj} />
      <CheckBox />
      <RefDemo />
      <ContextOld />
      <ContextNew />
    </div>
    <div>
      <RenderProps render={renderPoint} />
      <RenderProps render={renderDiv} />
    </div>
  </h1>,
  document.getElementById('root')
)
