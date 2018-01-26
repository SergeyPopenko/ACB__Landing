if ($("[data-paroller-factor]").length) {
  function loadScript(src, callback) {
    var head = document.getElementsByTagName("head")[0],
        script = document.createElement("script");
    done = false;
    script.setAttribute("src", src);
    script.onload = script.onreadstatechange = function() {
      if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
        done = true;
        script.onload = script.onreadystatechange = null;
        if (callback) {
          callback();
        }
      }
    }
    head.insertBefore(script, head.firstChild);
  }
  if (window.innerWidth > 767) {
    loadScript("/wp-content/themes/slmma/js/paroller.min.js", function() {
      $(window).paroller();
    });
  }
}
