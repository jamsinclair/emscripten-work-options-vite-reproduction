# Worker Options Vite Issue Reproduction

**Affected versions:** Emscripten >= v3.1.58

This repository is a reproduction of an issue I'm facing with Emscripten and Vite.

When code using threads is compiled with Emscripten and run with Vite it does not compile and throws the following error:

```
[vite:worker-import-meta-url] Vite is unable to parse the worker options as the value is not static.To ignore this error, please use /* @vite-ignore */ in the worker options.
file
```

Vite has had this logic for some time, over 2 years. Recent changes to Emscripten have made output code incompatible with it.

## Steps to reproduce

1. (Optional) Assumes Emscripten is installed (See https://emscripten.org/docs/getting_started/downloads.html)
2. Clone this repository
3. Run `npm install` && `npm run build`

## Suggested fix

Refactor [library_pthread.js](https://github.com/emscripten-core/emscripten/blob/main/src/library_pthread.js) to use static values for the worker options. It'll be more verbose but it'll make the code compatible with Vite and maintain compatibility with other bundlers.