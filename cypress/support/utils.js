
/**
 * @param {string} type - Log Type, ex. ERROR or INFO
 * @param {string} message - Log Message
 */
function logMessage(message, type = "INFO") {
    let d = new Date();
    cy.addContext(`\n${d.toLocaleDateString()} ${d.toLocaleTimeString()} : ${type} : ${message}`);
};

async function pageLoadTime(page) {
    //in ms
    let performanceTimingJson = await page.evaluate(() => JSON.stringify(window.performance.timing))
    let performanceTiming = JSON.parse(performanceTimingJson)
    let startToInteractive = performanceTiming.domInteractive - performanceTiming.navigationStart
    return startToInteractive;
};


global.logMessage = logMessage;
global.pageLoadTime = pageLoadTime;