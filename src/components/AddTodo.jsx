import React,{ useState} from 'react'
import '../index.css'
import { addDoc, collection } from "firebase/firestore"; 
import { db } from './firebaseConfig';


export default function AddTodo() {
  
  const notesRef = collection(db, "tasks")
  const [newNote, setNewNote] = useState()

  const addNote = async () =>{
    if (newNote !== "") {
      await addDoc(notesRef, { taskName: newNote, description: "what the hell" })
      setNewNote("")
    }
  }
  

  return (
    <div>
        <input value={newNote} onChange={(e)=> {setNewNote(e.target.value)}} type="search" placeholder='Add a todo...' className='h-9 w-[80vw] border-b border-solid mt-[10px] border-black' name="" id="" />
        <button onClick={addNote} className='ml-2 absolute w-[50px] focusLess text-white mt-[20px] hover:bg-blue-400 bg-blue-500' style={{borderRadius: 30}}>Add</button>

    </div>
  )
}