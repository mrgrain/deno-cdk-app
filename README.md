# AWS CDK with Deno

This is an experimental repository to explore how the AWS CDK can be used with Deno.

## Getting started

It's as easy as:

```console
deno task cdk synth
```

`app.ts` contains the CDK app using Deno\
`cdk.json` points CDK at the Deno app: `deno run -A app.ts`

## Run the CLI directly

Instead of using a task, the CLI can be invoked directly:

```console
deno run -A npm:aws-cdk synth
```

## Install the CLI globally

It's possible to globally install the CLI:

```console
deno install -frA -n cdk npm:aws-cdk
```

The same command will also update if a newer version is available.

Now using CDK can be shortened to  `cdk synth`.\
However global installation is not recommended, because the versions of the cli and lib can diverge easily.

## Not working

### NPM: VS Code Deno extension

Still some issues with the VS Code extension and/or language server.\
Npm specifiers in import maps require the use of `npm:/` prefix, which causes issues in VS Code:\
`Uncached or missing remote URL: "npm:/aws-cdk-lib@2.51.0"`
