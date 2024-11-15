import mongoose from "mongoose";

const UserSchema = mongoose.Schema ({
    fisrtName:{
        type: String,
        require: [true, "Nombre requerido"]
    },
    lastName:{
        type: String,
        require: [true, "Apellido requerido"]
    },
    email:{
        type: String,
        require: [true, "username requerido"],
        unique: [true, "email no debe ser repetido"]
    },
    password:{
        type: String,
        require: [true, "password requerido"],
    },
    isAdmin: {
        type: Boolean,
        required: [true, "isAdmin es requerido"],
        default: false
    }
},
{
    Timestamp: true
}

)

const User = mongoose.model("User", UserSchema)
export default User