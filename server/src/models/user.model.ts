import { UserModelType } from './../types.def';
import {model, Schema} from 'mongoose'
import bcrypt, { genSalt } from 'bcryptjs'

export interface IUserModel extends UserModelType, Document {
  _id:string
}

const userSchema = new Schema<IUserModel>({
    email: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
      firstname: {
        type: String,
        required: true,
      },
      lastname: {
        type: String,
        required: true,
      },
      mobile: {
        type: String,
        required: true,
      },
      role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
      },
      blocked: {
        type: Boolean,
        default: false
      }
})

userSchema.pre('save', async function(next){
  if(!this.isModified('password')) {
    next()
  }
  const salt = bcrypt.genSaltSync(10)
  this.password = await bcrypt.hash(this.password, salt)
})

export const UserModel = model<IUserModel>('User', userSchema)