
var questioncurr = 0;
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var seconds = 15;
var time = 0;
var answered = false;
var userguess = "";



$("#startgame").on("click", function () {
    $("#game").toggle();
    $(this).hide();
    timer();
    initiateCountdown();
})

$("#submit").on("click", function () {
    scoreboard();
})


function timer() {
    seconds = 120;
    $(".timer").html("<h2>Time Remaining: " + seconds + "</h2>");
    answered = true;
    time = setInterval(initiateCountdown, 1000);

}

function initiateCountdown() {
    seconds--;
    $(".timer").html("<h2>Time Remaining: " + seconds + "</h2>");
    if (seconds < 1) {
        clearInterval(time);
        answered = false;
        showanswer();
    }
}

function showanswer() {
    $(".timer").html("<h2> Game Over! </h2>");
    scoreboard();
}

function scoreboard() {

        clearInterval(time);
       

        var radiovalue = $("input[name='a1']:checked").val();
        if (radiovalue === "true") {
            correct++;
        } else {
            if (radiovalue === "false") {
                incorrect++;
            } 
        }
        var radiovalue = $("input[name='a2']:checked").val();
        if (radiovalue === "true") {
            correct++;
        } else {
            if (radiovalue === "false") {
                incorrect++;
            }
        }var radiovalue = $("input[name='a3']:checked").val();
        if (radiovalue === "true") {
            correct++;
        } else {
            if (radiovalue === "false") {
                incorrect++;
            }
        }var radiovalue = $("input[name='a4']:checked").val();
        if (radiovalue === "true") {
            correct++;
        } else {
            if (radiovalue === "false") {
                incorrect++;
            }
        }var radiovalue = $("input[name='a5']:checked").val();
        if (radiovalue === "true") {
            correct++;
        } else {
            if (radiovalue === "false") {
                incorrect++;
            }
        }var radiovalue = $("input[name='a6']:checked").val();
        if (radiovalue === "true") {
            correct++;
        } else {
            if (radiovalue === "false") {
                incorrect++;
            }
        }
        $(".wrapper").empty();
        $(".wrapper").append("<p> You answered " + correct + " questions correct. Good Job!</p>");
        $(".wrapper").append("<p> You answered " + incorrect + " questions incorrect. Not Bad!</p>");
        $(".wrapper").append("<p> You left " + unanswered + " questions unanswered. </p>");
        
        console.log(correct)
        console.log(incorrect)
        

    };




