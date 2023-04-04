//Version used nodejs 14.x//

//Importing aws-sdk
const AWS=require('aws-sdk');

//Setting the region us-east-1
AWS.config.update({region:'us-east-1'});

const ec2=new AWS.EC2({apiVersion:'2016-11-15'});
const sns=new AWS.SNS({apiVersion: '2010-03-31'});

exports.handler = function (event,context,callback){
    
    var instanceId = event.resources[0].split('/')[1];
    
    var params = {
    InstanceIds: [instanceId]
    };
    
    ec2.describeInstances(params, function(err, data) {
    if (err) console.log(err);
    else{
        var state = event.detail.state;
        var privateIp = data.Reservations[0].Instances[0].PrivateIpAddress;
        var name = data.Reservations[0].Instances[0].Tags[0].Value;
        var message = "State of EC2 instance with privateIP "+privateIp+" and name "+name+" has been changed to "+state;
        
        var params ={
            Message: message,
            Subject: "EC2 State Changed",
            TopicArn: "arn:aws:sns:us-east-1:794260412726:demo" //Need to mention your topic arn
        };
        
        sns.publish(params, function(err, data) {
        if (err) 
            console.log(err);
        else     
            console.log("Message sent successfully"); 
        });
    }           
    });
    
    callback(null,"Success");
};
