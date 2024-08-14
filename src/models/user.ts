import { match } from "assert";
import { model, Schema, models } from "mongoose";

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        match: [
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            'Please fill a valid email address'
        ]
    },
    password: {
        type: String,
        required: [true, "password is require"],
        select: false
    },
    fullname: {
        type: String,
        required: [true, "fullname is require"],
        minLength: [3, "el nombre debe contener minimo  3 caracteres"],
        maxLength: [50, "el nombre debe contener maximo  50 caracteres"]
    },
});

const User = models.User || model('User', userSchema)
export default User;
