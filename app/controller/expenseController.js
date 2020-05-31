// including all required 
const mongoose = require('mongoose');
const shortId = require('shortid');
const response = require('../libs/responseLib');
const logger = require('../libs/loggerLib');
const inputValidator = require('../libs/paramsValidationLib');
const tokenLib = require('../libs/tokenLib');
const check = require('../libs/checkLib');
const passwordLib = require('../libs/generatePasswordLib');
const time = require('../libs/timeLib');


// including all models
const authModel = mongoose.model('Auth');
const userModel = mongoose.model('User');
const expenseModel=mongoose.model('Expense');

//Function to create new list
let createExpense = (req,res) =>{

    let newList = new expenseModel({
        expenseId:shortId.generate(),
        expenseName:req.body.expenseName,
        userId:req.body.userId,
        cards:req.body.cards,
        createdOn:time.now()   , 
        collabrators:req.body.collabrators,
        expenseHistory:req.body.expenseHistory,
        currency:req.body.currency
    });

    newList.save((err,result)=>{
        if(err){
            logger.error(err.message, 'Expense controller',10)
            let apiResponse =  response.generate(true,'error in saving',400,null);
            res.send(apiResponse)

        }else{
            logger.info('list created','list controller',5)
            let apiResponse = response.generate(false,'new Expense Group created successfully',200,result);

            delete apiResponse["_id"];
          delete apiResponse["__v"];
            res.send(apiResponse);
        }

    });

} //  end of create list



//Function to get all lists of users 
let getAllListOfUser = (req,res) =>{

    expenseModel.find()
    .exec((err,result)=>{
        if(err){
            logger.error(err.message, 'Expense controller',10)
            let apiResponse = response.generate(true,'unable to find details',400,null);
            res.send(apiResponse)
        }else{
            logger.info('list details found','list controller',5)
            logger.info(result,'list controller',5);

            let userID=req.body.userId;

            let finalResult=[];

            for(let each of result )
            {
            let userID=req.body.userId;
                if(each.userId== userID || (each.collabrators!=null && each.collabrators.includes(userID)))
                {
                    finalResult.push(each);
                }
            }
            let apiResponse = response.generate(false,'all Expenses found',200,finalResult);
            res.send(apiResponse)
        }
    });
    
} //  end of get all list of user


//Function to delete List
let deleteList = (req,res) =>{
    expenseModel.deleteOne({expenseId:req.body.expenseId})
    .exec((err,result)=>{
        if(err){
            logger.error(err.message, 'list controller',10)
            let apiResponse = response.generate(true,'unable to delete',400,null);
            res.send(apiResponse)
        }else{
            logger.info('list deleted','list controller',5)
            let apiResponse = response.generate(false,'delete successfull',200,result);
            res.send(apiResponse)
        }
    })
} // end of ddelete list

//Funtion to update list using list id
let updateListUsingListId = (req,res) =>{
    let options = req.body
    expenseModel.update({expenseId:req.body.expenseId},options)
    .exec((err,result)=>{
        if(err){
            logger.error(err.message, 'list controller',10)
            let apiResponse = response.generate(true,'unable to update details',400,null);
            res.send(apiResponse)
        }else{
            logger.info('list updated','list controller',5)
            let apiResponse = response.generate(false,'details updated',200,result);
            res.send(apiResponse)

        }
    })
} // end of update list using listId

//Function to delete all list
let deleteAllListsOfUser = (req,res) =>{

    expenseModel.deleteMany({userId:req.body.userId})
    .exec((err,result)=>{

        if(err){
            logger.error(err.message, 'list controller',10)
            let apiResponse = response.generate(true,'unable to delete details',400,null);
        res.send(apiResponse)
        }else{
            logger.info('list deleted','user controller',5)
        let apiResponse = response.generate(false,'all lists deleted',200,result);
        res.send(apiResponse)
        }

    })

}
//end of delete all list

module.exports = {
    createExpense:createExpense,
    getAllListOfUser:getAllListOfUser,
    deleteList:deleteList,
    updateListUsingListId:updateListUsingListId,
    deleteAllListsOfUser:deleteAllListsOfUser
}