
module.exports = (on, config) => {
    on("before:browser:launch", (browser = {}, launchOptions) => {
        if (browser.name === "chromium") {
            launchOptions.args.push('--js-flags="--max_old_space_size=1024 --max_semi_space_size=1024"');
            launchOptions.args.push('--disable-dev-shm-usage') =true;
            launchOptions.args.push("--no-sandbox");
            //launchOptions.args.push("--disable-gl-drawing-for-tests");
            //launchOptions.args.push("--disable-gpu");
            launchOptions.args.push("--disable-site-isolation-trials");

        }
        if (browser.name === "chrome") {
            launchOptions.args.push('--js-flags="--max_old_space_size=1024 --max_semi_space_size=1024"');
            launchOptions.args.push('--disable-dev-shm-usage')=true;
            launchOptions.args.push("--no-sandbox");
            launchOptions.args.push("--disable-site-isolation-trials");
            //launchOptions.args.push("--disable-gl-drawing-for-tests");
            //launchOptions.args.push("--disable-gpu");
        }
        if (browser.name === "electron") {
            launchOptions.args.push('--js-flags="--max_old_space_size=1024 --max_semi_space_size=1024"');
            launchOptions.args.push('--disable-dev-shm-usage') = true;
            launchOptions.args.push("--no-sandbox");
            launchOptions.args.push("--disable-site-isolation-trials");
           // launchOptions.args.push("--disable-gl-drawing-for-tests");
            //launchOptions.args.push("--disable-gpu");
        }
        return launchOptions;
    });
};
module.exports = (on, config) => {
    require('cypress-watch-and-reload/plugins')(on, config);

    return config
};

