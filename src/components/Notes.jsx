import React,{ useState, useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from './firebaseConfig'
import Note from './Note'


export default function Notes() {
    const [notes, setNotes] = useState([])
    const notesRef = collection(db, "tasks")

        const getNotes = async () =>{
          const data = await getDocs(notesRef)
          setNotes(data.docs.map((doc)=>({...doc.data(), id: doc.id})))
        }
    
        getNotes()

  return (
    <div>
    {notes.map((note)=>{
        return(
            <>
            <Note task="nothing" description="everything" />
            </>
        )
    })}
    </div>
  )
}
