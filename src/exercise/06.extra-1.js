// Basic Forms
// http://localhost:3000/isolated/final/06.extra-1.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const usernameInputRef = React.useRef();
 
  const handleSubmit = event => {
    event.preventDefault();
    const username = usernameInputRef.current.value;
    onSubmitUsername(username);
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='usernameInput'>Username:</label>
        <input id='usernameInput' type="text" ref={usernameInputRef} />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
