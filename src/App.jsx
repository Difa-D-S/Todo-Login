import { useState } from 'react';
import './App.css';
import SignUp from './components/SignUp';
// import Home from './components/Home';
import Login from './components/Login';
import Todo from './components/Todo';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [toggleForm, setToggleForm] = useState(false);


  const IsLoggedIn = () => {
    setLoggedIn(!loggedIn);
  }

  const ToggleForm = () => {
    setToggleForm(!toggleForm);
  }

  return (
    <>
      {loggedIn ? (<Todo IsLoggedIn = {IsLoggedIn}/>) : (
        toggleForm ? (<Login ToggleForm = {ToggleForm} IsLoggedIn={IsLoggedIn} />) : (<SignUp ToggleForm = {ToggleForm}/>)
      )}
    </>
  )
}

export default App
