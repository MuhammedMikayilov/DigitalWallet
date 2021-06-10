import mongoose from 'mongoose'
const { Schema } = mongoose

const topupSchema = new Schema({
  card_select: {
    type: Object
  },
  amount: {
    type: Object,
    required: true,
   
  }
})

export default mongoose.model('Topup', topupSchema)
