//joinForm 유효성검사


//user id innerText
let uId = document.querySelector("#uId");
uId.addEventListener("focusin", validationChk_id, { once: true });
function validationChk_id() {
    let msg = document.createElement("li");
    msg.innerHTML =
        "･ 6자 이상의 영문 혹은 영문과 숫자를 조합"
        + "<br>" + "･ 아이디 중복확인";
    document.querySelector("ul#idMsg").appendChild(msg);
}

//id 중복확인
let idChk = document.querySelector("#idChk");
idChk.addEventListener("click", fnIdChk);
function fnIdChk() {
    let uId_val = document.getElementById("uId").value;
    uId_val = uId_val.trim();
    let uIdChk = /[^a-z|A-Z|0-9|_$]/;
    if (uId_val == "") {
        alert("아이디를 입력해주세요.");
    } else if (uIdChk.test(uId_val) || uId_val.length < 6) {
        alert("아이디는 6자 이상의 영문 혹은 영문과 숫자 조합만 가능합니다.")
    } else {
        alert("사용가능한 아이디입니다.")
    }
    chkFlag = true;
}

//user password innerText
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

//비밀번호 + 비밀번호 확인의 비밀번호가 일치하는지 검사
uPwChk.addEventListener("blur", fnChk_Pw)
function fnChk_Pw() {
    if (uPw.value != uPwChk.value) {
        let msg = document.createElement("li");
        msg.style.color = "#b3130b"
        msg.innerHTML =
            "X 동일한 비밀번호를 입력해주세요..";
        document.querySelector("ul#pwChkMsg").appendChild(msg);
    }
}

//이메일 중복확인
let emailChk = document.querySelector("#emailChk");
emailChk.addEventListener("click", fnEmailChk);
function fnEmailChk() {
    let emailChk_val = document.getElementById("uEmail").value;
    emailChk_val = emailChk_val.trim();

    var atSignIdx = emailChk_val.indexOf("@"); // at sign
    var dotSignIdx = emailChk_val.indexOf("."); //dot sign

    if (emailChk_val == "") {
        alert("이메일을 입력해주세요.")
    }
    else if (atSignIdx < 0 || atSignIdx < 1 || dotSignIdx < 0 || atSignIdx > dotSignIdx) {
        alert("잘못된 이메일 형식입니다.")
    } else {
        alert("사용이 가능합니다.")
    }
}

//휴대폰번호 숫자만 입력가능
let uNum = document.querySelector("#uNum");
let uNum_chk = /[^0-9]/;
if (uNum)


    //생년월일
    let ubirth_year = document.querySelector("#ubirth_year");
ubirth_year.addEventListener("blur", fnBirthChk);
let ubirth_month = document.querySelector("#ubirth_month");
ubirth_month.addEventListener("blur", fnBirthChk);
let ubirth_date = document.querySelector("#ubirth_date");
ubirth_date.addEventListener("blur", fnBirthChk);

function fnBirthChk() {
    let birthChk = document.getElementById("birthChk");
    let ubirth_year = document.getElementById("ubirth_year").value;
    let ubirth_month = document.getElementById("ubirth_month").value;
    let ubirth_date = document.getElementById("ubirth_date").value;

    if (ubirth_year === "") {
        birthChk.style.display = "block";
        birthChk.innerText = "태어난 년도 4자리를 정확하게 입력해주세요.";
    } else if (ubirth_month === "월") {
        birthChk.style.display = "block";
        birthChk.innerText = "태어난 월을 정확하게 입력해주세요.";
    } else if (ubirth_year <= 1920) {
        ubirth_year = parseInt(ubirth_year);
        birthChk.innerText = "생년월일을 다시 확인해주세요.";
    } else if (ubirth_date == "" || ubirth_date >= 31) {
        ubirth_date = parseInt(ubirth_date);
        birthChk.style.display = "block";
        birthChk.innerText = "태어난 일을 정확하게 입력해주세요.";
    } else if (ubirth_month !== "월") {
        birthChk.style.display = "none";
        return true;
    }
}

//추가입력 사항
let sponId = document.getElementById("sponId");
sponId.addEventListener("click", fnAddInput)

function fnAddInput() {
    $("div#add_input").css("display", "block");
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
    if (chk_all == false) {
        chkAll.checked = false;
    } else {
        chkAll.checked = true;
    }

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



//joinBtn
let joinBtn = document.querySelector("#joinBtn");
joinBtn.addEventListener("click", fnJoin);
let chkFlag = false;

function fnJoin() {
    let uId = document.getElementById("uId").value;
    uId = uId.trim();
    let uPw = document.getElementById("uPw").value;
    uPw = uPw.trim();
    let uPwChk = document.getElementById("uPwChk").value;
    uPwChk = uPwChk.trim();
    let uName = document.getElementById("uName").value;

    uName = uName.trim();

    let uEmail = document.getElementById("uEmail").value;
    uEmail = uEmail.trim();
    let uNum = document.getElementById("uNum").value;
    uNum = uNum.trim();

    // 유효성검사
    if (uId == "") {
        alert("아이디를 입력해주세요.")
        document.getElementById("uId").focus();
    } else if (chkFlag == false) {
        alert("아이디 중복확인을 확인해 주세요")
        document.getElementById("uId").focus();
    } else if (uPw == "") {
        alert("비밀번호를 입력해주세요.")
        document.getElementById("uPw").focus();
    } else if (uPwChk == "") {
        alert("비밀번호를 한번 더 입력해주세요.")
        document.getElementById("uPwChk").focus();
    } else if (uName == "") {
        alert("이름을 입력해주세요.");
        document.getElementById("uName").focus();
    }
} else if (uEmail == "") {
    alert("이메일을 입력해주세요.")
    document.getElementById("uEmail").focus();
} else if (uNum == "") {
    alert("휴대폰 인증을 완료 해주세요.")
    document.getElementById("uNum").focus();
}
}
