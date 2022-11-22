/*----------If this file is imported to lambda function, the handler for the lambda function will be sqs.handler as the file name is sqs.js----------*/ 

//Importing aws-sdk
const AWS=require('aws-sdk');

//Setting the region as ap-south-1
AWS.config.update({region:'ap-south-1'});

//Creating SQS object and mentioning the API version used here
const sqs=new AWS.SQS({apiVersion:'2012-11-05'});

exports.handler =  function (event,context,callback) {
    // TODO implement
    var param = {

        //Mentioning Queue Name
        QueueName: "Demo-Queue" 
    };
    sqs.createQueue(param, (err,data) => {
        if(err)

            //Showing error message if any, during queue creation
            console.log("Error while creating queue ",err);
        else{
            var params = {

            //Defining Message Attributes  
            MessageAttributes: {
            "Title": {
            DataType: "String",
            StringValue: "Hello World"
            },
            "Author": {
              DataType: "String",
              StringValue: "Suroj Bera"
            }
            },
            
            //Writing Message Body
            MessageBody: "Sending first message to this new Demo-Queue",

            //Mentioning Queue Url
            QueueUrl: data.QueueUrl
            };

            sqs.sendMessage(params, function(err, data) {
            if (err) {

              //Showing error message if any, at the time of sending message to the queue
              console.log("Error while sending message ", err);
            } else {

              //Showing success message if Message gets sent successfully
              console.log("Success", data.MessageId);
            }
            });
        }
    });
    //Returning Success response
    callback(null,"Success");
};
