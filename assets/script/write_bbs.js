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

//전체카테고리 메뉴 fulldown
$("nav#gnb_main>ul>li:first-child").mouseover(function () {
    $("div#gnbArea_sub").css("display", "block");
    $("div#gnbArea_sub").mouseover(function () {
        $("div#gnbArea_sub").css("display", "block");
    });
});
$("nav#gnb_main>ul>li:first-child").mouseout(function () {
    $("div#gnbArea_sub").css("display", "none");
    $("div#gnbArea_sub").mouseout(function () {
        $("div#gnbArea_sub").css("display", "none");
    });
});

//전체메뉴 mouseover 했을 때 color change
$("nav#gnb_sub >ul>li a")
    .mouseover(function () {
        var imgsrc = $(this).find("img").attr("src");
        imgsrc = imgsrc.replace("_off", "_on");
        $(this).find("img").attr("src", imgsrc);
    })
    .mouseout(function () {
        var imgsrc = $(this).find("img").attr("src");
        imgsrc = imgsrc.replace("_on", "_off");
        $(this).find("img").attr("src", imgsrc);
    });

//innerGnb_sub fadein, fadeout
$("nav#gnb_sub>ul li ").mouseover(function () {
    $(this).children("ul.innerGnb_sub").stop().fadeIn();
});
$("nav#gnb_sub>ul li").mouseout(function () {
    $(this).children("ul.innerGnb_sub").stop().fadeOut();
});

// nav_GNB sticky 
window.onscroll = function () { fnGnbSticky() };

let navbar = document.getElementById("gnbArea");
let fixed = navbar.offsetTop;

function fnGnbSticky() {
    if (window.pageYOffset >= fixed) {
        navbar.classList.add("fixed")
    } else {
        navbar.classList.remove("fixed");
    }
}

// Quick menu
let currentPosition = parseInt($("#quick_lnb").css("top"));
$(window).scroll(function () {
    let position = $(window).scrollTop();
    $("#quick_lnb").stop().animate({ "top": position + currentPosition + "px" }, 1000);
});

//페이지상단이동
$(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
        $('#pageTop').fadeIn();
    } else {
        $('#pageTop').fadeOut();
    }
});

$("#pageTop").click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 400);
    return false;
});