// When the extension is installed or upgraded ...
chrome.runtime.onInstalled.addListener(function() {

  // Replace all rules ...
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    // With a new rule ...
    chrome.declarativeContent.onPageChanged.addRules([
      {
        // That fires when a page's URL contains a 'bankofamerica' ...
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { urlContains: 'bankofamerica' },

            // only enable clicking when there are deals.
            css: ["a[class*='add-deal']"]
          }),

        ],
        // And shows the extension's page action.
        actions: [ new chrome.declarativeContent.ShowPageAction()]
      }
    ]);
  });
});

chrome.pageAction.onClicked.addListener(function() {
   // load our alert style and fire off the deals.js snippet
   chrome.tabs.insertCSS(null, {file: "bofadealclicker.css"});
   chrome.tabs.executeScript(null, {file: "deals.js"});
});
