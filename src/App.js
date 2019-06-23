import React from 'react'
import Login from './login'
import './App.css'

function App() {
  return (
    <div className="App">
      <Login onSubmit={data => alert(JSON.stringify(data))} />
    </div>
  )
}

export default App
