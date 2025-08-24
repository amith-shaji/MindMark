import React from 'react'
import  Navbar from './Navbar';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Homepage = () => { 
    const [notes,setNotes] = useState([]);
    const [isLoading,setIsLoading] = useState(true);

  useEffect(() => {
    const getNotes = async () => {
        try {
            const response = await axios.get("http://localhost:5001/api/notes");
            setNotes(response.data);
            setIsLoading(false);
            console.log(response.data);
        } catch (error) {
            console.error("Error fetching notes:", error);
        }
    };

    getNotes();
}, []);

const handleDelete= async (id)=>{
      try{
        await axios.delete(`http://localhost:5001/api/notes/${id}`);
        setNotes(prevNotes => prevNotes.filter(note => note._id !== id));
      }
      catch(error){
         console.log(error);
      }
}
  return(
    <div className="bg-black min-h-screen">
      <Navbar/>
      {isLoading ? (
        <p>Please wait... Loading Notes</p>
      ) : notes.length===0 ? (
         <p>No Notes Available</p>
      ) : (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg: grid-cols-3 gap-3 text-center p-4 border-sky-200 rounded">
          {notes.map((note) => (
            <div key={note._id} className="bg-gray-400 p-3 rounded-3 border-3 border-primary">
              <h3 className="text-lg font-bold">{note.title}</h3>
              <p>{note.content}</p>
              <div className="flex justify-between items-center">
               <Link to ={`/editnote/${note._id}`}>
                  <button className="bg-green-500 p-3 rounded-3">Edit</button>
               </Link>
            </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Homepage