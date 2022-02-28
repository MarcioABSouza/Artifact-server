import mongoose from 'mongoose';

const artifactSchema = mongoose.Schema({
    title: String, 
    message: String, 
    owner: String, 
    local: String, 
    selectedFile: String,
    price: {
        type: Number, 
        default: 0
    },
    isAGift: {
        type: Boolean, 
        default: false
    },
    createdAt:{
        type: Date, 
        default: new Date()
    } 
});

const Artifact = mongoose.model('Artifact', artifactSchema);

export default Artifact;