exports.handler = function(context, event, callback) {

    const shortid = require('shortid');

    //todo - time to be involved in test cases

    if (event.Code == process.env.CODE && event.To == process.env.PHONENUMBER){
    
        var result = 
        {
            "status": "approved",
            "payee": null,
            "date_updated": "2022-07-28T06:00:29Z",
            "account_sid": process.env.ACCOUNT_SID,
            "to": process.env.PHONENUMBER,
            "amount": null,
            "valid": true,
            "sid": "VE3f602125a1b9ead73ed1ec9" + shortid.generate(),
            "date_created": "2022-07-28T05:59:51Z",
            "service_sid": "VA95f2a6694da8e2753cb3ab9" + shortid.generate(),
            "sna_attempts_error_codes": null,
            "channel": "sms"
        }
    }else{
        var result = 
        {
            "status": "pending",
            "payee": null,
            "date_updated": "2022-07-28T06:01:28Z",
            "account_sid": process.env.ACCOUNT_SID,
            "to": process.env.PHONENUMBER,
            "amount": null,
            "valid": false,
            "sid": "VEaf28d7ffda4be4e7f67041e" + shortid.generate(),
            "date_created": "2022-07-28T06:01:10Z",
            "service_sid": "VA95f2a6694da8e2753cb3ab9" + shortid.generate(),
            "sna_attempts_error_codes": null,
            "channel": "sms"
        }
    }

    callback(null, result);


}