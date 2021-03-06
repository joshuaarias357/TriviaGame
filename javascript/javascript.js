/* I was able to get just about everything working except for the timeout feature. 
Also, I had to repeat lines of code instead of figuring out a way to use the same function to correlate with
a specific answer/value. I could not get it to work with the setTimeout function at the bottom.*/
$(document).ready(function(){
    //made a few variables
    var time = 30;
    var numCorrect = 0;
    var numIncorrect = 0;

    //created 10 questions
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
    }, {
        question: "Donald Trump was the original host of Celebrity Apprentice. When he left, who did NBC name as his replacement?",
        choices: ["Mark Cuban", "Martha Stewart", "Arnold Schwarzenegger", "Bill Maher"],
        correctAnswer: 2
    }, {
        question: "How many siblings does The Donald have?",
        choices: ["0", "1", "2", "4"],
        correctAnswer: 3
    }, {
        question: "What is the name of The Donald's best selling 1987 memoir and business advice book?",
        choices: ["How To Get Rich", "You're Hired", "The Art Of The Deal", "Trump Takes Manhattan"],
        correctAnswer: 2
    }, {
        question: "What did Forbes estimate as The Donald's net worth in 2015?",
        choices: ["$590 Million", "$4 Billion", "$1 Billion", "$10 Billion"],
        correctAnswer: 1
    }, {
        question: "What was Donald Trump's official 2016 campaign slogan?",
        choices: ["Let America Be America Again", "Believe In America", "America, America, America", "Make America Great Again"],
        correctAnswer: 3
    }, {
        question: "In October 1999, Donald Trump declared himself a candidate for which party's 2000 presidential nomination?",
        choices: ["TEA Party", "Republican Party", "Farty Party", "Ronald McDonald Party"],
        correctAnswer: 1
    }
    ]

    //made most of the countdown timer
    function countDown(){
        time--;
        $("#timer").html(time);
        if (time === 0){
            clearInterval(thetimer);
        }
    }

    //made function to print the questions and answers to the screen
    function makeQuestions(quesNum){
        var ques;
        var ans;

        //prints questions
        ques = $("<h2>");
        ques.text(trumpsQuestions[quesNum].question);
        ques.addClass("qanda");
        $("#pageContent").append(ques);

        //prints each answer as a button
        for(i=0;i<trumpsQuestions[quesNum].choices.length;i++){
            ans = $("<button type='button' value= '" + i + "' class='btn btn-primary btn-lg btn-block'>Block level button</button>");
            ans.html(trumpsQuestions[quesNum].choices[i]);
            ans.addClass("qanda");
            ans.addClass("answerButtons");
            $("#pageContent").append(ans);
        }   
    }

    //made function to reset the game or question actually after each submitted answer
    function resetGame(which, a){
        $(".beforestart").remove();
        $("#instructions").text("You have 30 seconds to answer the question below:");
        //reset the timer
        time = 30;
        $("#timer").text(time);
        thetimer = setInterval(countDown, 1000);
        $("#pageContent").empty();

        /*I most likely overcomplicated things greatly from here on out. A few small things kept me from 
        just using one function. Figuring out another way.*/
        var tester;
        tester = which;

        //this decides which question to pull after the previous question is answered
        if(tester === "a"){
            makeQuestions(1);
        } else if(tester === "b"){
            makeQuestions(2);
        } else if(tester === "c"){
            makeQuestions(3);
        } else if(tester === "d"){
            makeQuestions(4);
        } else if(tester === "e"){
            makeQuestions(5);
        } else if(tester === "f"){
            makeQuestions(6);
        } else if(tester === "g"){
            makeQuestions(7);
        } else if(tester === "h"){
            makeQuestions(8);
        } else if(tester === "i"){
            makeQuestions(9);
        }
        //flag used in deciding what was right or not
        questionFlag = a;

        if (time === 0){
            resetGame();
        }

    }
    //triggers the game when start button is clicked
    $("#startbutton").on("click", function(){
        $(".beforestart").remove();
        $("#instructions").text("You have 30 seconds to answer the question below:");
        $("#timer").text(time);
        thetimer = setInterval(countDown, 1000);
        makeQuestions(0);
        questionFlag = "1 question";
    })

    //prints the correct text as well as updates the score for the ending.
    function right(comment){
        $("#pageContent").empty();
        $("#pageContent").html("<h2>" + comment + "</h2>");
        numCorrect++;
    }

    //prints the correct text as well as updates the score at the end.
    function wrong(comment){
        $("#pageContent").empty();
        $("#pageContent").html("<h2>" + comment + "</h2>");
        numIncorrect++;
    }

    //this is what happens at the end of the game.
    function endGame(){
        $("#pageContent").empty();
        $("#pageContent").html("<h2>You got " + numCorrect + " correct</h2>");
        $("#pageContent").append("<h2>You got " + numIncorrect + " incorrect</h2>");
        $("#pageContent").append("<h2>Pretty Good?</h2>");
    }

    //after the start button is clicked, this is what triggers the rest of the buttons
    $(document).on("click", ".answerButtons", function(){
        //this stores the answer you choose
        var chosenAnswer;
        chosenAnswer = $(this).val();
        clearInterval(thetimer);
        var gameOverFlag = false;

        /*again, probably overcomplicating this. Each is only slightly different 
        because I wanted to print different trump gifs. */
        if(questionFlag === "1 question"){
            if(chosenAnswer == trumpsQuestions[0].correctAnswer){
                right("You were right");
                $("#pageContent").append("<img src='images/right.gif' class='trumpSeesAll'>");
            } else {
                wrong("WRONG!")
                $("#pageContent").append("<img src='images/wrong.gif' class='trumpSeesAll'>");
            }
        } else if (questionFlag === "2 question"){
            if(chosenAnswer == trumpsQuestions[1].correctAnswer){
                right("You were right");
                $("#pageContent").append("<img src='images/tenor4.gif' class='trumpSeesAll'>");
            } else {
                wrong("WRONG!")
                $("#pageContent").append("<img src='images/tenor3.gif' class='trumpSeesAll'>");
            }
        } else if (questionFlag === "3 question"){
            if(chosenAnswer == trumpsQuestions[2].correctAnswer){
                right("You were right");
                $("#pageContent").append("<img src='images/tenor5.gif' class='trumpSeesAll'>");
            } else {
                wrong("WRONG!")
                $("#pageContent").append("<img src='images/tenor6.gif' class='trumpSeesAll'>");
            }
        } else if (questionFlag === "4 question"){
            if(chosenAnswer == trumpsQuestions[3].correctAnswer){
                right("You were right");
                $("#pageContent").append("<img src='images/tenor8.gif' class='trumpSeesAll'>");
            } else {
                wrong("WRONG!")
                $("#pageContent").append("<img src='images/tenor7.gif' class='trumpSeesAll'>");
            }
        } else if (questionFlag === "5 question"){
            if(chosenAnswer == trumpsQuestions[4].correctAnswer){
                right("You were right");
                $("#pageContent").append("<img src='images/tenor9.gif' class='trumpSeesAll'>");
            } else {
                wrong("WRONG!")
                $("#pageContent").append("<img src='images/tenor10.gif' class='trumpSeesAll'>");
            }
        } else if (questionFlag === "6 question"){
            if(chosenAnswer == trumpsQuestions[5].correctAnswer){
                right("You were right");
                $("#pageContent").append("<img src='images/tenor12.gif' class='trumpSeesAll'>");
            } else {
                wrong("WRONG!")
                $("#pageContent").append("<img src='images/tenor11.gif' class='trumpSeesAll'>");
            }
        } else if (questionFlag === "7 question"){
            if(chosenAnswer == trumpsQuestions[6].correctAnswer){
                right("You were right");
                $("#pageContent").append("<img src='images/trumppizza.webp' class='trumpSeesAll'>");
            } else {
                wrong("WRONG!")
                $("#pageContent").append("<img src='images/tenorWRONG.gif' class='trumpSeesAll'>");
            }
        } else if (questionFlag === "8 question"){
            if(chosenAnswer == trumpsQuestions[7].correctAnswer){
                right("You were right");
                $("#pageContent").append("<img src='images/tenor7.gif' class='trumpSeesAll'>");
            } else {
                wrong("WRONG!")
                $("#pageContent").append("<img src='images/tenor9.gif' class='trumpSeesAll'>");
            }
        } else if (questionFlag === "9 question"){
            if(chosenAnswer == trumpsQuestions[8].correctAnswer){
                right("You were right");
                $("#pageContent").append("<img src='images/tenor4.gif' class='trumpSeesAll'>");
            } else {
                wrong("WRONG!")
                $("#pageContent").append("<img src='images/tenor3.gif' class='trumpSeesAll'>");
            }
        } else if (questionFlag === "10 question"){
            if(chosenAnswer == trumpsQuestions[9].correctAnswer){
                right("You were right");
                $("#pageContent").append("<img src='images/tenor5.gif' class='trumpSeesAll'>");
                setTimeout(endGame, 3000);

            } else {
                wrong("WRONG!")
                $("#pageContent").append("<img src='images/tenor10.gif' class='trumpSeesAll'>");
                setTimeout(endGame, 3000);
            }
        } 
        
        /*This is what printed out things after the answer is selected. Everything would have been simpler 
        had I been able to figure out the syntax below on how to update which question comes next.*/
        if (questionFlag === "1 question"){
            setTimeout(resetGame, 3000, "a", "2 question");
        } else if(questionFlag === "2 question"){
            setTimeout(resetGame, 3000, "b", "3 question");
        } else if(questionFlag === "3 question"){
            setTimeout(resetGame, 3000, "c", "4 question");
        } else if(questionFlag === "4 question"){
            setTimeout(resetGame, 3000, "d", "5 question");
        } else if(questionFlag === "5 question"){
            setTimeout(resetGame, 3000, "e", "6 question");
        } else if(questionFlag === "6 question"){
            setTimeout(resetGame, 3000, "f", "7 question");
        } else if(questionFlag === "7 question"){
            setTimeout(resetGame, 3000, "g", "8 question");
        } else if(questionFlag === "8 question"){
            setTimeout(resetGame, 3000, "h", "9 question");
        } else if(questionFlag === "9 question"){
            setTimeout(resetGame, 3000, "i", "10 question");
            return gameOverFlag = true;
        }
    })

});