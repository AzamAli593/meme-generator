import React from 'react'
import ReactDOM from 'react-dom'
import Middle from './components/Middle'
import Nav from './components/Nav'
import './style.css'

function App() {
  return (
    <div>
      <Nav />
      <Middle />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
