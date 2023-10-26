var questions = [
{
    question:"HTML stands for",
    option1:"Hyper Text markup language",
    option2:"Hyper Link markup language",
    option3:"Hyper Text makeup language",
    correctAns:"Hyper Text markup language"
},
{
    question:"CSS stands for",
    option1:"Cascading Style sheet",
    option2:"Cascading Styling sheet",
    option3:"Cascading super sheet",
    correctAns:"Cascading Style sheet"
},{
    question:"In how many ways can CSS be written in?",
    option1:"1",
    option2:"2",
    option3:"3",
    correctAns:"3"
},{
    question:"Which tag gives your the largest heading in html",
    option1:"<h6>",
    option2:"<h2>",
    option3:"<h1>",
    correctAns:"<h1>"
},{
    question:"how many data types in js?",
    option1:"6",
    option2:"7",
    option3:"8",
    correctAns:"8"
}
,{
    question:"how many days in febuary",
    option1:"30",
    option2:"28",
    option3:"29",
    correctAns:"28"
}]


var para = document.getElementById("ques");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var button = document.getElementById("btn");
var timer = document.getElementById("timer")
var index = 0;
var score = 0;
var min = 1;
var sec = 59;



setInterval(function(){
    timer.innerHTML = `${min}:${sec}`;
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
},100)


function nextQuestion(){

    var getOptions = document.getElementsByName("options");

    for(var i = 0;i<getOptions.length;i++)
    {
        if(getOptions[i].checked){
            var selectedValue = getOptions[i].value;
            // console.log(selectedValue)
            var selectedQues = questions[index - 1]["question"];
            var selectedAns = questions[index-1][`option${selectedValue}`]
            var correctAns = questions[index - 1]["correctAns"]
            if(selectedAns == correctAns){
                score++
            }
        }
        getOptions[i].checked = false
    }

    button.disabled = true

    if(index >questions.length - 1){

        Swal.fire(
            'Good job!',
        `Your percentage is ${((score / questions.length)*100).toFixed(2)}`,
            'success'
          )
        // console.log("your percentage is " + ((score / questions.length)*100).toFixed(2))
    }
    else{

        
        para.innerHTML = questions[index].question;
        opt1.innerText = questions[index].option1;
        opt2.innerText = questions[index].option2;
        opt3.innerText = questions[index].option3;
        index++
    }
}

// nextQuestion()


function clicked()
{
    button.disabled = false
}