(function () {
    "use strict";

    let el = document.querySelector(`[data-track-id="nav_videos"]`);

    if (el) {
        let anchor = el.querySelector("a.navbar-link");
        anchor.href = anchor.href.replace("videos", "search") + "%23yt";
        anchor.innerHTML = anchor.innerHTML.replace("Videos", "YouTube");
    }
})();
