define({ "api": [
  {
    "group": "Expense",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/expense/create",
    "title": "Create new Group",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "query",
            "optional": false,
            "field": "authToken",
            "description": "<p>to be provided as query parameter (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "expenseName",
            "description": "<p>Name of the group. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "currency",
            "description": "<p>currency of the group. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "collabrators",
            "description": "<p>collabrators of the group. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "expenseHistory",
            "description": "<p>expenseHistory of the group. (body params)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"error\": false,\n  \"message\": \"new Expense Group created successfully\",\n  \"status\": 200,\n  \"data\": {\n    \"expenseId\": \"SqiNm7Jap\",\n    \"expenseName\": \"Test\",\n    \"userId\": \"vcY7k1DEy\",\n    \"expense\": [],\n    \"createdOn\": \"2020-05-30T17:13:41Z\",\n    \"collabrators\": [\n      \"GPqTtzwbG\",\n      \"E2AWPnuof\",\n      \"vcY7k1DEy\"\n    ],\n    \"currency\": \"₹\",\n    \"expenseHistory\": [\n      {\n        \"data\": \"Praveen K created the group.\",\n        \"created\": 1590858821250\n      }\n    ]\n  }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/expenseRoutes.js",
    "groupTitle": "Expense",
    "name": "PostApiV1ExpenseCreate"
  },
  {
    "group": "Expense",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/expense/delete",
    "title": "Delete a list using list Id",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "query",
            "optional": false,
            "field": "authToken",
            "description": "<p>to be provided as query parameter (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "listId",
            "description": "<p>listId of the list (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "     {\n  \"error\": false,\n  \"message\": \"delete successfull\",\n  \"status\": 200,\n  \"data\": {\n    \"n\": 1,\n    \"ok\": 1\n  }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/expenseRoutes.js",
    "groupTitle": "Expense",
    "name": "PostApiV1ExpenseDelete"
  },
  {
    "group": "Expense",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/expense/getAll",
    "title": "Get all lists using user Id",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "query",
            "optional": false,
            "field": "authToken",
            "description": "<p>to be provided as query parameter (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the user (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "       {\n  \"error\": false,\n  \"message\": \"all Expenses found\",\n  \"status\": 200,\n  \"data\": [\n    {\n      \"expenseId\": \"84IMyGxKW\",\n      \"expenseName\": \"Test1\",\n      \"userId\": \"vcY7k1DEy\",\n      \"expense\": [],\n      \"createdOn\": \"2020-05-30T16:31:35Z\",\n      \"collabrators\": [\n        \"E2AWPnuof\",\n        \"vcY7k1DEy\"\n      ],\n      \"currency\": \"₹\",\n      \"expenseHistory\": [\n        {\n          \"data\": \"Praveen K created the group.\",\n          \"created\": 1590856295194\n        }\n      ]\n    },\n    {\n      \"expenseId\": \"lMKpiyl4N\",\n      \"expenseName\": \"Test 2\",\n      \"userId\": \"GPqTtzwbG\",\n      \"expense\": [],\n      \"createdOn\": \"2020-05-30T16:31:47Z\",\n      \"collabrators\": [\n        \"vcY7k1DEy\",\n        \"GPqTtzwbG\"\n      ],\n      \"currency\": \"₹\",\n      \"expenseHistory\": [\n        {\n          \"data\": \"Nik j created the group.\",\n          \"created\": 1590856307348\n        },\n        {\n          \"data\": \"Praveen K added New\",\n          \"created\": 1590856400094\n        },\n        {\n          \"data\": \"Praveen K removed New\",\n          \"created\": 1590858113697\n        }\n      ]\n    }\n    \n  ]\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/expenseRoutes.js",
    "groupTitle": "Expense",
    "name": "PostApiV1ExpenseGetall"
  },
  {
    "group": "Expense",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/expense/updateList/id",
    "title": "Update a list using list Id",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "query",
            "optional": false,
            "field": "authToken",
            "description": "<p>to be provided as query parameter (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "list",
            "description": "<p>Complete list data (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "     {\n  \"error\": false,\n  \"message\": \"details updated\",\n  \"status\": 200,\n  \"data\": {\n    \"n\": 1,\n    \"nModified\": 1,\n    \"ok\": 1\n  }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/expenseRoutes.js",
    "groupTitle": "Expense",
    "name": "PostApiV1ExpenseUpdatelistId"
  },
  {
    "group": "Users",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/users/getAll",
    "title": "Get all Users Details with friend request Status",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "query",
            "optional": false,
            "field": "authToken",
            "description": "<p>to be provided as query parameter (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"error\": false,\n  \"message\": \"all user details found\",\n  \"status\": 200,\n  \"data\": [\n    {\n      \"userId\": \"SAow6NpJo\",\n      \"firstName\": \"Praveen\",\n      \"lastName\": \"k\",\n      \"email\": \"abc@gmail.com\",\n      \"status\": \"new\"\n    },\n    {\n      \"userId\": \"-yEc5uBrD\",\n      \"firstName\": \"Dipak\",\n      \"lastName\": \"def\",\n      \"email\": \"def@gmail.com\",\n      \"status\": \"new\"\n    },\n    {\n      \"userId\": \"nvQquVGDE\",\n      \"firstName\": \"Praveen\",\n      \"lastName\": \"Kumar\",\n      \"email\": \"tech2praveen@gmail.com\",\n      \"status\": \"done\"\n    },\n    {\n      \"userId\": \"pfEd5RDsK\",\n      \"firstName\": \"Shubham\",\n      \"lastName\": \"Kalra\",\n      \"email\": \"shubh@abc.com\",\n      \"status\": \"self\"\n    },\n    {\n      \"userId\": \"XRL3T8kBi\",\n      \"firstName\": \"Mayank\",\n      \"lastName\": \"G\",\n      \"email\": \"abcc@abc.com\",\n      \"status\": \"new\"\n    }\n  ]\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/userRoutes.js",
    "groupTitle": "Users",
    "name": "GetApiV1UsersGetall"
  },
  {
    "group": "Users",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/users/getinfo/using/token/:token",
    "title": "Get user details using password reset token",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>reset token. (URL params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"user details found\",\n    \"status\": 200,\n    \"data\": {\n       \"userId\": \"nvQquVGDE\",\n    \"firstName\": \"Demo\",\n    \"lastName\": \"User\",\n    \"email\": \"Demo.User@gmail.com\",\n    \"mobileNumber\": 9773676766,\n    \"countryCode\": 91,\n    \"createdOn\": \"2020-05-06T04:25:19.000Z\",\n    \"friendReq\": [],\n    \"friendList\": [],\n    \"PasswordResetToken\": \"NFYqYfVkk\",\n    \"PasswordResetExpiration\": \"2020-05-07T05:04:33.865Z\"\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/userRoutes.js",
    "groupTitle": "Users",
    "name": "GetApiV1UsersGetinfoUsingTokenToken"
  },
  {
    "group": "Users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/acceptReq",
    "title": "Accept Request(move user from friend request list to friend list)",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "query",
            "optional": false,
            "field": "authToken",
            "description": "<p>to be provided as query parameter (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "frmUserId",
            "description": "<p>user Id of the user to be moved. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>user Id of the user accepting the friend request. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    {\n  \"error\": false,\n  \"message\": \"User added successfully\",\n  \"status\": 200,\n  \"data\": {\n    \"userId\": \"nvQquVGDE\",\n    \"firstName\": \"Praveen\",\n    \"lastName\": \"Kumar\",\n    \"email\": \"tech2praveen@gmail.com\",\n    \"mobileNumber\": 9773676766,\n    \"countryCode\": 91,\n    \"createdOn\": \"2020-05-06T04:25:19.000Z\",\n    \"friendReq\": [],\n    \"friendList\": [\n      {\n        \"userId\": \"nvQquVGDE\",\n        \"fromUserId\": \"pfEd5RDsK\",\n        \"fromName\": \"Shubham Kalra\",\n        \"fromEmail\": \"shubh@abc.com\"\n      }\n    ],\n    \"PasswordResetToken\": \"NFYqYfVkk\",\n    \"PasswordResetExpiration\": \"2020-05-07T05:04:33.865Z\"\n  }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/userRoutes.js",
    "groupTitle": "Users",
    "name": "PostApiV1UsersAcceptreq"
  },
  {
    "group": "Users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/add/frndRequest",
    "title": "Send Friend request using User Id",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "query",
            "optional": false,
            "field": "authToken",
            "description": "<p>to be provided as query parameter (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "frmUserId",
            "description": "<p>userId of the receipent of the friend request (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the sender of the friend request (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"error\": false,\n  \"message\": \"Request sent successfully\",\n  \"status\": 200,\n  \"data\": {\n    \"userId\": \"pfEd5RDsK\",\n    \"firstName\": \"Shubham\",\n    \"lastName\": \"Kalra\",\n    \"email\": \"shubh@abc.com\",\n    \"mobileNumber\": 9876565656,\n    \"countryCode\": 91,\n    \"createdOn\": \"2020-05-07T05:54:00.000Z\",\n    \"friendReq\": [\n      {\n        \"userId\": \"pfEd5RDsK\",\n        \"fromUserId\": \"nvQquVGDE\",\n        \"fromName\": \"Praveen Kumar\",\n        \"fromEmail\": \"tech2praveen@gmail.com\"\n      }\n    ],\n    \"friendList\": [],\n    \"PasswordResetToken\": \"\",\n    \"PasswordResetExpiration\": \"\"\n  }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/userRoutes.js",
    "groupTitle": "Users",
    "name": "PostApiV1UsersAddFrndrequest"
  },
  {
    "group": "Users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/getUser",
    "title": "Get user details using ID",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user",
            "description": "<p>Id. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"user found\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"userId\": \"3dgkejht3\",\n            \"firstName\": \"Praveen\",\n            \"lastName\": \"k\",\n            \"email\": \"Pk@gmail.com\",\n            \"countryCode\": 91,\n            \"mobileNumber\": 98765327655,\n            \"createdOn\": \"2020-05-01T08:01:01.000Z\"\n        }\n    }",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/userRoutes.js",
    "groupTitle": "Users",
    "name": "PostApiV1UsersGetuser"
  },
  {
    "group": "Users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/login",
    "title": "User login",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"userId\": \"nvQquVGDE\",\n    \"firstName\": \"Demo\",\n    \"lastName\": \"User\",\n    \"email\": \"Demo.User@gmail.com\",\n    \"mobileNumber\": 9773676766,\n    \"countryCode\": 91,\n    \"createdOn\": \"2020-05-06T04:25:19.000Z\",\n    \"friendReq\": [],\n    \"friendList\": [],\n    \"PasswordResetToken\": \"NFYqYfVkk\",\n    \"PasswordResetExpiration\": \"2020-05-07T05:04:33.865Z\"\n  }",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/userRoutes.js",
    "groupTitle": "Users",
    "name": "PostApiV1UsersLogin"
  },
  {
    "group": "Users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/password/update",
    "title": "Update user password",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "     {\n    \"error\": false,\n    \"message\": \"Password updated\",\n    \"status\": 200,\n    \"data\": {\n        \"ok\": 1,\n        \"nModified\": 0,\n        \"n\": 1\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/userRoutes.js",
    "groupTitle": "Users",
    "name": "PostApiV1UsersPasswordUpdate"
  },
  {
    "group": "Users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/reject",
    "title": "Remove User from friend request list",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "query",
            "optional": false,
            "field": "authToken",
            "description": "<p>to be provided as query parameter (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "frmUserId",
            "description": "<p>user Id of the user to be moved. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "userId",
            "description": "<p>user Id of the user accepting the friend request. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    {\n  \"error\": false,\n  \"message\": \"Request deleted successfully\",\n  \"status\": 200,\n  \"data\": {\n    \"userId\": \"nvQquVGDE\",\n    \"firstName\": \"Praveen\",\n    \"lastName\": \"Kumar\",\n    \"email\": \"tech2praveen@gmail.com\",\n    \"mobileNumber\": 9773676766,\n    \"countryCode\": 91,\n    \"createdOn\": \"2020-05-06T04:25:19.000Z\",\n    \"friendReq\": [],\n    \"friendList\": [\n      {\n        \"userId\": \"nvQquVGDE\",\n        \"fromUserId\": \"pfEd5RDsK\",\n        \"fromName\": \"Shubham Kalra\",\n        \"fromEmail\": \"shubh@abc.com\"\n      }\n    ],\n    \"PasswordResetToken\": \"NFYqYfVkk\",\n    \"PasswordResetExpiration\": \"2020-05-07T05:04:33.865Z\"\n  }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/userRoutes.js",
    "groupTitle": "Users",
    "name": "PostApiV1UsersReject"
  },
  {
    "group": "Users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/signup",
    "title": "New user signup",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "firstName",
            "description": "<p>first Name of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "LastName",
            "description": "<p>last Name of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "mobileNumber",
            "description": "<p>mobileNumber  of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "countryCode",
            "description": "<p>countryCode of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "         {\n  \"error\": false,\n  \"message\": \"User Account created successfully\",\n  \"status\": 200,\n  \"data\": {\n    \"userId\": \"XRL3T8kBi\",\n    \"firstName\": \"Raj\",\n    \"lastName\": \"G\",\n    \"email\": \"abc@abc.com\",\n    \"mobileNumber\": 9876543212,\n    \"countryCode\": 91,\n    \"createdOn\": \"2020-05-07T10:36:38.000Z\",\n    \"friendReq\": [],\n    \"friendList\": [],\n    \"PasswordResetToken\": \"\",\n    \"PasswordResetExpiration\": \"\"\n  }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/userRoutes.js",
    "groupTitle": "Users",
    "name": "PostApiV1UsersSignup"
  },
  {
    "group": "Users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/update",
    "title": "Update user details using ID",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "user",
            "description": "<p>Id. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "any",
            "optional": false,
            "field": "all",
            "description": "<p>required fields for updating. (URL params)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"user details updated\",\n    \"status\": 200,\n    \"data\": {\n        \"ok\": 1,\n        \"n\": 2\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/userRoutes.js",
    "groupTitle": "Users",
    "name": "PostApiV1UsersUpdate"
  },
  {
    "group": "Users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/using/email/updateUser",
    "title": "Update user details using Email",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email of the user. (body params) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "any",
            "optional": false,
            "field": "options",
            "description": "<p>options to be updated. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "     {\n    \"error\": false,\n    \"message\": \"user details updated\",\n    \"status\": 200,\n    \"data\": {\n        \"ok\": 1,\n        \"nModified\": 0,\n        \"n\": 1\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/userRoutes.js",
    "groupTitle": "Users",
    "name": "PostApiV1UsersUsingEmailUpdateuser"
  }
] });
