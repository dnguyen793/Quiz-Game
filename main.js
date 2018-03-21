$(document).ready(initializeGame);

var win;

function initializeGame() {
    win = new Quiz();
}

class Quiz {
    constructor(){

    }
    checkAnswers(){

    }



    calculation( totalQuestions, correctAnswer ){
        const result = parseInt((correctAnswer/totalQuestions)*100);
        console.log( totalQuestions, correctAnswer, result);

        if( result >= 75 ){
            this.displayMessage(" You got " +correctAnswer+ " correct answer. You passed!");
        }
        else {
            this.displayMessage(" You got " +correctAnswer+ " correct answer.:( try again");
        }

    }

    displayMessage( message ){
        const div = $("<div>");
        const disMessage = $("<span>", {
            text: message,
            class: 'message'
        });

        div.append(disMessage);
        $("#displayMessage").append(div);
    }

}