import React from 'react'

export default function Nav() {
  return (
    <div className="navbar">
      <img src={require('../images/logo.png')} className="navbar-img" />
      <h1 style={{ margin: '0px', marginRight: 'auto', fontSize: '45px' }}>Meme Generator</h1>
      <h2 style={{ margin: '0px', fontSize: '35px' }}>React Course - Project 3</h2>
    </div>
  )
}
