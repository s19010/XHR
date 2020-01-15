import React from 'react'

const Test = props => {
  const comment = 'Hello'
  return <h1>{comment}</h1>
}

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render () {
    return <Test />
  }
}
export default App
