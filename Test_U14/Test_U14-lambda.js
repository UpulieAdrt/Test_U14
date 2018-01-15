let AWS = require('aws-sdk');
let SL = require('slappforge-aws');
const sqs = new SL.AWS.SQS();
exports.handler = function (event, context, callback) {


	callback(null, 'Successfully executed');
	console.log("Triggered by the API_ANY");

	sqs.receiveMessage({
		QueueUrl: 'https://sqs.us-east-1.amazonaws.com/480964559519/test-read',
		AttributeNames: ['All'],
		MaxNumberOfMessages: '1',
		VisibilityTimeout: '30',
		WaitTimeSeconds: '0'
	}, function (receivedMessages) {
		receivedMessages.forEach(message => {
			// your logic to access each message through out the loop. Each message is available under variable message 
			// within this block

			console.log("Fetched the message");
			callback(null,"read from the queue. ");
		})
	}, function (error) {
		// implement error handling logic here

			console.log("Failed to fetch the messages. No messages found");
	});


}