const mongoose = require("mongoose")

const expenseSchema = new mongoose.Schema({
    description: { type: String, required: true },
    type: {
        type: String,
        enum: ['gasto', 'ingreso'],
        required: true,
      },
    amount: { type: Number, required: true },
    category: { type: String, required: true },
    done: { type: Boolean, default: false },
    userId:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
    date: { type: Date, default: Date.now },
}, { timestamps: true });

module.exports = mongoose.model('Expense', expenseSchema);