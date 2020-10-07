//joinForm 유효성검사

let uId = document.querySelector("#uId");
uId.addEventListener("focusin", validationChk_id, { once: true });

function validationChk_id() {

    let msg = document.createElement("li");
    msg.innerHTML =
        "･ 6자 이상의 영문 혹은 영문과 숫자를 조합"
        + "<br>" + "･ 아이디 중복확인";
    document.querySelector("ul#idMsg").appendChild(msg);


}



let uPw = document.querySelector("#uPw")
uPw.addEventListener("focusin", validationChk_Pw, { once: true });
function validationChk_Pw() {
    let msg = document.createElement("li");
    let inputMsg = document.getElementById("pwMsg");
    msg.innerHTML =
        "･ 10자 이상 입력"
        + "<br>" + "･ 영문/숫자/특수문자(공백 제외)만 허용하며, 2개 이상 조합"
        + "<br>" + "･ 동일한 숫자 3개 이상 연속 사용 불가";
    inputMsg.appendChild(msg);
}

let uPwChk = document.querySelector("#uPwChk");
uPwChk.addEventListener("focusin", validationChk_PwChk, { once: true });
function validationChk_PwChk() {
    let msg = document.createElement("li");
    msg.innerHTML =
        "･ 동일한 비밀번호를 입력해주세요.";
    document.querySelector("ul#pwChkMsg").appendChild(msg);
}


//추가입력 사항
let sponId = document.getElementById("sponId");
sponId.addEventListener("click", fnAddInput)

function fnAddInput() {
    $("div#add_input").css("display", "block");
}


//joinBtn
let joinBtn = document.querySelector("#joinBtn");
joinBtn.addEventListener("click", fnJoin);

function fnJoin() {

}

//전체동의
let chkAll = document.getElementById("chkAll");
chkAll.addEventListener("click", fnWholeChk);
function fnWholeChk() {
    let chkVal = document.getElementById("chkAll").checked;
    let chk_01 = document.getElementById("chk_01");
    let chk_02 = document.getElementById("chk_02");
    let chk_03 = document.getElementById("chk_03");
    let chk_04 = document.getElementById("chk_04");
    let chk_05 = document.getElementById("chk_05");
    let chk_06 = document.getElementById("chk_06");
    let chk_07 = document.getElementById("chk_07");

    chk_01.checked = chkVal;
    chk_02.checked = chkVal;
    chk_03.checked = chkVal;
    chk_04.checked = chkVal;
    chk_05.checked = chkVal;
    chk_06.checked = chkVal;
    chk_07.checked = chkVal;
}

//전체동의 해제
let chk_01 = document.getElementById("chk_01");
chk_01.addEventListener("click", fnReverseChk);
let chk_02 = document.getElementById("chk_02");
chk_02.addEventListener("click", fnReverseChk);
let chk_03 = document.getElementById("chk_03");
chk_03.addEventListener("click", fnReverseChk);
let chk_04 = document.getElementById("chk_04");
chk_04.addEventListener("click", fnReverseChk);
let chk_05 = document.getElementById("chk_05");
chk_05.addEventListener("click", fnReverseChk);
let chk_06 = document.getElementById("chk_06");
chk_06.addEventListener("click", fnReverseChk);
let chk_07 = document.getElementById("chk_07");
chk_07.addEventListener("click", fnReverseChk);

function fnReverseChk() {
    let chk_01 = document.getElementById("chk_01").checked;
    let chk_02 = document.getElementById("chk_02").checked;
    let chk_03 = document.getElementById("chk_03").checked;
    let chk_04 = document.getElementById("chk_04").checked;
    let chk_05 = document.getElementById("chk_05").checked;
    let chk_06 = document.getElementById("chk_06").checked;
    let chk_07 = document.getElementById("chk_07").checked;

    if (chk_01 && chk_02 && chk_03 && chk_04 && chk_05 && chk_06 && chk_07) {
        chkAll.checked = true;
    } else {
        chkAll.checked = false;
    }
}

//무료배송,할인 전체동의
let chk_all = document.getElementById("chk_04");
chk_04.addEventListener("click", fnNewsletter);

function fnNewsletter() {
    let chk_all = document.getElementById("chk_04").checked;
    let chk_05 = document.getElementById("chk_05");
    let chk_06 = document.getElementById("chk_06");

    chk_05.checked = chk_all;
    chk_06.checked = chk_all;
}

//무료배송, 할인 전체동의 해제

let chk_sms = document.getElementById("chk_05");
chk_sms.addEventListener("click", fnNewsletter_ignor)
let chk_email = document.getElementById("chk_06");
chk_email.addEventListener("click", fnNewsletter_ignor)

function fnNewsletter_ignor() {

    let chk_05 = document.getElementById("chk_05").checked;
    let chk_06 = document.getElementById("chk_06").checked;

    if (chk_05 && chk_06) {
        chk_all.checked = true;
    } else {
        chk_all.checked = false;
    }

}

