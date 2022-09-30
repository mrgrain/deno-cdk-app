# CDK with Deno

This is an exploration repo to see how CDK can be used with Deno.

## Getting started

Run `deno run -A --unstable npm:aws-cdk synth`

`app.ts` contains the full CDK app with Deno.
`cdk.json` points CDK at the Deno app.

## Install the CLI

It's possible to globally install the CLI:
`deno install -frA --unstable -n cdk npm:aws-cdk`

The same command will also update if a newer version is available.

## Not working

* Import Map with submodules
  Couldn't get this working with the current exports and esm.sh
  A different CDN or local version of CDK might work

* Run library from `npm:aws-cdk-lib`
  Fails with error `error: [ERR_MODULE_NOT_FOUND] Cannot find module "/Users/$USER/Library/Caches/deno/npm/registry.npmjs.org/aws-cdk-lib/2.29.0/core/lib/cloudformation.generated" imported from "/Users/$USER/Library/Caches/deno/npm/registry.npmjs.org/aws-cdk-lib/2.29.0/core/lib/index.js"
