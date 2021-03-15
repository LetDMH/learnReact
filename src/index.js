import React from 'react'
import ReactDOM from 'react-dom'
import FunctionalCom from './components/demo/functional'
import ClassCom from './components/demo/class'
import CheckBox from './components/form/checkbox'
import RefDemo from './components/demo/ref'
import ContextOld from './components/demo/context-old'

const obj = { name: 'zyl', age: 30, time: 30 }
const funcObj = { name: 'dmh', age: 24, content: <div>content</div> }

ReactDOM.render(
  <h1>
    Hello, world!
    <FunctionalCom attr={funcObj} />
    <ClassCom attr={obj} />
    <CheckBox />
    <RefDemo />
    <ContextOld />
  </h1>,
  document.getElementById('root')
)
