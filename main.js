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
    }

    displayMessage(){

    }

    calculation(){

    }

}


