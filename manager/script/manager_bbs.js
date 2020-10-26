//게시판 카테고리 선택
let bbs = ["공지사항", "이벤트", "상품 사용후기", "상품Q&A", "1:1문의"];
let bbsOption = "";
for (let i = 0; i < bbs.length; i++) {
    bbsOption += `<option value="${bbs[i]}">${bbs[i]}</option>`;
}
let bbsSelect = document.querySelector("#bbsSelect");
bbsSelect.innerHTML = bbsOption;

//게시글 카테고리 선택
let bbsWrite = ["제목", "내용", "작성자", "상품명", "아이디"];
let bbsWrite_Option = "";
for (let i = 0; i < bbsWrite.length; i++) {
    bbsWrite_Option += `<option value="${bbsWrite[i]}">${bbsWrite[i]}</option>`;
}
let bbsWriteSelect = document.querySelector("#bbsWriteSelect");
bbsWriteSelect.innerHTML = bbsWrite_Option;

//DatePicker

$(".datepicker").datepicker({
    showOn: "both",
    buttonImage: "images/main/calendar.png",
    buttonImageOnly: true,
    changeYear: true,
    dateFormat: "yy-mm-dd"
});
$.datepicker.setDefaults({
    monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
    dayNames: ['일', '월', '화', '수', '목', '금', '토'],
    showMonthAfterYear: true
});
