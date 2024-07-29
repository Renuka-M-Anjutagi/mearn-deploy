import { Timestamp } from "mongodb";
import mongoose from "mongoose";

const SubCatSchema = new mongoose.Schema({
    subname: {
        type: String,
        required: true,
        trim: true
    },
    
    categoryID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'categories'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },

},{Timestamp : true});

export default mongoose.model('subcategories',SubCatSchema);