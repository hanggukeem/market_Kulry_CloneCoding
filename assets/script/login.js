

//로그인 유효성 검사
let loginBtn = document.querySelector("#loginBtn");
loginBtn.addEventListener("click", fnLogin);

function fnLogin() {
    let loginFrm = document.getElementById("loginFrm");
    let userId = document.getElementById("userId").value;
    let userPw = document.getElementById("userPw").value;
    userId = userId.trim();
    userPw = userPw.trim();

    if (userId == "" || userPw == "") {
        alert("아이디와 비밀번호를 입력해주세요")
    } else {
        loginFrm.action = "../index.html";
        loginFrm.submit();
    }
}

//회원가입페이지 이동

let joinBtn = document.getElementById("joinBtn");
joinBtn.addEventListener("click", fnJoin);

function fnJoin() {
    let joinFrm = document.getElementById("loginFrm");

    joinFrm.action = "join.html";
    joinFrm.submit();
}
