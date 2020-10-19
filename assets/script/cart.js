
// 전체선택
let whole_Chk = document.querySelector("#whole_Chk");
let goods_01 = document.querySelector("#goods_01");
let goods_02 = document.querySelector("#goods_02");

goods_01.addEventListener("click", fnWhole_Chk_False);
goods_02.addEventListener("click", fnWhole_Chk_False);

let cnt = 0;
whole_Chk.addEventListener("click", function () {
  // let goods_cnt = document.querySelector(".goods_cnt");
  let whole_Chk_val = whole_Chk.checked;
  goods_01.checked = whole_Chk_val;
  goods_02.checked = whole_Chk_val;
  // if (whole_Chk_val == checked)
});

//상품별 선택 해제시, 전체선택 해제
function fnWhole_Chk_False() {
  0
  if (goods_01.checked && goods_02.checked) {
    whole_Chk.checked = true;
  } else {
    whole_Chk.checked = false;
  }
}


//상품 수량 조절
let decrease = document.querySelectorAll(".decrease");
let increase = document.querySelectorAll(".increase");
console.log(increase);

let goods_cnt = document.querySelectorAll(".goods_cnt");
let goodsPrice = document.querySelectorAll(".goodsPrice");
let default_price = document.querySelectorAll(".default_price");


//수량증가
for (let i = 0; i < increase.length; i++) {
  increase[i].addEventListener("click", function () {
    if (goods_cnt[i].value < 10) {
      goods_cnt[i].value++;

      //상품가격 동기화
      let sum = parseInt(default_price[i].innerText * goods_cnt[i].value);
      console.log(sum);
      goodsPrice[i].innerText = sum;
    } else {
      alert("최대 수량은 10개 입니다.");
      goods_cnt[i].value = 10;
    }
    product_total_price();
  })
};

//수량감소
for (let i = 0; i < decrease.length; i++) {
  decrease[i].addEventListener("click", function () {
    if (goods_cnt[i].value > 1) {
      goods_cnt[i].value--;

      //상품가격 동기화
      let sum = parseInt(goodsPrice[i].innerText - default_price[i].innerText);
      goodsPrice[i].innerText = sum;


    } else {
      alert("최소 수량은 1개입니다.");
      goods_cnt[i].value = 1;
    }
    product_total_price();
  })
}


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
product_total_price();








