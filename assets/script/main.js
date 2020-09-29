//ul#user_lnbSub 'mouse over' 서브메뉴 나타나기 : jQuery 사용
$("#lnb_subMenu").mouseover(function () {
  $("#user_lnbSub").css("display", "block");
  $("#user_lnbSub").mouseover(function () {
    $("#user_lnbSub").css("display", "block");
  });
});

$("#lnb_subMenu").mouseout(function () {
  $("#user_lnbSub").css("display", "none");
  $("#user_lnbSub").mouseout(function () {
    $("#user_lnbSub").css("display", "none");
  });
});

// main slideshow
setInterval(fnSlide, 3000);

function fnSlide() {
  $("#slideFrame_main").animate({ "margin-left": "-1440px" }, 500, function () {
    $(this).css({ "margin-left": "0" });
    // 첫 번째 항목 뒤로 이동
    $("#slideFrame_main>a:first").insertAfter("#slideFrame_main>a:last");
  });
}
