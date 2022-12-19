import React, { useState } from 'react'
import { signOut, onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebaseConfig'

function Header() {

    const logOut = async ()=> {
        signOut(auth)
    }

    const [user, setUser] = useState("")

    onAuthStateChanged(auth, (currentUser)=>{
      setUser(currentUser)
    })

  return (
    <div>
      <nav className='bg-white flex justify-center h-9' >
        <ul>
            <li><a href='/'>( Home</a></li>
            <li><a href='/about'>About</a></li>
            <li><a href='/Register'>Register</a></li>
        </ul>

        {user?.email? <> <div className='absolute right-20 mx-0 '><img className=' h-8 rounded-full mx-0 my-0' src={user?.photoURL} alt='profile' /></div>
        <button onClick={()=> logOut()} className='absolute mx-0 top-1 right-2'>signOut</button>)</> : <a className='absolute right-10' href='/SignIn'>Sign In</a>}
      </nav>
    </div>
  )
}

export default Header
