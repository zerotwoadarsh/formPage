import mongoose  from 'mongoose';
const Schema = mongoose.Schema;

const formpage = new Schema({
    name: {
        type: String,
        required: true
    },
    rollNumber: {
        type: Number,
        required: true,
        unique: true
    },
    preference1: {
        type: String,
        required: true
    },
    preference2: {
        type: String,
        required: true
    },
    preference3: {
        type: String,
        required: true
    },
})

const FormPage = mongoose.model('FormPage', formpage);

export default FormPage
