import cdk from "npm:aws-cdk-lib";
const app = new cdk.App();
const stack = new cdk.Stack(app, "DenoStack");

new cdk.aws_s3.Bucket(stack, "Bucket");

app.synth();
