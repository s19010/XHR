import React from 'react'

/*const TestView = props => {
  <div>{props.value}</div>
}
*/

class TestForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = { value: '' }
    this.doSubmit = this.doSubmit.bind(this)
    this.doChange = this.doChange.bind(this)
  }

  doChange (e) {
    this.setState({ value: e.target.value })
  }

  doSubmit (e) {
    e.preventDefault()
    alert('値を送信: ' + this.state.value)
  }

  render () {
    return (
      <form action='' onSubmit={this.doSubmit}>
        <input type='text' onChange={this.doChange} />
        <input type='submit' value='送信' />
      </form>
    )
  }
}

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = { value: '' }
  }

  render () {
    return (
      <div>
        {/*<TestView value={this.state.value} />*/}
        <TestForm />
      </div>
    )
  }
}

export default App
