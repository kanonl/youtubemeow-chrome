(function () {
    "use strict";

    const createCallback = () => { if (chrome.runtime.lastError) console.error(chrome.runtime.lastError.message); };

    const updateAvailableCallback = (details) => { console.log(details.version); chrome.runtime.reload(); };

    const onClickedHandler = (info, tab) => {
        if (info.menuItemId === "youtube") {
            let url = new URL("https://www.youtube.com");
            url.pathname = "/results";
            url.search = new URLSearchParams({ "search_query": info.selectionText });

            chrome.tabs.create({ url: url.toString() });
        }
    };

    const contextMenus = () => {
        chrome.contextMenus.create({
            id: "youtube",
            title: "Search YouTube for \"%s\"",
            contexts: ["selection"]
        }, createCallback);
    };

    chrome.runtime.onInstalled.addListener(contextMenus);

    chrome.runtime.onStartup.addListener(contextMenus);

    chrome.runtime.onUpdateAvailable.addListener(updateAvailableCallback);

    chrome.contextMenus.onClicked.addListener(onClickedHandler);
})();
