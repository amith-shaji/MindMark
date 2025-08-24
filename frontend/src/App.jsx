import React from 'react'
import { Routes, Route } from 'react-router-dom';
import  Homepage from './components/Homepage';
import  Editpage from './components/Editpage';
import  Createpage from './components/Createpage';
function App() {
  return (
    <div>
    <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/createnote" element={<Createpage/>}/>
        <Route path="/editnote/:id" element={<Editpage/>}/>
    </Routes>
    </div>
  )
}

export default App