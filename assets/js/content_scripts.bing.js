(function () {
    "use strict";

    let el = document.querySelector("nav.b_scopebar ul");

    if (el) {
        let url = new URL(window.location.href);

        let yt = new URL("https://www.youtube.com");
        yt.pathname = "/results";
        yt.search = new URLSearchParams({
            "search_query": url.searchParams.get("q")
        });

        let anchor = document.createElement("a");
        anchor.href = yt.toString();
        anchor.appendChild(document.createTextNode("YouTube"));

        let li = document.createElement("li");
        li.appendChild(anchor);

        el.insertBefore(li, el.children[6]);
    }
})();
