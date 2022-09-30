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

* **Import Map with generic submodules**\
  Not working with the generic submodules.\
  Esm.sh will incorrectly ignore the import map and use the package from npm.\
  Built-in npm support fails with error `Failed to resolve the specifier ""aws-cdk-lib/aws-s3"" as its after-prefix portion ""aws-s3"" could not be URL-parsed relative to the URL prefix`.

* **Use library from `npm:aws-cdk-lib`**\
  Fails with error: `[ERR_MODULE_NOT_FOUND] Cannot find module "/Users/$USER/Library/Caches/deno/npm/registry.npmjs.org/aws-cdk-lib/2.29.0/core/lib/cloudformation.generated" imported from "/Users/$USER/Library/Caches/deno/npm/registry.npmjs.org/aws-cdk-lib/2.29.0/core/lib/index.js"`
