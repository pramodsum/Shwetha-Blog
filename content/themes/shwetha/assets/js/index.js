/**
 * Main JS file for theme behaviours
 */

/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function(){
        
        /* Theme animations */
        /* Comment out or delete all 3 lines to disable stack effect for images and video embeds */
        $(".post img, .post iframe").not(".noclip,.twitter-tweet").before("<div class='paperclip'></div>").wrap("<div class='card'></div>");
        $(".card").mouseenter(function() { $(this).addClass("untrans").prev(".paperclip").addClass("removed"); });
        $(".post img").after(function() { return "<div class='caption'>" + this.alt + "</div>"; });

    });

}(jQuery));