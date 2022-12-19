import './App.css';
// import  {useState} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Register from './components/Register';
// import {onAuthStateChanged} from 'firebase/auth'
// import { auth } from './components/firebaseConfig';
import SignIn from './components/SignIn';
import AddTodo from './components/AddTodo';
import Notes from './components/Notes';

function App() {
  // const [user, setUser] = useState("")

  // onAuthStateChanged(auth, (currentUser)=>{
  //   setUser(currentUser)
  // })

  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route exat path='/' element={<><AddTodo/><Notes/></>} />
          <Route exact path='/register' element={<Register/>} />
          <Route exact path='/signIn' element={<SignIn/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
