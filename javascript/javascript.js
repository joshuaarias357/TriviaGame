$(document).ready(function(){
    var time = 40;

    trumpsQuestions = [{
        question: "Weekly, how many McDoubles does Trump eat?",
        choices: ["1", "3", "5", "too many"],
        correctAnswer: 2
    }, {
        question: "How many wives has Trump had?",
        choices: ["1", "3", "5", "3 and a few mistresses"],
        correctAnswer: 3
    }, {
        question: "How thicc is the Donald?",
        choices: ["thicc", "big boi thicc", "super thicc", "tttthhhhhhhhicccc"],
        correctAnswer: 1
    }, {
        question: "How much cardio does the donald do a day?",
        choices: ["none", "less then none", "a ton", "some?"],
        correctAnswer: 1
    }
    ]

    function countDown(){
        time--;
        $("#timer").text(time);
        if (time === 0){
            clearInterval(thetimer);
        }
    }

    function makeQuestions(quesNum){
        var ques;
        var ans;

        ques = $("<h2>");
        ques.text(trumpsQuestions[quesNum].question);
        ques.addClass("qanda");
        $("#pageContent").append(ques);

        for(i=0;i<trumpsQuestions[quesNum].choices.length;i++){
            ans = $("<button type='button' value= '" + i + "' class='btn btn-primary btn-lg btn-block'>Block level button</button>");
            ans.html(trumpsQuestions[quesNum].choices[i]);
            ans.addClass("qanda");
            ans.addClass("answerButtons");
            $("#pageContent").append(ans);
        }   
    }

    function resetGame(which, a){
        $(".beforestart").remove();
        $("#instructions").text("You have 20 seconds to answer the question below:");
        time = 40;
        $("#timer").text(time);
        thetimer = setInterval(countDown, 1000);
        $("#pageContent").empty();
        var tester;
        tester = which;

        if(tester === "a"){
            makeQuestions(1);
        } else if(tester === "b"){
            makeQuestions(2);
        } else if(tester === "c"){
            makeQuestions(3);
        }
        questionFlag = a;

    }

    $("#startbutton").on("click", function(){
        $(".beforestart").remove();
        $("#instructions").text("You have 20 seconds to answer the question below:");
        $("#timer").text(time);
        thetimer = setInterval(countDown, 1000);
        makeQuestions(0);
        questionFlag = "1 question";
    })

    function right(comment){
        $("#pageContent").empty();
        $("#pageContent").html("<h2>" + comment + "</h2>");
    }

    function wrong(comment){
        $("#pageContent").empty();
        $("#pageContent").html("<h2>" + comment + "</h2>");
    }

    $(document).on("click", ".answerButtons", function(){
        var chosenAnswer;
        chosenAnswer = $(this).val();
        console.log(chosenAnswer);
        clearInterval(thetimer);

        if(questionFlag === "1 question"){
            if(chosenAnswer == trumpsQuestions[0].correctAnswer){
                right("You were right");
                $("#pageContent").append("<img src='images/trumppizza.webp' class='trumpSeesAll'>");
            } else {
                wrong("Wow you were very wrong.")
                $("#pageContent").append("<img src='images/trumppizza.webp' class='trumpSeesAll'>");
            }
        } else if (questionFlag === "2 question"){
            if(chosenAnswer == trumpsQuestions[1].correctAnswer){
                right("You were right");
                $("#pageContent").append("<img src='images/trumppizza.webp' class='trumpSeesAll'>");
            } else {
                wrong("Wow you were very wrong.")
                $("#pageContent").append("<img src='images/trumppizza.webp' class='trumpSeesAll'>");
            }
        } else if (questionFlag === "3 question"){
            if(chosenAnswer == trumpsQuestions[1].correctAnswer){
                right("You were right");
                $("#pageContent").append("<img src='images/trumppizza.webp' class='trumpSeesAll'>");
            } else {
                wrong("Wow you were very wrong.")
                $("#pageContent").append("<img src='images/trumppizza.webp' class='trumpSeesAll'>");
            }
        } else if (questionFlag === "4 question"){
            if(chosenAnswer == trumpsQuestions[1].correctAnswer){
                right("You were right");
                $("#pageContent").append("<img src='images/trumppizza.webp' class='trumpSeesAll'>");
            } else {
                wrong("Wow you were very wrong.")
                $("#pageContent").append("<img src='images/trumppizza.webp' class='trumpSeesAll'>");
            }
        }

        if (questionFlag === "1 question"){
        setTimeout(resetGame, 1000, "a", "2 question");
        } else if(questionFlag === "2 question"){
        setTimeout(resetGame, 1000, "b", "3 question");
        } else if(questionFlag === "3 question"){
            setTimeout(resetGame, 1000, "c", "4 question");
        }
    })

});