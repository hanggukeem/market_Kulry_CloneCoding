
// // main slideshow

// //slide Btn 활성화
$("#mainSlide").mouseover(function () {
    $(".tns-controls button").css("display", "block");
});
$("#mainSlide").mouseout(function () {
    $(".tns-controls button").css("display", "none");
});

// //button에 mouseover하면 슬라이드 멈춤
// $(".tns-controls button").mouseover(function () {
//     clearInterval(slider);
//     $(this).mouseout(function () {
//         intervalRef = setInterval(fnSlide, 2000);
//     });
// });
// $(".tns-controls button").mouseout(function () {
//     intervalRef = setInterval(fnSlide, 2000);
//     $this.mouseover(function () {
//         clearInterval(intervalRef);
//     });
// });

var slider = tns({
    "container": ".slides",
    "items": 1,
    "rewind": true,
    "autoplay": true,
    "autoplayTimeout": 3000,
    "swipeAngle": false,
    "speed": 400
});


let prevBtn = document.querySelector(".tns-controls button:first-child");
prevBtn.innerHTML = "＜";

let nextBtn = document.querySelector(".tns-controls button:last-child");
nextBtn.innerHTML = "＞";
