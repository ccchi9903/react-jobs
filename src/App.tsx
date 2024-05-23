import React from 'react'

const App = () => {
  const name = 'John';
  const x = 10;
  const y = 20;
  const names = ['as', 'aa', 'aba', 'aaa']
  const loggedIn = true;
  const styles = {
    color: 'red',
    fontSize: '55px'
  }
  return (
    <>
    <div className='text-5xl'>asdf</div>
    <p style = {styles}>Hello {name}</p>
    <ul>
      {names.map((name, index) => (
        <li key = {index}>{name}</li>
      ))}
    </ul>
    { loggedIn ? <h1>Hello</h1> : <h1>Hello guest</h1>}
    { loggedIn && <h1>Logged in</h1>}
    </>
  )
}

export default App