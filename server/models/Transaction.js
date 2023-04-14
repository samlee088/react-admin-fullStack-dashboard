import mongoose from 'mongoose';

const TransactionsSchema = new mongoose.Schema(
    {
       userId: String,
       cost: String,
       products: {
        type: [mongoose.Types.ObjectId],
        of: Number
       }
    },
    {
        timestamps: true
    }
 
);

const Transaction = mongoose.model('Transaction', TransactionsSchema);
export default Transaction;

