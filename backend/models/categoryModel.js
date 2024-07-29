import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
        trim: true
    },
    slug:{
        type:String,
        require: true,
        unique : true
    },
    parentId:{
        type:String,
    },

    
},{timestamps : true});

export default mongoose.model('Categories', categorySchema);