const mongoose=require("mongoose")
const NoteSchema= new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
        },
        content:{
            type:String,
            required:true,
        }
    },
    {
        timestamps:true,
    }
)
const Notes = mongoose.model('Notes', NoteSchema);
module.exports=Notes;