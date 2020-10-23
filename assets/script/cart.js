
// 전체선택
let whole_Chk = document.querySelector("#whole_Chk");
let goods_01 = document.querySelector("#goods_01");
let goods_02 = document.querySelector("#goods_02");
let selectChk = document.querySelectorAll(".selectChk");

goods_01.addEventListener("click", fnWhole_Chk_False);
goods_02.addEventListener("click", fnWhole_Chk_False);

let cnt = 0;
whole_Chk.addEventListener("click", fnWhole_Chk)

function fnWhole_Chk() {
  // let total_goods = document.querySelector(".total_goods");
  let whole_Chk_val = whole_Chk.checked;
  goods_01.checked = whole_Chk_val;
  goods_02.checked = whole_Chk_val;
};

//상품별 선택 해제시, 전체선택 해제
function fnWhole_Chk_False() {
  if (goods_01.checked && goods_02.checked) {
    whole_Chk.checked = true;
  } else {
    whole_Chk.checked = false;
  }
}

//상품 수량 조절 시작
let decrease = document.querySelectorAll(".decrease");
let increase = document.querySelectorAll(".increase");
let goods_cnt = document.querySelectorAll(".goods_cnt");
let goodsPrice = document.querySelectorAll(".goodsPrice");
let default_price = document.querySelectorAll(".default_price");

//수량증가

for (let i = 0; i < increase.length; i++) {
  default_price[0].innerText = sepComma(default_price[0].innerText);
  default_price[1].innerText = sepComma(default_price[1].innerText);
  goodsPrice[0].innerText = sepComma(goodsPrice[0].innerText);
  goodsPrice[1].innerText = sepComma(goodsPrice[1].innerText);

  increase[i].addEventListener("click", fnIncrease)
  function fnIncrease() {
    if (goods_cnt[i].value < 10) {
      goods_cnt[i].value++;
      default_price[0].innerText = removeComma(default_price[0].innerText);
      default_price[1].innerText = removeComma(default_price[1].innerText);
      goodsPrice[0].innerText = removeComma(goodsPrice[0].innerText);
      goodsPrice[1].innerText = removeComma(goodsPrice[1].innerText);

      let sum = parseInt(default_price[i].innerText * goods_cnt[i].value)
      goodsPrice[i].innerText = sum;
      default_price[0].innerText = sepComma(default_price[0].innerText);
      default_price[1].innerText = sepComma(default_price[1].innerText);

    } else {
      alert("최대 수량은 10개 입니다.");
      goods_cnt[i].value = 10;
    }

    if (selectChk[i].checked == false) {
      if (fnIncrease) {
        selectChk[i].checked = true;
        whole_Chk.checked = true;
      }
    }

    product_total_price();

  }
}

//수량감소
for (let i = 0; i < decrease.length; i++) {
  decrease[i].addEventListener("click", fnDecrease)
  function fnDecrease() {
    default_price[0].innerText = removeComma(default_price[0].innerText);
    default_price[1].innerText = removeComma(default_price[1].innerText);
    goodsPrice[0].innerText = removeComma(goodsPrice[0].innerText);
    goodsPrice[1].innerText = removeComma(goodsPrice[1].innerText);
    if (goods_cnt[i].value > 1) {
      goods_cnt[i].value--;

      //상품가격 동기화
      let sum = parseInt(goodsPrice[i].innerText - default_price[i].innerText);
      goodsPrice[i].innerText = sum;
      default_price[0].innerText = sepComma(default_price[0].innerText);
      default_price[1].innerText = sepComma(default_price[1].innerText);
    } else {
      alert("최소 수량은 1개입니다.");
      goods_cnt[i].value = 1;
    }

    if (selectChk[i].checked == false) {
      if (fnDecrease) {
        selectChk[i].checked = true;
        whole_Chk.checked = true;
      }
    }
    goodsPrice[0].innerText = sepComma(goodsPrice[0].innerText);
    goodsPrice[1].innerText = sepComma(goodsPrice[1].innerText);

    product_total_price();
  }
}

product_total_price();
//선택된 상품금액 합계 , 결제예정금액
function product_total_price() {
  let total_price = document.querySelectorAll(".res_price");
  let delivery_fee = document.querySelector("#delivery_fee");
  let total_sum = 0;

  for (let i = 0; i < goodsPrice.length; i++) {
    goodsPrice[0].innerText = removeComma(goodsPrice[0].innerText);
    goodsPrice[1].innerText = removeComma(goodsPrice[1].innerText);
    total_sum += parseInt(goodsPrice[i].innerText);
    total_price[0].innerText = total_sum;
    if (total_price[1].innerText >= 30000) {
      delivery_fee.innerText = 0;
    } else {
      delivery_fee.innerText = 3000;
    }
  }
  total_price[0].innerText = removeComma(total_price[0].innerText);
  total_price[1].innerText = removeComma(total_price[1].innerText);
  delivery_fee.innerText = removeComma(delivery_fee.innerText);

  let total_price_sum = parseInt(total_price[0].innerText) + parseInt(delivery_fee.innerText);

  total_price_sum = sepComma(total_price_sum.toString());
  total_price[1].innerText = total_price_sum;
  total_price[0].innerText = sepComma(total_price[0].innerText);
  total_price[1].innerText = sepComma(total_price[1].innerText);
  delivery_fee.innerText = sepComma(delivery_fee.innerText);

  goodsPrice[0].innerText = sepComma(goodsPrice[0].innerText);
  goodsPrice[1].innerText = sepComma(goodsPrice[1].innerText);
}

// 전체선택 해제, 금액 초기화
whole_Chk.addEventListener("change", function () {
  let total_price = document.querySelectorAll(".res_price");

  if (whole_Chk.checked == true) {
    product_total_price();
  } else {
    total_price[i].innerText = 0;
  }
});
selectChk[i].checked = true;

// 체크박스 선택에따른 가격 변동
priceChk();
function priceChk() {
  let total_price = document.querySelectorAll(".res_price");

  for (let i = 0; i < selectChk.length; i++) {
    selectChk[i].addEventListener("change", function () {
      let delivery_fee = 3000;
      total_price[0].innerText = 0;
      total_price[1].innerText = 0;

      if (selectChk[0].checked == false && selectChk[1].checked == false) {
        return;
      }
      else if (selectChk[0].checked == false) {
        total_price[0].innerText = goodsPrice[1].innerText;
        goodsPrice[1].innerText = removeComma(goodsPrice[1].innerText)
        total_price[1].innerText = parseInt(goodsPrice[1].innerText) + delivery_fee;
        total_price[1].innerText = sepComma(total_price[1].innerText);
        goodsPrice[1].innerText = sepComma(goodsPrice[1].innerText);
      }
      else if (selectChk[1].checked == false) {
        total_price[0].innerText = goodsPrice[0].innerText;
        goodsPrice[0].innerText = removeComma(goodsPrice[0].innerText);
        total_price[0].innerText = parseInt(goodsPrice[0].innerText) + delivery_fee;
        total_price[0].innerText = sepComma(total_price[0].innerText);
        goodsPrice[0].innerText = sepComma(goodsPrice[0].innerText);
      } else if (selectChk[0].checked && selectChk[1].checked) {
        goodsPrice[0].innerText = removeComma(goodsPrice[0].innerText);
        goodsPrice[1].innerText = removeComma(goodsPrice[1].innerText);
        total_price[0].innerText = parseInt(goodsPrice[0].innerText) + parseInt(goodsPrice[1].innerText);
        total_price[1].innerText = parseInt(goodsPrice[0].innerText) + parseInt(goodsPrice[1].innerText) + delivery_fee;
        total_price[0].innerText = sepComma(total_price[0].innerText);
        total_price[1].innerText = sepComma(total_price[1].innerText);
        goodsPrice[0].innerText = sepComma(goodsPrice[0].innerText);
        goodsPrice[1].innerText = sepComma(goodsPrice[1].innerText);
      }
    })
  }
}

// * 천단위 구분 쉼표 적용 시작 *
// 천단위 구분 함수
function sepComma(inputPrice) {
  var pattern = /\B(?=(\d{3})+(?!\d))/g;
  var res = inputPrice.replace(pattern, ",");
  return res;
}

//천단위 구분 쉼표 제거 
function removeComma(restore) {
  if (restore.search(',')) {
    arrComma = restore.split(',');
    for (i = 0; ; i++) {
      if (!arrComma[i]) break;

      if (i == 0) {
        restore = arrComma[i];
      } else {
        restore = restore + arrComma[i];
      }
    }
  }
  return restore;
}