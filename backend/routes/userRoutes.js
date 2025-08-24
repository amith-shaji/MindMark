const express=require("express")
const router=express.Router();
const {getNotes, postNotes, updateNotes, deleteNotes, getSingleNote} = require("../controller/userNotes");
router.get("/", getNotes)
router.get("/:id", getSingleNote)
router.post("/", postNotes)
router.put("/:id",updateNotes)
router.delete("/:id",deleteNotes)

module.exports=router;