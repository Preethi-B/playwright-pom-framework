const config = {

    testDir: './tests',         // where tests are
    testMatch: '**/*.spec.js',  // test file pattern
    timeout: 30 * 1000,         // 30 seconds per test
    retries: 0,                 // no retries locally

    reporter: 'html',           // visual HTML report

    use: {
        browserName: 'chromium',    // run on Chrome
        headless: true,             // no browser window in CI
        screenshot: 'on',           // capture every test
        trace: 'on',                // full trace for debugging
        video: 'retain-on-failure', // video only if test fails
    },

};

module.exports = config;
