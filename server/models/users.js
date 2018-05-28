import mongoose from 'mongoose'


const UserSchema = new mongoose.Schema({
  googleID: {
    type: String,
    index: true
  },
  accessToken: {
    type: String,
    required: true
  },
	trips: {
    type: Array,
    default: []
  },
  activeTrip: {
    type: String
  }
})


const User = mongoose.model('User', UserSchema)

export default User
