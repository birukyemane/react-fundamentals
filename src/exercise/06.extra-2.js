// Basic Forms
// http://localhost:3000/isolated/final/06.extra-2.js


import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const usernameInputRef = React.useRef();
  const [inputError, setInputError] = React.useState(null);
 
  const handleSubmit = event => {
    event.preventDefault();
    const username = usernameInputRef.current.value;
    onSubmitUsername(username);
  }

  const handleOnchange = event => {
    const value = event.target.value;
    const isValid = value === value.toLowerCase();
    setInputError(isValid ? null : 'Username must be lower case');
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='usernameInput'>Username:</label>
        <input id='usernameInput' type="text" ref={usernameInputRef} onChange={handleOnchange} />
        {inputError && <p role="alert" style={{color: 'red'}}>{inputError}</p>}
      </div>
      <button type="submit" disabled={Boolean(inputError)} >Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
