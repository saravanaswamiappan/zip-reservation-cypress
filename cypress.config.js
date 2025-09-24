const { defineConfig } = require("cypress");
const { registerDurationMetricsPlugin } = require("cypress-duration-metrics/plugin");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const addCucumberPreprocessorPlugin = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;
const webpack = require("@cypress/webpack-preprocessor");
const cypressSplit = require("cypress-split");
const plugins = require("./cypress/plugins/index.js");
const mochawesomeReporter = require("cypress-mochawesome-reporter/plugin");
const _ = require('lodash');
const fs = require('fs');
async function setupNodeEvents(on, config) {
    plugins(on, config);
    mochawesomeReporter(on, config);
    on(
        "file:preprocessor",
        createBundler({
            plugins: [createEsbuildPlugin.default(config)],
        })
    );
    on("before:browser:launch", (browser = {}, launchOptions) => {
        launchOptions.args.push("--js-flags=--max-old-space-size=1024");
        launchOptions.args.push("--no-sandbox");
        launchOptions.args.push('--disable-dev-shm-usage') = true;
        launchOptions.preferences.fullscreen = true;
        cy.viewport(2400, 1200);
        return launchOptions;
    });
    preprocessor.addCucumberPreprocessorPlugin(on, config);
    cypressSplit(on, config);
    return config;
}
async function setupNodeEvents(on, config) {
    plugins(on, config);
    await addCucumberPreprocessorPlugin(on, config);
    on(
        "file:preprocessor",
        webpack({
            webpackOptions: {
                resolve: {
                    extensions: [".ts", ".js", ".json"],
                },
                module: {
                    rules: [
                        {
                            test: /\.ts$/,
                            exclude: [/node_modules/],
                            use: [
                                {
                                    loader: "ts-loader",
                                },
                            ],
                        },
                        {
                            test: /\.feature$/,
                            use: [
                                {
                                    loader: "@badeball/cypress-cucumber-preprocessor/webpack",
                                    options: config,
                                },
                            ],
                        },
                    ],
                },
            }
        })
    )        
    // Make sure to return the config object as it might have been modified by the plugin.
    return config;
}
module.exports = defineConfig({
    projectId: "zip-reserve-ui",
    watchForFileChanges: false,
    chromeWebSecurity: false,
    experimentalStudio: true,
    experimentalModifyObstructiveThirdPartyCode: true,
    experimentalMemoryManagement: true,
    CYPRESS_NO_COMMAND_LOG : 1,
    numTestsKeptInMemory: 0,
    env: {
        //tags: "@focus",
        cypressWatchAndReloadPluginInitialized: false,
        baseUrl: '',
        envname: "qa",
        login:'',
        password: '',
        DefaultPractice: ''
    },
    "cypress-watch-and-reload": {
        watch: "cypress/support/*",
        watch: "cypress/e2e/*",

    },
    pageLoadTimeout: 50000,
    defaultCommandTimeout: 50000,
    testingType: "e2e",
    reporter: "cypress-multi-reporters",
    retries: 0,
    reporterOptions: {
        reporterEnabled: "spec, cypress-mochawesome-reporter, mocha-junit-reporter, cypress-junit-reporter, mochawesome",
        cypressMochawesomeReporterReporterOptions: {
            reportDir: "cypress/reports/mochawesome-reporter",
            charts: true,
            reportPageTitle: "APAC APM Project",
            timestamp: 'mmddyyyy_HHMMss',
            embeddedScreenshots: true,
            inlineAssets: true,
            code: false
        },
        mochawesomeReporterOptions: {
            reportDir: "cypress/reports/results",
            overwrite: false,
            html: true,
            json: true,
            embeddedScreenshots: true,
            code: false,
            charts: true,
            inlineAssets: true
        },
    },
    e2e: {
        setupNodeEvents,
        specPattern: "cypress/e2e/**/*.feature",
        experimentalStudio: true,
        cypressHomePageUrl: "https://www.cypress.io/",
        //baseUrl: "https://www.google.com/",
        screenshotsFolder: "cypress/reports/screenshots",
        videosFolder: "cypress/reports/videos",
        video: false,
        experimentalRunAllSpecs: true,
        experimentalMemoryManagement: true,
        experimentalOriginDependencies: true,
        //experimentalSourceRewriting: true,
    }, experimentalStudio: true
});
