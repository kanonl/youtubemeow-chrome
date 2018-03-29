(function () {
    "use strict";

    let el = document.querySelector("#hdtb-msb-vis");

    if (el) {
        let url = new URL(window.location.href);

        let div = document.createElement("div");
        div.classList.add("hdtb-mitem");
        div.classList.add("hdtb-imb");

        let yt = new URL("https://www.youtube.com");
        yt.pathname = "/results";
        yt.search = new URLSearchParams({ "search_query": url.searchParams.get("q") });

        let anchor = document.createElement("a");
        anchor.classList.add("q");
        anchor.classList.add("qs");
        anchor.href = yt.toString();

        anchor.appendChild(document.createTextNode("YouTube"));
        div.appendChild(anchor);
        el.appendChild(div);
    }
})();
