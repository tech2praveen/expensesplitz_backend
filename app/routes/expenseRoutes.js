const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const appConfig = require('../../config/appconfig');
const userController = require('../controller/userController');
const authMiddleware = require('../middlewares/auth');
const listController = require('../controller/expenseController')

let setRouter = (app) => {

    let baseUrl = `${appConfig.apiVersion}/expense`;

    app.post(`${baseUrl}/create`, authMiddleware.isAuthorized, listController.createExpense);

    /**
     * @apiGroup Expense
     * @apiVersion  1.0.0
     * @api {post} /api/v1/expense/create Create new Group
     * @apiParam {query} authToken to be provided as query parameter (required)
     * @apiParam {string} userId userId of the user (body params) (required)
     * @apiParam {String} expenseName Name of the group. (body params)
      * @apiParam {String} currency currency of the group. (body params)
      * @apiParam {Array} collabrators collabrators of the group. (body params)
      * @apiParam {Array} expenseHistory expenseHistory of the group. (body params)
     * 
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
{
  "error": false,
  "message": "new Expense Group created successfully",
  "status": 200,
  "data": {
    "expenseId": "SqiNm7Jap",
    "expenseName": "Test",
    "userId": "vcY7k1DEy",
    "expense": [],
    "createdOn": "2020-05-30T17:13:41Z",
    "collabrators": [
      "GPqTtzwbG",
      "E2AWPnuof",
      "vcY7k1DEy"
    ],
    "currency": "₹",
    "expenseHistory": [
      {
        "data": "Praveen K created the group.",
        "created": 1590858821250
      }
    ]
  }
}  */


    app.post(`${baseUrl}/getAll`, authMiddleware.isAuthorized, listController.getAllListOfUser);


    /**
     * @apiGroup Expense
     * @apiVersion  1.0.0
     * @api {post} /api/v1/expense/getAll Get all lists using user Id
     * @apiParam {query} authToken to be provided as query parameter (required)
     * @apiParam {string} userId userId of the user (body params) (required)
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
       {
  "error": false,
  "message": "all Expenses found",
  "status": 200,
  "data": [
    {
      "expenseId": "84IMyGxKW",
      "expenseName": "Test1",
      "userId": "vcY7k1DEy",
      "expense": [],
      "createdOn": "2020-05-30T16:31:35Z",
      "collabrators": [
        "E2AWPnuof",
        "vcY7k1DEy"
      ],
      "currency": "₹",
      "expenseHistory": [
        {
          "data": "Praveen K created the group.",
          "created": 1590856295194
        }
      ]
    },
    {
      "expenseId": "lMKpiyl4N",
      "expenseName": "Test 2",
      "userId": "GPqTtzwbG",
      "expense": [],
      "createdOn": "2020-05-30T16:31:47Z",
      "collabrators": [
        "vcY7k1DEy",
        "GPqTtzwbG"
      ],
      "currency": "₹",
      "expenseHistory": [
        {
          "data": "Nik j created the group.",
          "created": 1590856307348
        },
        {
          "data": "Praveen K added New",
          "created": 1590856400094
        },
        {
          "data": "Praveen K removed New",
          "created": 1590858113697
        }
      ]
    }
    
  ]
}
    */


    app.post(`${baseUrl}/delete`, authMiddleware.isAuthorized, listController.deleteList);

    /**
     * @apiGroup Expense
     * @apiVersion  1.0.0
     * @api {post} /api/v1/expense/delete Delete a list using list Id
     * @apiParam {query} authToken to be provided as query parameter (required)
     * @apiParam {string} listId listId of the list (body params) (required)
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
     {
  "error": false,
  "message": "delete successfull",
  "status": 200,
  "data": {
    "n": 1,
    "ok": 1
  }
}
    */


    app.post(`${baseUrl}/updateList/id`, authMiddleware.isAuthorized, listController.updateListUsingListId);
    /**
     * @apiGroup Expense
     * @apiVersion  1.0.0
     * @api {post} /api/v1/expense/updateList/id Update a list using list Id
     * @apiParam {query} authToken to be provided as query parameter (required)
     * @apiParam {string} list Complete list data (body params) (required)
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
     {
  "error": false,
  "message": "details updated",
  "status": 200,
  "data": {
    "n": 1,
    "nModified": 1,
    "ok": 1
  }
}
    */

}


module.exports = {
    setRouter: setRouter
}