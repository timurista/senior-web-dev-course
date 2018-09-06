## Costs
you spend less money to set everything up, and less time deploying app. Ready out of gate for performance and scale. Infrastructure partially in cloud. Let big companies handle scale, and cloud handles infra needs. 

## Why do we need aws?
manage db, sharding etc. With aws they take care of load balancing, databases to grow automatically this is done for you. AWS, microsoft azure and gcp (google cloud platform).


## AWS services
No shortage of aws services. Most common services. But there are a bunch of them. EC2 basic server you can run. Like digital ocean linux serve.

## EC2
sign up aws and they will provision a machine, etc. General purpose bare metal server.

## S3
object storage service, object stored as file. Key or ID, and you can upload store and download any file you want.

## Lambda
run code for any type of app, you provide a function and it will run it for you. You upload code and it does it all. Amazon will take care of it and scale.

## Cloudfront
cdn service to serve resources locally.

## DynamoDB
manage scaling of key value storage, then you can access that with key. Many are using dynamoDB in IOT etc.

## AWS flow
Befoer you had monolithic code base that did everything. But with docker and aws, you can better split things out into microservices.

How you have small pieces you can release to prod one at a time. Here you can have small teams that worry about their one machine and service and make sure that is really good.

SLA, and they respond in this way. Then these massive companies can work more efficiently.

## AWS EC2
we are being charged even if no one is using it. And we are being charged for security, etc. As our usage scales we need to make sure our server adapts to it and when not used it isn't costing us.

## Amazon lambda -- Serverless
We hand cloud provider stuff and they charge us for only what they use. Cloud provider can add more servers for holiday shopping etc. Code is running in a secure env.

## Functions
WHen a user makes a request then it does a fetch call and we upload the code to amazon lambda. Cloud makes a container and it runs the function. Cold start problem, it takes time to spin up container.