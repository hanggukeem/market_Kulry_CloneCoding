

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
        loginFrm.action = "manager_member.html";
        loginFrm.submit();
    }
}

