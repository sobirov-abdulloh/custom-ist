"use strict";
let ismInput = document.getElementById("ismInput"),
  emailInput = document.getElementById("emailInput"),
  parolInput = document.getElementById("pasword"),
  submitBtn = document.getElementById("btnSubmit"),
  closeBtn = document.querySelector("#closeBtn"),
  ismText = document.querySelector(".ismText"),
  infoContainer = document.querySelector(".info"),
  emailText = document.querySelector(".emailText");
let eyesOn = document.querySelector("#eyesOn");
let eyesOff = document.querySelector("#eyesOff");
let ol = document.querySelector("ol");

function Submit(event) {
  event.preventDefault();
  console.log("hhh");
  if (ismInput.value === "") {
    alert("ADD NAME");
  } else if (emailInput.value === "") {
    alert("ADD EMAIL");
  } else if (parolInput.value === "") {
    alert("ADD PASSWORD");
  } else if (parolInput.value.length < 6) {
    alert("password must contain 6 letters");
  } else {
    let li = document.createElement("li");
    li.style.color = "black";
    li.textContent = ` ${ismInput.value} -${emailInput.value}`;
    ol.appendChild(li);
    ismInput.value = "";
    emailInput.value = "";
    parolInput.value = "";
  }
}
submitBtn.onclick = Submit;
closeBtn.onclick = function () {
  infoContainer.style.top = "-130px";
};
eyesOn.addEventListener("click", function () {
  parolInput.type = "text";
  eyesOn.style.display = "none";
  eyesOff.style.display = "block";
});
eyesOff.addEventListener("click", function () {
  eyesOn.style.display = "block";
  eyesOff.style.display = "none";
  parolInput.type = "password";
});
