//Timer
var time=30;
var intervalId;

$("#start").on("click",function(){
    start()
    $("#start").remove();
    $("#timer").css("display","block")
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
        },

    ]

    $(quizQuestions).each(function(i,e) {
        $("#questions").append('<p>'+ e.question + '</p><label class= "radio-inline "answer="' + e.correctAnswer + '"><input type="radio" name="optradio">'+ e.answers[i] + '</label>')
    }

    )



