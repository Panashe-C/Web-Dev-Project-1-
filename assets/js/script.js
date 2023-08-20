'use strict';

'use strict';

/** PRELOAD **/

/* loading will be end after document is loaded */
 
const preloader = document.guerySelector("[data-preload]");
window.addEventListener("load",function () {
    preloader.classList.add("loaded");
    this.document.body.classList.add("loaded");
})



