import cdk from "aws-cdk-lib/core";
import s3 from "aws-cdk-lib/aws-s3";
const app = new cdk.App();
const stack = new cdk.Stack(app, "DenoStack");

new s3.Bucket(stack, "Bucket");

app.synth();
