
# Errors-catcher
Catch uncaught exception and unhandled rejections

Without lib this code executed successful:
```javascript
function makeSomething() {
    return new Promise(resolve => {
        unresponsibleObject.unresponsibleField = 3;
    });
}

makeSomething();

```

With **Errors-catcher** you will see:
```
[Unhandled Rejection] at: Promise Promise {
  <rejected> ReferenceError: unresponsibleObject is not defined
    at resolve (/home/ilebedev/projects/errors-catcher/test.js:6:9)
    at makeSomething (/home/ilebedev/projects/errors-catcher/test.js:5:12)
    at Object.<anonymous> (/home/ilebedev/projects/errors-catcher/test.js:10:1)
    at Module._compile (module.js:541:32)
    at Object.Module._extensions..js (module.js:550:10)
    at Module.load (module.js:458:32)
    at tryModuleLoad (module.js:417:12)
    at Function.Module._load (module.js:409:3)
    at Function.Module.runMain (module.js:575:10)
    at startup (node.js:160:18) } reason: undefined

```
