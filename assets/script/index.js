
// main slideshow
setInterval(fnSlide, 3000);

function fnSlide() {
    $("#slideFrame_main").animate({ "margin-left": "-100%" }, 500, function () {
        $(this).css({ "margin-left": "0" });
        $("#slideFrame_main>a:first").insertAfter("#slideFrame_main>a:last");
    });
}

