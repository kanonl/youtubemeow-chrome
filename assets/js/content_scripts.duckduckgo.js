(function () {
    "use strict";

    let el = document.querySelector("ul#duckbar_static");

    if (el) {
        let url = new URL(window.location.href);

        let li = document.createElement("li");
        li.classList.add("zcm__item");

        let yt = new URL("https://www.youtube.com");
        yt.pathname = "/results";
        yt.search = new URLSearchParams({
            "search_query": url.searchParams.get("q")
        });

        let anchor = document.createElement("a");
        anchor.setAttribute("data-zci-link", "youtube");
        anchor.classList.add("zcm__link");
        anchor.classList.add("js-zci-link");
        anchor.classList.add("js-zci-link--youtube");
        anchor.href = yt.toString();
        anchor.appendChild(document.createTextNode("YouTube"));

        li.appendChild(anchor);
        el.appendChild(li);
    }
})();
