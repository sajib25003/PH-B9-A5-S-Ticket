const allBtn = document.getElementsByClassName("btn-seat");
let count = 0;

let count2 = getInnerTextValue("rem-seat");
for (const btn of allBtn) {
  btn.addEventListener("click", function (e) {
    // validation of max 4 tickets
    if (count >= 4){
        return alert("You can buy only 4 tickets.");
    }
    count = count + 1;
    setInnerText("cart-count", count);
    count2 = count2 - 1;
    setInnerText("rem-seat", count2);
    // append the seat number on right cart
    const seatNumber = e.target.innerText;
    console.log(seatNumber);
    const selectedContainer = document.getElementById("cart-container");
    const li = document.createElement("li");
    const seatName = document.createElement("p");
    seatName.innerText = seatNumber;
    const seatClass = document.createElement("p");
    seatClass.innerText = "Economy";
    const seatPrice = document.createElement("p");
    seatPrice.innerText = "550";
    li.appendChild(seatName);
    li.appendChild(seatClass);
    li.appendChild(seatPrice);
    selectedContainer.appendChild(li);
    selectedContainer.appendChild(document.createElement("br"));
    // adding background color on the selected button
    e.target.style.backgroundColor = "#1DD100";

    //total price update
    totalCost("total-cost", parseInt(seatPrice));
    // grand total update
    totalCost("grand-total", parseInt(seatPrice));
    // disable button after selection
    e.target.disabled = true;
  });
}

// coupon activation
function activateCoupon(){
    const couponInput = document.getElementById('coupon-input');
    const couponText = document.getElementById('coupon-text');
    const coupon = couponText.value;
    const costTotal = document.getElementById('total-cost').innerText;
    let costTotalValue = parseInt(costTotal);
    const grandTotal = document.getElementById('grand-total').innerText;
    let grandTotalValue = parseInt(grandTotal);
    console.log(grandTotalValue);

    if (coupon === "NEW15"){
        const discount = costTotalValue * 15 / 100;
        grandTotalValue = costTotalValue - discount;
        setInnerText('grand-total', grandTotalValue);
        couponInput.classList.add('hidden');
        return;
    }
    else if (coupon === "Couple 20"){
        const discount = costTotalValue * 20 / 100;
        grandTotalValue = costTotalValue - discount;
        setInnerText('grand-total', grandTotalValue);
        return;
    }
    else{
        grandTotalValue = costTotalValue;
        setInnerText('grand-total', grandTotalValue);
        return;
    }
}

// total & grand total
function totalCost(id) {
  const totalCost = getInnerTextValue(id);
  const sum = totalCost + 550;
  setInnerText(id, sum);
}

function getInnerTextValue(id) {
  const element = document.getElementById(id);
  const elementText = element.innerText;
  const elementvalue = parseInt(elementText);
  return elementvalue;
}

function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}

// modal close
function closeModal() {
    const modal = document.getElementById("my_modal_2");
    modal.close();
}
