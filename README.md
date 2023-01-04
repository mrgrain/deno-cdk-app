# AWS CDK with Deno

Example repository how to use the AWS CDK with Deno.

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
