
require('./errors-catcher').catchAll();

function makeSomething() {
    return new Promise(resolve => {
        unresponsibleObject.unresponsibleField = 3;
    });
}

makeSomething();
