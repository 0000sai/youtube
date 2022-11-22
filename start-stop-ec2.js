
/*Event should be as below
{
  "instanceId": ["i-07658bdad61207cb2","i-0ec26769d34ea3bd9"]
}
*/

//Importing aws-sdk
const AWS=require('aws-sdk');

//Setting the region as ap-south-1
AWS.config.update({region:'ap-south-1'});

//Creating EC2 object and mentioning the API version used here
const ec2=new AWS.EC2({apiVersion:'2016-11-15'});


exports.handler = function (event,context,callback){
  
var params = {
    InstanceIds: event.instanceId,
    IncludeAllInstances : true
};

ec2.describeInstanceStatus(params, function(err, data) {

    for(let i=0;i<event.instanceId.length;i++){
    if (err) console.log(err);
    else  {
        
        var params = {
            InstanceIds: [event.instanceId[i]]
        };

        if(data.InstanceStatuses[i].InstanceState.Name == "running"){
        ec2.stopInstances(params, function(err, data){
            if(err) console.log(err);
            else console.log("Instance stopped with id "+event.instanceId[i]);
        });
        }
        
        else if(data.InstanceStatuses[i].InstanceState.Name == "stopped"){
        ec2.startInstances(params, function(err, data){
            if(err) console.log(err);
            else console.log("Instance started with id "+event.instanceId[i]);
        });
        }
        
        else {
        console.log("Instance with id "+event.instanceId[i]+" is neither running nor stopped");       
        }
    }       
    }
 });
    
callback(null,"Success");
};