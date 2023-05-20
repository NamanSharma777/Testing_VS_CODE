console.log("Hello World!!");
alert("Me");
document.write("This is document write");
console.warn("This is a warning");
console.error("This is an error");
var number = 47;
var number2 = 56;
console.log(number + number2);
var a = 33;
var b = 67;

var c = "This is a string";
console.log(a, b, c);
var marks = {
  ashish: 56,
  Naman: 44,
  Aryaman: 37,
};
console.log(marks);
var c1 = true;
var c2 = false;
console.log(c1, c2);
var und;
var und2 = null;
console.log(und);
console.log(und2);
var arr = [1, 2, 3, 4, 5];
console.log(arr);
function avg(n1, n2) {
  return (n1 + n2) / 2;
}
var d1 = avg(34, 56);
var d2 = avg(44, 21);
console.log(d1, d2);

let ar = [1, 2, 4, 6, 7];
ar.push(8);
ar.forEach(function (element) {
  console.log(element);
});
ar.pop();
ar.shift();
ar.forEach(function (element) {
  console.log(element);
});
const val = ar.unshift("Naman");
console.log(val);
console.log(ar);
let mydate = new Date();
console.log(mydate.getTime());
console.log(mydate.getFullYear());

//dom manipulation
let elem = document.getElementById("click");
console.log(elem);

let elemclass = document.getElementsByClassName("container");
console.log(elemclass);
elemclass[0].style.background = "Yellow";
console.log(elem.innerHTML);
console.log(elem.innerText);
console.log(elemclass[0].innerHTML);
console.log(elemclass[0].innerText);
let createdelement = document.createElement("b");
createdelement.innerText = "Hi my name is Naman";
let tn = document.getElementsByTagName("div");
tn[0].appendChild(createdelement);
let createdelement2 = document.createElement("p");
createdelement2.innerText = "tHIS IS a Paragraph";
tn[0].replaceChild(createdelement2, createdelement);

function clicked() {
  console.log("You clicked the button");
}
FirstContainer.addEventListener("click", function () {
  document.querySelectorAll(".container")[1].innerHTML =
    "<p>You have clicked</p>";
  console.log("click hua");
});

let logkaro = () => {
  console.log("I am your log");
};
//to set timeout;
setTimeout(logkaro, 2000);
//local storage
localStorage.setItem("Naman", "22");
console.log(localStorage.getItem("Naman"));
//backticks
numb = 21;
console.log("This is my ${numb}");
