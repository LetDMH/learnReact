import React from 'react'

export default function Functional(props) {
  console.log(props)
  return (
    <div>
      functional component 姓名：{props.attr.name}
      年龄：{props.attr.age}
      {props.attr.content}
    </div>
  )
}

// 默认属性
Functional.defaultProps = {
  a: 1,
  b: 2,
  c: 3,
}
