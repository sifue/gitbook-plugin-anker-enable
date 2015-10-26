require(["gitbook"], function(gitbook) {
    gitbook.events.bind("page.change", function() {
        // For Anker tag link
        if (location.hash) {
            // deley for other event
            setTimeout(function(){
                // for Chrome
                $('.book-body').scrollTop($(location.hash).offset().top);
                // for Firefox
                document.location = location.hash;
            }, 300);
        }
    });
});
