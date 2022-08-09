# CDK with Deno

This is an exploration repo to see how CDK can be used with Deno.

## Getting started

Run `npx cdk synth` etc as normal.

`app.ts` contains the full CDK app with Deno.
`cdk.json` points CDK at the Deno app.

## Not working

* Import Map with submodules
  Couldn't get this working with the current exports and esm.sh
  A different CDN or local version of CDK might work
* Run CLI in Deno
  I managed to get two flavours of errors: A Rust failure or the CLI would run but don't do anything.
  My guess is that the binary is not exposed correctly.
