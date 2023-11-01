import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';

function App() {
  // creating a state for accessing the username from header component to transfer the username to home component
  const [accessUserName, setAccessUserName] = useState('')
 
  //parent accessing the value of username
  console.log(accessUserName)
  return (
    <>
      {/* CHILD COMPS */}
      {/* setAccessUserName function is passed as props to child component  */}
      <Header setAccessUserName={setAccessUserName} />
     
      {/* accessUserName variable is passed as props to child component  */}
      <Home accessUserName={accessUserName} />
    </>
  );
}

export default App;
