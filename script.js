
// Nav bar

const bar = document.querySelector("#bar");
const Close = document.querySelector("#Close");
const nav = document.querySelector("#navbar");

 bar.addEventListener("click", function () {
  navbar.style.right = "0px";
});

Close.addEventListener("click", function () {
  navbar.style.right = "-300px";
});


// hex color
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btns = document.querySelectorAll(".btn");

  btns.forEach(function (btn){
 
  btn.addEventListener("mouseover", function (e) {
   
    let hexColor = "#";
    
      for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];

      }
      btn.style.backgroundColor = hexColor;
  
    });
    
    function getRandomNumber() {
    
      return Math.floor(Math.random() * hex.length);
    }
    
  })


  


