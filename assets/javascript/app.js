
    var questioncurr = 0;
    var correct = 0;
    var wrong = 0;
    var unanswered = 0;
    var seconds = 15;
    var time = 0;
    var answered = false;
    var userguess = "";

    $("#startbtn").on("click", function () {
        $(this).hide();
        timer();
        initiateCountdown();
        submitbutton();
    });

    $("#startgame").on("click", function () {
        $("#game").toggle();
        $(this).hide();
        timer();
        initiateCountdown();
        submitbutton();
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
        $(".wrapper").empty();
    }


    
