/* 

const btns = document.querySelectorAll(".question-btn");

btns.forEach(function(btn){


  
  btn.addEventListener("click", function(e){

    const question = e.currentTarget.parentElement.parentElement;
    console.log(question);
    question.classList.toggle("text")
   
 })

}) 

*/

const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");

  btn.addEventListener("click", function () {
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("text");
      }
    });
    question.classList.toggle("text");
  });
});
