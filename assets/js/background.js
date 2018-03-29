(function () {
    "use strict";
    
    const menuItemId = "3391dbce625f4f0980ddbe2c95dfe514";

    const contextMenus = () => {
        let createProperties = {
            id: menuItemId,
            title: "Search YouTube for \"%s\"",
            contexts: ["selection"]
        };

        chrome.contextMenus.create(createProperties, () => {
            if (chrome.runtime.lastError) console.error(chrome.runtime.lastError.message);
        });
    };

    chrome.runtime.onInstalled.addListener(event => contextMenus());

    chrome.runtime.onStartup.addListener(event => contextMenus());

    chrome.contextMenus.onClicked.addListener((info, tab) => {
        if (info.menuItemId === menuItemId) {
            let url = new URL("https://www.youtube.com");
            url.pathname = "/results";
            url.search = new URLSearchParams({ "search_query": info.selectionText });

            chrome.tabs.create({ url: url.toString() });
        }
    });
})();
