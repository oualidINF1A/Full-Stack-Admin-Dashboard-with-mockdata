import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
        name: {
            type: String,
            required: true,
            minlength: 2,
            maxlength: 100
        },
        email:{
            type: String,
            required: true,
            maxlength: 50,
            unique: true
        },
        password:{
            type: String,
            required: true,
            minlength: 5,
        },
        city:String,
        state:String,
        country:String,
        occupation:String,
        phoneNumber:String,
        transactions: Array,
        role:{
            type:String,
            enum:["user","admin", "superadmin"],
            default:"admin"
        }
    },
    {timestamps:true}
);

const User = mongoose.model("User", userSchema);

export default User; 