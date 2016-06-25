
module.exports = {
    /**
     * Catch uncaught exception.
     * @param {number} [exitCode=1]
     */
    catchExceptions(exitCode) {
        process.on('uncaughtException', function(e) {
            console.error('[Uncaught Exception]', e.stack);
            process.exit(typeof exitCode === 'number' ? exitCode : 1);
        });
    },
    /**
     * Catch unhandled rejections.
     * @param {number} [exitCode=2]
     */
    catchRejections(exitCode) {
        process.on('unhandledRejection', function(reason, p) {
            console.error('[Unhandled Rejection] at:', p, 'reason:', String(reason).red);
            process.exit(typeof exitCode === 'number' ? exitCode : 2);
        });

    },
    catchAll() {
        this.catchExceptions();
        this.catchRejections();
    }
};
