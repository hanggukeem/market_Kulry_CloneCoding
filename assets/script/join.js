//joinForm 유효성검사


//user id innerText
let uId = document.querySelector("#uId");
uId.addEventListener("focusin", validationChk_id, { once: true });

function validationChk_id() {
    let msg = document.createElement("li");
    msg.id = "createList_id"
    msg.innerHTML =
        "･ 6자 이상의 영문 혹은 영문과 숫자를 조합"
        + "<br>" + "･ 아이디 중복확인";
    document.querySelector("ul#idMsg").appendChild(msg);
}

//Id 유효성 검사
uId.addEventListener("keyup", fnChk_Id)

function fnChk_Id() {
    let uId_val = document.getElementById("uId").value;
    uId_val = uId_val.trim();
    let uIdChk = /[^a-z|A-Z|0-9]/;
    let msg_id = document.getElementById("createList_id");

    if (uId_val == "") {
        msg_id.innerHTML = "･ 6자 이상의 영문 혹은 영문과 숫자를 조합"
            + "<br>" + "･ 아이디 중복확인";
        msg_id.style.color = "#333333"
        uId.focus();
    } else if (uIdChk.test(uId_val) || uId_val.length < 6) {
        msg_id.innerHTML = "X 6자 이상의 영문 혹은 영문과 숫자를 조합." + "<br>"
            + "<span>･ 아이디 중복확인</span>";
        msg_id.style.color = "#b3130b"
    } else if (uId_val.length > 6) {
        msg_id.innerHTML = "✓ 6자 이상의 영문 혹은 영문과 숫자를 조합" + "<br>"
            + "<span>･ 아이디 중복확인</span>";
        msg_id.style.color = "#0f851a"
    }
    return true;
}

//id 중복확인
let idChk = document.querySelector("#idChk");
idChk.addEventListener("click", fnIdOverlapChk);

function fnIdOverlapChk() {
    let uId_val = document.getElementById("uId").value;
    uId_val = uId_val.trim();
    let uIdChk = /[^a-z|A-Z|0-9]/;
    let msg_id = document.getElementById("createList_id");
    if (uId_val == "") {
        alert("아이디를 입력해주세요.");
        uId_val.focus();
    } else if (uIdChk.test(uId_val) || uId_val.length < 6) {
        alert("아이디는 6자 이상의 영문 혹은 영문과 숫자 조합만 가능합니다.")
    } else {
        alert("사용가능한 아이디입니다.")
        msg_id.innerHTML = "✓ 6자 이상의 영문 혹은 영문과 숫자를 조합" + "<br>"
            + "✓ 아이디 중복확인";
        msg_id.style.color = "#0f851a"
    }
    chkFlag1 = true;
    return true;
}

//user password innerText
let uPw = document.querySelector("#uPw");
uPw.addEventListener("focusin", validationChk_Pw, { once: true });

function validationChk_Pw() {
    let msg = document.createElement("li");
    let inputMsg = document.getElementById("pwMsg");
    msg.id = "createList_pw";
    msg.innerHTML =
        "･ 10자 이상 입력"
        + "<br>" + "･ 영문/숫자/특수문자(공백 제외)만 허용하며, 2개 이상 조합";
    inputMsg.appendChild(msg);
}
//password 유효성 검사
uPw.addEventListener("keyup", fnChk_Pw01);

function fnChk_Pw01() {
    let msg_pw = document.getElementById("createList_pw");
    let pwReg = /[^a-z|A-Z|0-9|~!@#$%^&*()_+|<>?:{}]/;
    let checkNumber = uPw.value.search(/[0-9]/g);
    let checkEnglish = uPw.value.search(/[a-z]/ig);

    if ((checkNumber < 0 || checkEnglish < 0) && pwReg.test(uPw) && (uPw.value.length <= 10)) {
        msg_pw.innerHTML = " X 10자 이상 입력</span>"
            + "<br>" + "X 영문/숫자/특수문자(공백 제외)만 허용하며, 2개 이상 조합";
        msg_pw.style.color = "#b3130b";

    } else if ((checkNumber > 0 || checkEnglish > 0)) {
        msg_pw.innerHTML = " X 10자 이상 입력</span>"
            + "<br>" + " <span id='color'>✓ 영문/숫자/특수문자(공백 제외)만 허용하며, 2개 이상 조합</span>";
        msg_pw.style.color = "#b3130b";
        document.getElementById("color").style.color = "#0f851a";
        if (uPw.value.length >= 10) {
            msg_pw.innerHTML = "✓ 10자 이상 입력"
                + "<br>" + "✓ 영문/숫자/특수문자(공백 제외)만 허용하며, 2개 이상 조합";
            msg_pw.style.color = "#0f851a";
        }
    }
    return true;
}


//user passwordCheck innerText
let uPwChk = document.querySelector("#uPwChk");
uPwChk.addEventListener("focusin", validationChk_PwChk, { once: true });
function validationChk_PwChk() {
    let msg = document.createElement("li");
    msg.id = "createList_pwChk";
    msg.innerHTML =
        "･ 동일한 비밀번호를 입력해주세요.";
    document.querySelector("ul#pwChkMsg").appendChild(msg);
}

//비밀번호 + 비밀번호 확인의 비밀번호가 일치하는지 검사
uPwChk.addEventListener("keyup", fnChk_Pw02)
function fnChk_Pw02() {
    let msg_pwChk = document.getElementById("createList_pwChk");
    if (uPw.value == "") {
        msg_pwChk.innerHTML = "･ 동일한 비밀번호를 입력해주세요."
        uPw.focus();
    } else if (uPw.value == uPwChk.value) {
        msg_pwChk.innerHTML = "✓동일한 비밀번호를 입력해주세요.";
        msg_pwChk.style.color = "#0f851a"
    } else {
        msg_pwChk.innerHTML = " X 동일한 비밀번호를 입력해주세요.";
        msg_pwChk.style.color = "#b3130b"
    }
    return true;
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
        emailChk_val.focus();
    }
    else if (atSignIdx < 0 || atSignIdx < 1 || dotSignIdx < 0 || atSignIdx > dotSignIdx) {
        alert("잘못된 이메일 형식입니다.")
    } else {
        alert("사용이 가능합니다.")
    }
    chkFlag2 = true;
}

//휴대폰번호 숫자만 입력가능
let uNum = document.querySelector("#uNum");
uNum.addEventListener("keypress", fnNumChk)
let uNum_chk = /[^0-9]/;

function fnNumChk(event) {
    if ((event.keyCode < 48) || (event.keyCode > 57))
        event.returnValue = false;
}


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
    }
    return true;
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
let chkFlag1 = false;
let chkFlag2 = false;


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

    let require_agree1 = document.getElementById("chk_01").checked;
    let require_agree2 = document.getElementById("chk_02").checked;
    let require_agree3 = document.getElementById("chk_07").checked;

    // 유효성검사
    if (uId == "") {
        alert("아이디를 입력해주세요.")
        document.getElementById("uId").focus();
        fnChk_Id();
    } else if (chkFlag1 == false) {
        alert("아이디 중복확인을 확인해 주세요.")
        document.getElementById("uId").focus();
    } else if (uPw == "") {
        alert("비밀번호를 입력해주세요.")
        fnChk_Pw01();
        document.getElementById("uPw").focus();
    } else if (uPwChk == "") {
        alert("비밀번호를 한번 더 입력해주세요.")
        document.getElementById("uPwChk").focus();
    } else if (uName == "") {
        alert("이름을 입력해주세요.");
        document.getElementById("uName").focus();
    } else if (uEmail == "") {
        alert("이메일을 입력해주세요.")
        document.getElementById("uEmail").focus();
    } else if (chkFlag2 == false) {
        alert("이메일 중복확인을 확인해 주세요.")
        document.getElementById("uEmail").focus();
    } else if (uNum == "") {
        alert("휴대폰 인증을 완료 해주세요.")
        document.getElementById("uNum").focus();
    } else if (!require_agree1 || !require_agree2 || !require_agree3) {
        alert("필수항목을 체크해주세요.")
    } else {
        joinFrm.action = "../index.html";
        joinFrm.submit();
    }
}
