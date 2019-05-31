# Installation


*   Install our client globally
```
$> npm i @cennznet/cli -g
```


*  Install our api, generic asset, cennzx spot and attestation locally

```
$> npm i --save @cennznet/api @cennznet/crml-generic-asset @cennznet/crml-cennzx-spot @cennznet/crml-attestation
```

`@cennznet/crml-*` are peer dependencies to `@cennznet/api`, they need to be installed together.

**Do not put @plugnet/\* or @polkadot/\* in your package.json**

