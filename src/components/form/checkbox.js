import React, { Component } from 'react'

export default class checkbox extends Component {
  state = {
    loginId: '',
    loginPwd: '',
    sex: 'male',
    chooseLoves: [],
    loves: [
      { value: 'football', text: '足球' },
      { value: 'basetball', text: '篮球' },
      { value: 'movie', text: '电影' },
      { value: 'music', text: '音乐' },
      { value: 'other', text: '其他' },
    ],
    city: 'beijing',
  }
  handleChange = (e) => {
    console.log(e, e.target.checked)
    let val = e.target.value
    val = e.target.checked
      ? [...this.state.chooseLoves, val]
      : this.state.chooseLoves.filter((i) => i !== val)
    this.setState({
      chooseLoves: val,
    })
  }
  render() {
    let loves = this.state.loves.map((i) => (
      <label key={i.value}>
        <input
          type="checkbox"
          checked={this.state.chooseLoves.includes(i.value)}
          onChange={this.handleChange}
          value={i.value}
        />
        {i.text}
      </label>
    ))
    return <>{loves}</>
  }
}
