import cdk from "npm:aws-cdk-lib";
import s3 from "npm:aws-cdk-lib/aws-s3";
const app = new cdk.App();
const stack = new cdk.Stack(app, "DenoStack");

new s3.Bucket(stack, "Bucket");

app.synth();
