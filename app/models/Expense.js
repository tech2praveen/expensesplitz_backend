const mongoose = require('mongoose');
const time=require('../libs/timeLib')
Schema = mongoose.Schema

let ExpenseSchema = new Schema({

    expenseId:{
        type:String,
        default:''
    },
    expenseName:{
        type:String,
        default:''
    },
    userId:{
        type:String,
        default:''
    },
    expense:{
        type:Array,
    
    },
    expenseHistory:{
        type:Object,
        default:[]
    
    }
    ,
    createdOn:{
        type:String,
        default:time.now()
    },
    collabrators:{
        type:Array,
       
    },
    currency:{
        type:String,
        default:"₹"
    }

});

// specify the transform schema option
if (!ExpenseSchema.options.toObject) ExpenseSchema.options.toObject = {};
ExpenseSchema.options.toObject.transform = function (doc, ret, options) {
  // remove the _id of every document before returning the result
  delete ret._id;
  delete ret.__v;
}


mongoose.model('Expense',ExpenseSchema);