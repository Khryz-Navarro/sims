(function() {
    'use strict';

    var termsScroll = document.getElementById('terms-scroll');
    new SimpleBar(termsScroll, { autoHide: true });

    let DIV_Box = ".terms-box";

    /* box with fullscreen */
    let boxFullscreenBtn = document.querySelectorAll(".terms-fullscreen");
    boxFullscreenBtn.forEach((ele) => {
      ele.addEventListener("click", function (e) {
        let $this = this;
        let box = $this.closest(DIV_Box);
        box.classList.toggle("box-fullscreen");
        box.classList.remove("box-collapsed");
        e.preventDefault();
        return false;
      });
    });
    /* box with fullscreen */
     
})()