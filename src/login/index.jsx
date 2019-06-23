import React from 'react'

const Login = ({ onSubmit }) => {
  return (
    <>
      <h1>Login</h1>
      <form
        onSubmit={event => {
          event.preventDefault()
          const { username, password } = event.target.elements
          onSubmit({
            username: username.value,
            password: password.value
          })
        }}
      >
        <label htmlFor="username"> Username</label>
        <input type="text" data-testid="username" name="username" />
        <label htmlFor="password"> password</label>
        <input type="password" data-testid="password" name="password" />
        <button type="submit">send</button>
      </form>
    </>
  )
}

export default Login
