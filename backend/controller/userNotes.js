const Notes= require("../Model/userNotes")
const getNotes=async (req,res)=>{
    try{
          const note=await Notes.find().sort({createdAt:-1});
          res.status(200).send(note);
    }
    catch(error){
        console.log(error);
    }
}
const postNotes= async (req,res)=>{
    const {title, content}=req.body;
    const newNote=new Notes({title, content});
    const savedNote=await newNote.save();
    res.status(201).send(savedNote);
}
const updateNotes= async (req,res)=>{
    try{
        const { id } = req.params;
        const {title, content} = req.body;
        await Notes.findByIdAndUpdate(id,{title, content});
        res.send("Note updated");
    }
    catch(error){
          console.error(error);
          res.status(500).send("Error updating note");
    }

}
const deleteNotes = async (req, res) => {
  try {
    const { id } = req.params;
    await Notes.findByIdAndDelete(id);
    res.send("Note deleted");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error deleting note");
  }
};
const getSingleNote = async(req,res)=>{
  try {
    const { id } = req.params;
    const note=await Notes.findById(id);
    res.send(note);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error deleting note");
  }
}

module.exports={
    getNotes,
    postNotes,
    updateNotes,
    deleteNotes,
    getSingleNote,
}