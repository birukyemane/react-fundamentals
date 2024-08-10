// Basic Forms
// http://localhost:3000/isolated/final/06.extra-3.js


import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [username, setUsername] = React.useState('');
 
  const handleSubmit = event => {
    event.preventDefault();
    onSubmitUsername(username);
  }

  const handleOnchange = event => {
    const value = event.target.value;
    setUsername(value.toLowerCase());
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='usernameInput'>Username:</label>
        <input id='usernameInput' type="text" onChange={handleOnchange} value={username}/>
      </div>
      <button type="submit" >Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
