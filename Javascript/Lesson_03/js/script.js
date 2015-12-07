var formGenerator = {
    createFormHeader: function (title) {
        var h2Element = document.createElement("h2");
        var textNode = document.createTextNode(title);
        
        h2Element.appendChild(textNode);
        h2Element.className = "form_header";

		return h2Element;
    },

    createAnswerOption: function(answer) {
    	var liElement = document.createElement("li");
    	var inputElement = document.createElement("input");
    	inputElement.type = "checkbox";
    	var textNode = document.createTextNode(answer);

    	liElement.appendChild(inputElement);
    	liElement.appendChild(textNode);
    	liElement.className = "answer";

    	return liElement;
    },

    createQuestion: function(question, answers) {
    	var liElement = document.createElement("li");
    	var textNode = document.createTextNode(question);

    	liElement.appendChild(textNode);

    	var ulElement = document.createElement("ul");

    	liElement.appendChild(ulElement);

    	for(var i = 0; i < answers.length; i++) {
    		ulElement.appendChild(answers[i]);
    	}

    	return liElement;
    },

    createForm: function(questions, submitButtonText) {
    	var formElement = document.createElement("form");
    	var olElement = document.createElement("ol");

    	formElement.appendChild(olElement);
    	formElement.className = "main_form";

    	for(var i = 0; i < questions.length; i++) {
    		olElement.appendChild(questions[i]);
    	}

    	var buttonElement = document.createElement("input");
    	
    	buttonElement.value = submitButtonText;
    	buttonElement.type = "submit";
    	buttonElement.className = "btn btn-primary submit";

    	formElement.appendChild(buttonElement);

    	return formElement;
    }
}

var answer11 = formGenerator.createAnswerOption("Варіант відповіді 1.1");
var answer12 = formGenerator.createAnswerOption("Варіант відповіді 1.2");
var answer13 = formGenerator.createAnswerOption("Варіант відповіді 1.3");

var answers1 = [answer11, answer12, answer13];

var question1 = formGenerator.createQuestion("Питання №1", answers1);

var answer21 = formGenerator.createAnswerOption("Варіант відповіді 2.1");
var answer22 = formGenerator.createAnswerOption("Варіант відповіді 2.2");
var answer23 = formGenerator.createAnswerOption("Варіант відповіді 2.3");

var answers2 = [answer21, answer22, answer23];

var question2 = formGenerator.createQuestion("Питання №2", answers2);

var answer31 = formGenerator.createAnswerOption("Варіант відповіді 3.1");
var answer32 = formGenerator.createAnswerOption("Варіант відповіді 3.2");
var answer33 = formGenerator.createAnswerOption("Варіант відповіді 3.3");

var answers3 = [answer31, answer32, answer33];

var question3 = formGenerator.createQuestion("Питання №3", answers3);

var questions = [question1, question2, question3];

header = formGenerator.createFormHeader("Тест по програмуванню");

document.body.appendChild(header);

form = formGenerator.createForm(questions, "Перевірити мої результати");

document.body.appendChild(form);