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

