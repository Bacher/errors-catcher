
module.exports = {
    /**
     * Catch uncaught exception
     * @param {number} [exitCode=1]
     */
    catchExceptions(exitCode) {
        process.on('uncaughtException', function(e) {
            console.error('[Uncaught Exception]', e.stack);
            process.exit(exitCode || 1);
        });
    },
    /**
     * Catch unhandled rejections
     * @param {number} [exitCode=2]
     */
    catchRejections(exitCode) {
        process.on('unhandledRejection', function(reason, p) {
            console.error('[Unhandled Rejection] at: Promise', p, 'reason:', String(reason).red);
            process.exit(exitCode || 2);
        });

    },
    catchAll() {
        this.catchExceptions();
        this.catchRejections();
    }
};
