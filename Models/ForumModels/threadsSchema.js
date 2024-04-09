//threadSchema file
const mongoose = require('mongoose');

const threadsSchema= new mongoose.Schema({
    plantImg:{
        type:String,
        required:true
    },
    questionTile:{
        type:String,
        required:true
    },
   
    questionDesc:{
        type:String,
        required:true
    },
      userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'USER',
        required: true
      } ,
      date:{
        type : Date, default: Date.now
    },
      
    
})

const threads = mongoose.model("THREADS",threadsSchema);
module.exports=threads;