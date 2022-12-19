import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup } from "firebase/auth"
import {auth, googleProvider} from './firebaseConfig'

function Register() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [RegisterPassword, setRegisterPassword] = useState("");

  const [user, setUser] = useState("")

  onAuthStateChanged(auth, (currentUser)=>{
    setUser(currentUser)
  })

  const register = ()=>{
    try {
      const user = createUserWithEmailAndPassword(auth, registerEmail, RegisterPassword)
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  }

  const signInWithGoogle =()=>{
    signInWithPopup(auth, googleProvider).then((result)=>{
      console.log(result);
    }).catch((error)=>{
      console.log(error);
    })
  }

  return (
    <>
    <div className="login">
      <div className="login__container">
      <h1 className="text-7xl mb-5 block">REGISTER</h1>
        <input
          type="text"
          className="login__textBox"
          value={registerEmail}
          onChange={(e) => setRegisterEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="login__textBox"
          value={RegisterPassword}
          onChange={(e) => setRegisterPassword(e.target.value)}
          placeholder="Password"
        />
        <button
          className="login__btn hov"
          onClick={()=> {register()}}
        >
          Register
        </button>
        <button className="login__btn hov login__google" onClick={()=> signInWithGoogle()} >
          Register with Google
        </button>
        <h1>User logged in {user?.email}</h1>
        <p className="bltxt hov"><a href="signIn">Already have an account?</a></p>
        </div>
      </div>
      </>
  );
}
export default Register;