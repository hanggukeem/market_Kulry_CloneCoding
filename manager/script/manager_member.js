//검색어 option
let search_list = ["이름", "아이디", "이메일", "전화번호", "휴대폰번호"];
let serch_option = "";
for (let i = 0; i < search_list.length; i++) {
    serch_option += `<option value="${search_list[i]}">${search_list[i]}</option>`
}

let searchSelect = document.querySelector("#searchSelect");
searchSelect.innerHTML = serch_option;