
// main slideshow
var intervalRef = setInterval(fnSlide, 3000);

function fnSlide() {
    $("#slideFrame_main").animate({ "margin-left": "-100%" }, 500, function () {
        $(this).css({ "margin-left": "0" });
        $("#slideFrame_main>a:first").insertAfter("#slideFrame_main>a:last");
    });

}

//slide Btn 활성화
$("#mainSlide").mouseover(function () {
    $("div#slideBtn > button").css("display", "block");
});
$("#mainSlide").mouseout(function () {
    $("div#slideBtn > button").css("display", "none");
});

//button에 mouseover하면 슬라이드 멈춤
$("div#slideBtn > button").mouseover(function () {
    clearInterval(intervalRef);
    $(this).mouseout(function () {
        intervalRef = setInterval(fnSlide, 2000);
    });
});
$("div#slideBtn > button").mouseout(function () {
    intervalRef = setInterval(fnSlide, 2000);
    $this.mouseover(function () {
        clearInterval(intervalRef);
    });
});

//클릭하면 이동
$("button#slide_left").click(function (e) {
    $("#slideFrame_main").animate({ "margin-left": "-100%" }, 500, function () {
        $(this).css({ "margin-left": "0" });
        $("#slideFrame_main>a:first").insertAfter("#slideFrame_main>a:last");
    })
    e.stopPropagation();
});

$("button#slide_right").click(function () {
    $("#slideFrame_main").animate({ "margin-right": "-100%" }, 500, function () {
        $(this).css({ "margin-right": "0" });
        $("#slideFrame_main>a:first").insertAfter("#slideFrame_main>a:last");
    })
});