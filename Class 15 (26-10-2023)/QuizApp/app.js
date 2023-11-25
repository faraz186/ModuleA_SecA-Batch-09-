var questions = [
{   question: "HTML Stands for",
    option1: "Hyper Text Markup Language",
    option2: "Hyper Tech Markup Language",
    option3: "Hyper Touch Markup Language",
    corrAnswer: "Hyper Text Markup Language",},
{   question: "CSS Stands for",
    option1: "Cascoding Style Sheets",
    option2: "Cascading Style Sheets",
    option3: "Cascating Style Sheets",
    corrAnswer: "Cascading Style Sheets",},
{   question: "Which tag is used for most large heading",
    option1: "<h6>",
    option2: "<h2>",
    option3: "<h1>",
    corrAnswer: "<h1>",},
{   question: "Which tag is used to make element unique ",
    option1: "id",
    option2: "class  ",
    option3: "label",
    corrAnswer: "id",},
{   question: "Any element assigned with id, can be get in css ",
    option1: "by # tag",
    option2: "by @ tag",
    option3: "by & tag",
    corrAnswer: "by # tag",},
{   question: "CSS can be used with ______ methods ",
    option1: "8",
    option2: "3",
    option3: "4",
    corrAnswer: "3",},
{   question: "In JS variable types are ____________ ",
    option1: "6",
    option2: "3",
    option3: "8",
    corrAnswer: "8",},
{   question: "In array we can use key name and value ",
    option1: "True",
    option2: "False",
    option3: "None of above",
    corrAnswer: "False",},
{   question: "toFixed() is used to define length of decimal ",
    option1: "True",
    option2: "False",
    option3: "None of above",
    corrAnswer: "True",},
{   question: "push() method is used to add element in the start of array ",
    option1: "True",
    option2: "False",
    option3: "None of above",
    corrAnswer: "False", },
];

var question = document.getElementById("ques");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var button = document.getElementById("btn1");
var getOptions = document.getElementsByName("options");
var timer = document.getElementById("timer");
var quesLength = document.getElementById("ques1")
var arrLength = questions.length;

var nextQuiz = 0;
var score = 0;
var sec = 59;
var min = 1;

setInterval(function(){
    timer.innerHTML = `Timelaps ${min}:${sec}`;
    sec--
    if(sec<0){
        min--;
        sec = 59    
    }
    if(min<0){
        min= 1;
        sec = 59;
        nextQuestion()
    }
},1000)

function clicked() {
    button.disabled = false;
};

function nextQuestion() {

        for (var i=0; i<getOptions.length; i++) {

            if (getOptions[i].checked) { 

                 var secValue = getOptions[i].value;
                 var secAnswer = questions[nextQuiz-1][`option${secValue}`];
                 var corrAnswer = questions[nextQuiz-1].corrAnswer;
           
                if (corrAnswer == secAnswer ) {
                    score++
                }
            }

            getOptions[i].checked = false;
        }

    if (nextQuiz > arrLength-1) { 

         button.disabled = true;
         clearInterval();

        if (score >= 7) {
            Swal.fire(
                'Very Good job!',
            `Your percentage is ${((score / questions.length)*100).toFixed(2)}`,
                'success')             
        } else if (score >= 5 && score < 7 ) {
            Swal.fire(
                'Good job!',
            `Your percentage is ${((score / questions.length)*100).toFixed(2)}`,
                'success') 
            } else if (score < 5) {
                Swal.fire(
                    'Sorry!',
                `Your percentage is ${((score / questions.length)*100).toFixed(2)}`,
                    'warning')
            }       
        } 

        else {

 
            quesLength.innerHTML = `Question: ${nextQuiz+1} / ${arrLength}`;

            question.innerHTML = questions[nextQuiz].question;
            opt1.innerText = questions[nextQuiz].option1;
            opt2.innerText = questions[nextQuiz].option2;
            opt3.innerText = questions[nextQuiz].option3;

            button.disabled = true;

            timer.innerHTML = `2:00`

            min = 1;
            sec = 59;

            nextQuiz++;
};
};
