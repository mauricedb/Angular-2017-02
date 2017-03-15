function main() {
    b1.addEventListener('click', bindSecondButton);
}

function bindSecondButton() {
    b2.addEventListener('click', () => setTimeout(throwError, 500));
}


function throwError() {
    throw new Error('aw shucks');
}

// main();

Zone.current.fork({
        name: 'error-logger',
        onHandleError: function (parentZoneDelegate, currentZone, targetZone, error) {
            console.log(error.stack);
        }
    })
    .fork(Zone.longStackTraceZoneSpec)
    .run(main);