import React, {useState} from 'react'
import {signInWithEmailAndPassword, onAuthStateChanged, signInWithPopup} from 'firebase/auth'
import {auth, googleProvider} from './firebaseConfig'

function SignIn() {
    const [loginEmail, setLoginEmail] = useState()
    const [LoginPassword, setLoginPassword] = useState()
    const [user, setUser] = useState()

    const logIn = () => {
        signInWithEmailAndPassword(auth, loginEmail, LoginPassword)
    }

    onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser)
    })

    const signInWithGoogle = ()=>{
      signInWithPopup(auth, googleProvider).then((result)=>{
        console.log(result);
      })
    }

  return (
    <div className="login">
      <div className="login__container">
      <h1 className="text-7xl mb-5 block">SIGN IN</h1>
        <input
          type="text"
          className="login__textBox"
          value={loginEmail}
          onChange={(e) => setLoginEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="login__textBox"
          value={LoginPassword}
          onChange={(e) => setLoginPassword(e.target.value)}
          placeholder="Password"
        />
        <button
          className="login__btn hov"
          onClick={()=> {logIn()}}
        >
          SignIn
        </button>
        <button className="login__btn hov login__google" onClick={()=> signInWithGoogle()}>
          Sign In with Google
        </button>
        <h1>User logged in {user?.email}</h1>
        <h1 className='bltxt hov'><a href='register'>Do not have an account?</a></h1>
        </div>
      </div>
  )
}

export default SignIn;

