import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Editpage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();
  const {id} = useParams();
 useEffect(() => {
  const fetchAllNotes = async () => {
    try {
      const res = await axios.get(`http://localhost:5001/api/notes/${id}`);
      const note = res.data;
      console.log(note);
      if (note) {
        setTitle(note.title);
        setContent(note.content);
      } else {
        alert("Note not found");
      }
    } catch (err) {
      console.error("Error fetching notes", err);
    }
  };

  fetchAllNotes();
}, []);


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:5001/api/notes/${id}`, { title, content });
      navigate('/'); 
    } catch (error) {
      console.error("Failed to create note:", error);
      alert("Error creating note. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-800 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-full max-w-md"
      >
        <button onClick={()=>navigate('/')} className="text-black-800 p-3"> Back</button>
        <h2 className="text-2xl mb-4 font-bold">Update Note</h2>

        <input
          type="text"
          placeholder="Title"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <textarea
          placeholder="Content"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          rows="6"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Update Note
        </button>
      </form>
    </div>
  );
};

export default Editpage;
