
$(document).ready(initalizeApp);

function initalizeApp() {
    // debugger;
    let test = new Quiz();
    $("#button").on('click',function () {
        test.checkAnswers();
        console.log(test.counter);
        $('input[name=question1]').prop('checked',false);
        $('input[name=question2]').prop('checked',false);
        $('input[name=question3]').prop('checked',false);
        $('input[name=question4]').prop('checked',false);
        $('input[name=question5]').prop('checked',false);
        $('input[name=question6]').prop('checked',false);
        $('input[name=question7]').prop('checked',false);
        $('input[name=question8]').prop('checked',false);

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
        var question4selceted = $('input[name=question4]:checked').val();
        var question5selceted = $('input[name=question5]:checked').val();
        var question6selceted = $('input[name=question6]:checked').val();
        var question7selceted = $('input[name=question7]:checked').val();
        var question8selceted = $('input[name=question8]:checked').val();
        if(question1selceted === 'html'){
            this.counter++
        }
        if(question2selceted === 'PHP'){
            this.counter++
        }
        if(question3selceted === 'javascript'){
            this.counter++
        }
        if(question4selceted === 'Learning Fuze'){
            this.counter++
        }
        if(question5selceted === '16'){
            this.counter++
        }
        if(question6selceted === 'April 20'){
            this.counter++
        }
        if(question7selceted === 'DAN'){
            this.counter++
        }
        if(question8selceted === 'USA'){
            this.counter++
        }
        this.calculation( 8, this.counter);

    }

    calculation( totalQuestions, correctAnswer ){
        const result = parseInt((correctAnswer/totalQuestions)*100);
        console.log( totalQuestions, correctAnswer, result);

        if( result >= 75 ){
            this.displayMessage(" You got " +correctAnswer+ " correct answer. You passed!");
            this.resetGame();
        }
        else {
            this.displayMessage(" You got " +correctAnswer+ " correct answer.:( try again");
            this.resetGame();
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

    resetGame (){
        this.counter = 0;
        setTimeout( ()  => {
            $("#displayMessage").text( " ");
            this.displayMessage ( " " )
        }, 5000)
    }

}


