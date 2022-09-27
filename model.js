import mongoose from 'mongoose'

const kittySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: "You must enter name!!!"
    },
    weight: {
      type: String,
      required: "You mus enter weight madafaka!!!",
    },
  }
)

const Kitty = mongoose.model('Kitty', kittySchema)

export default Kitty