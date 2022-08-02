exports.handler = function(context, event, callback) {

    /*
        to: event.to,
        locale : event.locale,
        channel: event.channel
    */

    const shortid = require('shortid');

    var result = 
    {
            "sid": "VE06b8032962e4d405430c4ff" + shortid.generate(),
            "serviceSid": process.env.VERIFY_SID,
            "accountSid": process.env.ACCOUNT_SID,
            "to": event.to,
            "channel": "sms",
            "status": "pending",
            "valid": false,
            "lookup": {
              "carrier": {
                "mobile_country_code": "505",
                "type": "mobile",
                "error_code": null,
                "mobile_network_code": "01",
                "name": "Telstra Corporation Ltd"
              }
            },
            "amount": null,
            "payee": null,
            "sendCodeAttempts": [
              {
                "attempt_sid": "VL140f4f7ada89323d880439" + shortid.generate(),
                "channel": "sms",
                "time": "2022-07-27T23:47:44.139Z" //todo mock too many attempts and last time attempted
              }
            ],
            "dateCreated": "2022-07-27T23:47:44.000Z", //todo - create a test for expired
            "dateUpdated": "2022-07-27T23:47:44.000Z",
            "url": "https://verify.twilio.com/v2/Services/VA95f2a6694da8e2753cb3ab" + shortid.generate() + "/Verifications/VE06b8032962e4d405430c4ff" + shortid.generate()
    }

    callback(null, result);

}