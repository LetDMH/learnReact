import React, { useState } from 'react'

export default function StateHook() {
  const [num, setNum] = useState(0)
  const [show, setShow] = useState(true)
  return (
    <div>
      <div style={{ display: show ? 'block' : 'none' }}>
        <button onClick={() => setNum(num - 1)}>-</button>
        <span>{num}</span>
        <button onClick={() => setNum(num + 1)}>+</button>
      </div>
      <button onClick={() => setShow(!show)}>显示/隐藏</button>
    </div>
  )
}
