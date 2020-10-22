
// 전체선택
let whole_Chk = document.querySelector("#whole_Chk");
let goods_01 = document.querySelector("#goods_01");
let goods_02 = document.querySelector("#goods_02");

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

whole_Chk.addEventListener("click", fnChk_Ctrl)
//선택해제했을 때 가격올라가지않게 조절
function fnChk_Ctrl() {
  if (whole_Chk.checked == false) {
    let total_price = document.querySelectorAll(".res_price");
    let delivery_fee = document.querySelector("#delivery_fee");
    for (let i = 0; i < total_price.length; i++) {
      parseInt(total_price.innerText);
      total_price[i].innerText = 0;
      delivery_fee.innerText = 0;
    }
  } else {
    product_total_price();
  }
}

//선택상품 연산
goods_01.addEventListener("click", fnGoods_Chk);
// goods_02.addEventListener("click", fnGoods_Chk);

function fnGoods_Chk() {
  let total_price = document.querySelectorAll(".res_price");
  let delivery_fee = document.querySelector("#delivery_fee");
  if (goods_01.checked == false) {
    for (let i = 0; i < total_price.length; i++) {
      total_price[i].innerText = 0;
      delivery_fee.innerText = 0;
    }
  } else {
    product_total_price();
  }
}

//상품 수량 조절
let decrease = document.querySelectorAll(".decrease");
let increase = document.querySelectorAll(".increase");

let goods_cnt = document.querySelectorAll(".goods_cnt");
let goodsPrice = document.querySelectorAll(".goodsPrice");
let default_price = document.querySelectorAll(".default_price");


//수량증가

for (let i = 0; i < increase.length; i++) {
  increase[i].addEventListener("click", fnIncrease)
  function fnIncrease() {
    if (whole_Chk.checked == true || goods_01.checked == true || goods_02.checked == true) {
      product_total_price();
    } else {
      return false;
    }
  }
}
//총 결제금액 연산 비활성화 (수량증가)
for (let i = 0; i < decrease.length; i++) {
  increase[i].addEventListener("click", fnGoods_only_Inc)
  function fnGoods_only_Inc() {
    if (goods_cnt[i].value < 10) {
      goods_cnt[i].value++;
      let sum = parseInt(default_price[i].innerText * goods_cnt[i].value);
      console.log(sum);
      goodsPrice[i].innerText = sum;
    } else {
      alert("최대 수량은 10개 입니다.");
      goods_cnt[i].value = 10;
    }
  }
}


//수량감소
for (let i = 0; i < decrease.length; i++) {
  decrease[i].addEventListener("click", fnDecrease)
  function fnDecrease() {
    if (whole_Chk.checked == true || goods_01.checked == true || goods_02.checked == true) {
      product_total_price();
    } else {
      return false;
    }
  }
}
//총 결제금액 연산 비활성화 (수량감소)
for (let i = 0; i < decrease.length; i++) {
  decrease[i].addEventListener("click", fnGoods_only_Dec)
  function fnGoods_only_Dec() {
    if (goods_cnt[i].value > 1) {
      goods_cnt[i].value--;

      //상품가격 동기화
      let sum = parseInt(goodsPrice[i].innerText - default_price[i].innerText);
      goodsPrice[i].innerText = sum;
    } else {
      alert("최소 수량은 1개입니다.");
      goods_cnt[i].value = 1;
    }
  }
}

product_total_price();
//선택된 상품금액 합계 , 결제예정금액
function product_total_price() {
  let total_price = document.querySelectorAll(".res_price");
  let delivery_fee = document.querySelector("#delivery_fee");
  let total_sum = 0;

  for (let i = 0; i < goodsPrice.length; i++) {
    total_sum += parseInt(goodsPrice[i].innerText);
    console.log(total_sum)
    total_price[0].innerText = total_sum;
    if (total_price[0].innerText >= 30000) {
      delivery_fee.innerText = 0;
    } else {
      delivery_fee.innerText = 3000;
    }
  }
  total_price_sum = parseInt(total_price[0].innerText) + parseInt(delivery_fee.innerText);
  total_price[1].innerText = total_price_sum.toLocaleString();
}


// * 천단위 구분 쉼표 적용 시작 *
// 판매가격 소스
var priceMoney = $("#price").text().trim();
$("#price").text(sepComma(priceMoney));

//개수 소스
var unitPriceMoney = $("#unitPrice_01").text().trim();
$("#unitPrice_01").text(sepComma(unitPriceMoney));

//총 상품 금액
var totalPrice = $("#totalPrice").text().trim();
// alert("totalPrice : " + totalPrice);
$("#totalPrice").text(sepComma(totalPrice));

// 천단위 구분 함수
function sepComma(inputMoney) {
  var pattern = /\B(?=(\d{3})+(?!\d))/g;
  var res = inputMoney.replace(pattern, ",");
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