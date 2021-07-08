const button = document.querySelector('.changebg');
const color = document.querySelector('.color');
const colors=['red', 'green', 'blue','tomato','yellow','#C0C0C0 ','#00FFFF','#008080','#C0C0C0'];
function clickfunc(){
 

}

button.addEventListener('click', function (){
 const colorIndex=Math.floor(Math.random()*colors.length);
  
  const bgcolor=colors[colorIndex];
  color.textContent=bgcolor;
  document.body.style.backgroundColor=bgcolor;
})




// const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
// const btn = document.getElementById("btn");
// const color = document.querySelector(".color");

// btn.addEventListener("click", function () {
//   const randomNumber = getRandomNumber();
//   //  console.log(randomNumber);

//   document.body.style.backgroundColor = colors[randomNumber];
//   color.textContent = colors[randomNumber];
//   myfunction();
// });

// function getRandomNumber() {
//   return Math.floor(Math.random() * colors.length);
// }
