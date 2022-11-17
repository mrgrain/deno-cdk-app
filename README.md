# AWS CDK with Deno

This is an experimental repo to explore how the AWS CDK can be used with Deno.

## Getting started

Run `deno run -A --unstable npm:aws-cdk synth`

`app.ts` contains the full CDK app with Deno.
`cdk.json` points CDK at the Deno app.

## Install the CLI

It's possible to globally install the CLI:
`deno install -frA --unstable -n cdk npm:aws-cdk`

The same command will also update if a newer version is available.

## Not working

* **NPM: Import Map with generic submodules**\
  Built-in npm support fails with error `Failed to resolve the specifier ""aws-cdk-lib/aws-s3"" as its after-prefix portion ""aws-s3"" could not be URL-parsed relative to the URL prefix`.\
  However it works with explicitly specifying the submodule.

* **NPM: VS Code Deno extension**\
  There is an issue with the VS Code extension and/or language server not finding the correct types.\
  No imports are found and any usage of constructs and classes will be red underlined.\
  However the runtime handles the code correctly.
