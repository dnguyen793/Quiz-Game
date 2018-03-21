$(document).ready(initalizeApp);

function initalizeApp() {
    debugger;
    let test = new quiz();
    $("#button").on('click',function () {
        test.checkAnswers();
        console.log(test.counter)
    })
}

class quiz {
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

    }

    displayMessage(){

    }

    calculation(){

    }

}


