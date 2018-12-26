//Timer
var time=30;
var intervalId;
var score=0;

$("#start").on("click",function(){
    start()
    $("#start").remove();
    $("#timer").css("display","block")
    $("#submit").css("display","block")
    $('#questions').css("display","block")
    $('#countDown').html("Time Remaining: "+time+" Seconds")   
})  
 
function start () {
    intervalId=setInterval(decrement,1000)
}
function decrement() {
    time--;
    $('#countDown').html("Time Remaining: "+time+" Seconds")
    if (time === 0) {
        // alert("Make the game do something else")
        clearInterval(intervalId)
    }
}
//Questions
var quizSection =document.getElementById('questions');


var quizQuestions = [
    {
        question: "Which one of these is NOT a Startcraft Race?",
        answers: [
            "Zerg",
            "Protoss",
            "Xel-Naga",
            "Terran"
        ],
        correctAnswer:2
    },
        {
            question: "Who is the main Protagonist?",
            answers: [
                "Sarah Kerrigan",
                "Jim Raynor",
                "Matt Horner",
                "Murlocs"
            ],
            correctAnswer:1
        }
 
    ]
    var questionNumber;

    $(quizQuestions).each(function(i,e) {
        questionNumber=i;
          $("#questions").append('<p id = "question ' + i+ '"answer =' + e.correctAnswer + '>'+ e.question + '</p>')
        console.log(e)
        for (i=0;i<4;i++){
                        
            console.log("for loop "+e.answers[i])
            $("#questions").append('<label class ="radio-inline"><input type= "radio" name="optradio ' + questionNumber + '" value ="'+ i+ '">'+  e.answers[i]+ '</label>')
       }
    }

    )

$("#submit").click(function(){
    for (var i = 0;i<quizQuestions.length;i++){
    if(($("input[name='optradio " + i + "']:checked").val()) == quizQuestions[i].correctAnswer) {
        score++
    }

}
$("#timer").css("display","none")
$("#submit").css("display","none")
$('#questions').html("you got " + score)

}); 


// Getting Results
// var rates = document.getElementsByName('rate');
// var rate_value;
// for(var i = 0; i < rates.length; i++){
//     if(rates[i].checked){
//         rate_value = rates[i].value;
//     }
// }
