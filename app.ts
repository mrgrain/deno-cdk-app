import cdk from "https://esm.sh/aws-cdk-lib@2.36.0";
const app = new cdk.App();
const stack = new cdk.Stack(app, "DenoStack");

new cdk.aws_s3.Bucket(stack, "Bucket");

app.synth();
