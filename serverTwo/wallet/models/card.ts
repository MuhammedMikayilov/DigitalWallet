import mongoose from 'mongoose';
const { Schema } = mongoose;


const cardSchema = new Schema({
	wal_num: {
		type: String,
		required: true,
	},
	exp_date: {
		type: String,
		required: true,
	},
	cvv: {
		type: Number,
		required: false,
	},
	bank_name: {
		type: String,
		required: true,
	},
	card_type: {
		type: String,
		required: true,
	},
	currency_type: {
		type: Object,
	},
});

export default mongoose.model('Card', cardSchema);
