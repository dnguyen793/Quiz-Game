
$(document).ready(initalizeApp);

function initalizeApp() {
    debugger;
    let test = new Quiz();
    $("#button").on('click',function () {
        test.checkAnswers();
        console.log(test.counter)
    })
}

class Quiz {
    constructor(){
    this.counter = 0;
    }
    checkAnswers(){
        var question1selceted = $('input[name=question1]:checked').val();
        var question2selceted = $('input[name=question2]:checked').val();
        var question3selceted = $('input[name=question3]:checked').val();
        console.log(question1selceted,question2selceted,question3selceted);
        if(question1selceted === 'html'){
            this.counter++
        }
        if(question2selceted === 'PHP'){
            this.counter++
        }
        if(question3selceted === 'javascript'){
            this.counter++
        }

        this.calculation( 3, this.counter);
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


