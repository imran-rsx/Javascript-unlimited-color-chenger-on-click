const hex =[1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const btn =document.querySelector('.changebg');
const color = document.querySelector(".color");


btn.addEventListener("click", function (){
  let hexcolor='#';
  for(i=0; i<100000;i++) {
  hexcolor=hexcolor+hex[randomNumber()];
  }
  console.log(hexcolor);
  console.log(randomNumber());
  color.textContent=hexcolor;
  document.body.style.backgroundColor=hexcolor;
})

function randomNumber(){
  return Math.floor(Math.random()*hex.length);
}
// const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// const btn = document.getElementById("btn");
// const color = document.querySelector(".color");
// console.log(hex[60]);

// btn.addEventListener("click", function () {
//   let hexColor = "#";
//   for (let i = 0; i < 6; i++) {
//     // hexColor += hex[getRandomNumber()]; you can use both of method 
// // # +()
//     hexColor=hexColor+hex[getRandomNumber()];
//   }
 
 
//   color.textContent = hexColor;
//   document.body.style.backgroundColor = hexColor;
//   // console.log(Math.floor(Math.random() * hex.length));
// });

// function getRandomNumber() {
//   return Math.floor(Math.random() * hex.length);
  
// }