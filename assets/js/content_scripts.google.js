(function () {
    "use strict";

    let el = document.querySelector("#hdtb-msb-vis");

    if (el) {
        let url = new URL(window.location.href);

        let div = document.createElement("div");
        div.setAttribute("aria-selected", false);
        div.classList.add("hdtb-mitem");
        div.classList.add("hdtb-imb");
        div.setAttribute("role", "tab");

        let yt = new URL("https://www.youtube.com");
        yt.pathname = "/results";
        yt.search = new URLSearchParams({
            "search_query": url.searchParams.get("q")
        });

        let anchor = document.createElement("a");
        anchor.classList.add("q");
        anchor.classList.add("qs");
        anchor.href = yt.toString();

        let span = document.createElement("span");
        let item = document.querySelector("div.hdtb-mitem.hdtb-imb span");
        span.className = item.className;
        span.style.height = "16px";
        span.style.width = "16px";
        span.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z\"/></svg>";

        anchor.appendChild(span);

        anchor.appendChild(document.createTextNode("YouTube"));
        div.appendChild(anchor);
        el.appendChild(div);
    }
})();
