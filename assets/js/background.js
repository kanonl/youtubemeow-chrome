(function () {
    "use strict";

    const createHandler = () => { if (chrome.runtime.lastError) console.error(chrome.runtime.lastError.message); };

    const contextMenus = () => {
        chrome.contextMenus.create({
            id: 'youtube',
            title: "Search YouTube for \"%s\"",
            contexts: ["selection"]
        }, createHandler);
    };

    chrome.runtime.onInstalled.addListener(contextMenus);

    chrome.runtime.onStartup.addListener(contextMenus);

    chrome.contextMenus.onClicked.addListener((info, tab) => {
        if (info.menuItemId === 'youtube') {
            let url = new URL("https://www.youtube.com");
            url.pathname = "/results";
            url.search = new URLSearchParams({ "search_query": info.selectionText });

            chrome.tabs.create({ url: url.toString() });
        }
    });
})();
