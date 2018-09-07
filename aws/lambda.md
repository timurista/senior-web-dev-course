## AWS Lambda
free tier up to 1 mil requests

Go to AWS console, login
and create a new aws lambda function. Choose node 8.10 and use an existing role (for now)

## Serverless tool
Helps with serverless architecture.
Means you don't have to worry about scaling etc.

`npm install serverless -g`

## Serverless
alows you to hook into various events through yaml configuration.
You can connect to s3, setup scheduling, etc.

## Configurating IAM
the official documentation from Amazon:
https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_manage.html

## SLS commands
to deploy the code, sls deploy
to test on the server
  -- `sls invoke --function rank`

But this could Cost you $$
instead, you want to invoke local
`sls invoke local --function rank`
-- only works if it is simple but not if it depends on s3 bucket or something.

