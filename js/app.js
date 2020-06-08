var selectedAnswers = [];
var k = 0;

function populate() {
    if (quiz.isEnded()) {
        showScores();
    } else { //show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
        //show choices
        var choices = quiz.getQuestionIndex().choices;
        for (var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
        showProgress();
    }
}

function guess(id, guess) {
    var button = document.getElementById(id);
    //raspunsul corect
    var corect = quiz.getQuestionIndex().answer;
    button.onclick = function() {
        if (guess != corect)
            selectedAnswers[k] = "false";
        else
            selectedAnswers[k] = "true";
        quiz.guess(guess);

        //afiseaza varianta selectata de utilizator
        k++;
        populate();
    }
}

function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
}

function showScores() {
    var gameOverHtml = "<h1 class='pt-5 score'>Result</h1> <hr>";
    gameOverHtml += "<h2 class='pt-2 score'>Your score:" + quiz.score + "</h2>";
    for (var i = 0; i < k; i++) {
        var poz = i + 1;
        if (selectedAnswers[i] === "false")
            gameOverHtml += "<b>" + poz + "." + " " + "</b>" + "<i class='fas fa-times red'></i>" + "<br>";
        else if (selectedAnswers[i] === "true")
            gameOverHtml += "<b>" + poz + "." + "</b>" + "<i class='fas fa-check green'></i>" + "<br>";
    }
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHtml;
}



var questionsHtml = [
    new Question("HTML stands for?", ["High Text Markup Language", "Hyper Tabular Markup Language", "Hyper Text Markup Language", "None of these"], "Hyper Text Markup Language"),
    new Question("Choose the correct HTML element for the largest heading:", ["&lthead&gt", "&lth1&gt", "&ltheading&gt", "&lth6&gt"], "&lth1&gt"),
    new Question("What is the correct HTML for creating a hyperlink?", ["&lta url=' http://www.w3schools.com '&gtW3Schools.com&lt/a&gt", "&lta name=' http://www.w3schools.com '&gtW3Schools.com&lt/a&gt", "&lta href=' http://www.w3schools.com '&gtW3Schools&lt/a&gt", "&lta&gthttp://www.w3schools.com&lt/a&gt"], "&lta href=' http://www.w3schools.com '&gtW3Schools&lt/a&gt"),
    new Question("Which of these elements are all &lttable&gt elements?", ["&lttable&gt&lttr&gt&lttd&gt", "&lttable&gt&lttr&gt&lttt&gt", "&lttable&gt&lthead&gt&lttfoot&gt", "&ltthead&gt&ltbody&gt&lttr&gt"], "&lttable&gt&lttr&gt&lttd&gt"),
    new Question("What is the correct HTML for making a checkbox?", ['&ltinput type="checkbox"&gt', '&ltinput type="check"&gt', '&ltcheckbox&gt', "&ltcheck&gt"], '&ltinput type="checkbox"&gt'),
    new Question("What is the correct HTML for inserting an image?", ['&ltimage src="image.gif" alt="MyImage"&gt', '&ltimg href="image.gif" alt="MyImage"&gt', '&ltimg alt="MyImage"&gtimage.gif&lt/img&gt', '&ltimg src="image.gif" alt="MyImage"&gt'], '&ltimg src="image.gif" alt="MyImage"&gt'),
    new Question("Correct HTML to left align the content inside a table cell is:", ["&lttdleft&gt", '&lttd raligh="left"&gt', '&lttd align="left"&gt', "&lttd leftalign&gt"], '&lttd align="left"&gt'),
    new Question("How can you open a link in a new browser window?", ['&lt a href = "url" target = "new"&gt', '&lt a href = "url" target= "_blank"&gt', '&lt a href = "url".new&gt', '&lt a href = "url" target ="open"&gt'], '&lt a href = "url" target= "_blank"&gt'),
    new Question("The tag used to create a new list item and also include a hyperlink is", ["&ltli&gt", "&ltdl&gt", "&ltdd&gt", "&ltul&gt"], "&ltli&gt"),
    new Question("Which of the tag is used to creates a number list?", ["&ltli&gt", "&ltol&gt", "&ltli&gt and &ltol&gt", "None of these"], "&ltli&gt and &ltol&gt"),
    new Question("How can you make an e-mail link?", ['&ltmail href +"xxx@y.com"&gt', '&lta href ="mail to: xxx@y.com"&gt', '&lta href = "xxx@y.com&gt', "Both 2 and 3"], '&lta href ="mail to: xxx@y.com"&gt')
]

var questionsCss = [
    new Question("What does CSS stand for?", ["Computer Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets", "Creative Style Sheets"], "Cascading Style Sheets"),
    new Question("Which HTML attribute is used to define inline styles", ["style", "class", "font", "styles"], "style"),
    new Question("Which is the correct CSS syntax", ["{body:color=black;}", "body:color=black;", "{body;color:black}", "body{color:black;}"], "body{color:black;}"),
    new Question("Which CSS property controls the text size", ["font-size", "text-style", "text-size", "font-style"], "font-size"),
    new Question("How do you display hyperlinks without an underline?", ["a {text-decoration:none;}", "a {underline:none;}", "a {text-decoration:no-underline;}", "a {decoration:no-underline;}"], "a {text-decoration:none;}"),
    new Question("If we want define style for an unique element, then which css selector will we use ?", ["id", "text", "class", "name"], "id"),
    new Question("If we want to use a nice looking green dotted border around an image, which css property will we use?", ["border-color", "border-decoration", "border-style", "border-line"], "border-style"),
    new Question("Which of the following property is used as a shorthand to specify a number of other background properties?", ["background-attachment", "background", "background-repeat", "background=position"], "background"),
    new Question("Which of the following property is used to set the text shadow around a text?", ["white-space", "text-shadow", "text-decoration", "text-transform"], "text-shadow"),
    new Question("How do you change the text color of an element?", ["text-color=", "fgcolor:", "color:", "text-color:"], "color"),
    new Question("What is the correct HTML for referring to an external style sheet?", ["&ltstylesheet&gtmystyle.css&lt/stylesheet&ht", '&ltstyle src="mystyle.css"&gt', '&lt link rel="stylesheet" type="text/css" href="mystyle.css"&gt', "None of these"], '&lt link rel="stylesheet" type="text/css" href="mystyle.css"&gt')

]
var questionsJs = [
    new Question("Inside which HTML element do we put the JavaScript?", ["&ltscript&gt", "&ltscripting&gt", "&ltjs&gt", "&ltjavascript&gt"], "&ltscript&gt"),
    new Question("How do you write 'Hello World' in an alert box?", ["msgBox('Hello World');", "alert('Hello World')", "alertBox('Hello World');", "msg('Hello World');"], "alert('Hello World')"),
    new Question("How to write an IF statement for executing some code if 'i' is NOT equal to 5?", ["if (i != 5)", "if (i <> 5)", "if i=!5 then", "if i <> 5"], "if (i != 5)"),
    new Question("What is the correct way to write a JavaScript array?", ["var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')", 'var colors = "red", "green", "blue"', 'var colors = (1:"red", 2:"green", 3:"blue")', 'var colors = ["red", "green", "blue"]'], 'var colors = ["red", "green", "blue"]'),
    new Question("Which event occurs when the user clicks on an HTML element?", ["onclick", "onchange", "onmouseclick", "onmouseover"], "onclick"),
    new Question("Which of the following functions of Array object adds and/or removes elements from an array?", ["toSource()", "sort()", "splice()", "unshift()"], "splice()"),
    new Question("Which of the following is not a reserved word in JavaScript?", ["interface", "throws", "program", "short"], "program"),
    new Question("What is the JavaScript syntax for printing values in Console?", ["print(5)", "console.log(5)", "console.print(5)", "print.console(5)"], "console.log(5)"),
    new Question("Which of the following can't be done with client-side JavaScript?", ["Validating a form", "Sending a form's contents by email", "Storing the form's to a database file on the server", "None if the above"], "Storing the form's to a database file on the server")
]

var questionsBootstrap = [new Question("The Bootstrap grid system is based on how many columns?", ["12", "6", "9", "3"], "12"),
    new Question("Which class shapes an image to a circle?", [".img-rounded", ".img-circle", ".img-thumbnail", ".img-round"], ".img-circle"),
    new Question("Which class is used to create a button group?", [".group-btn", ".group-button", ".btn-group", ".button-group"], ".btn-group"),
    new Question("A standard navigation bar is created with:", ['&ltnav class="nav navbar"&gt', '&ltnsav class="navbar default-navbar"&gt', '&ltnav class="navbar navbar-default"&gt', '&lt nav class="navigationbar navbar-default"&gt'], '&ltnav class="navbar navbar-default"&gt'),
    new Question("Which plugin is used to cycle through elements, like a slideshow?", ["Carousel", "Scrollspy", "Slideshow", "Orbit"], "Carousel")
]

var questionsSql = [
    new Question("Which SQL statement is used to extract data from a database?", ["SELECT", "OPEN", "EXTRACT", "GET"], "SELECT"),
    new Question("Which SQL statement is used to update data in a database?", ["UPDATE", "MODIFY", "SAVE AS", "SAVE"], "UPDATE"),
    new Question('With SQL, how do you select all the columns from a table named "Persons"?', ["SELECT *.Persons", "SELECT * FROM Persons", "SELECT [all] FROM Persons", "SELECT Persons"], "SELECT * FROM Persons"),
    new Question("Which SQL keyword is used to sort the result-set?", ["ORDER", "SORT", "SORT BY", "ORDER BY"], "ORDER BY"),
    new Question("What is the most common type of join?", ["INNER JOIN", "INSIDE JOIN", "JOINED", "JOINED TABLE"], "INNER JOIN")
]

var questionsPhp = [
    new Question("PHP server scripts are surrounded by delimiters, which?", ["&lt?php...?&gt", "&lt&&gt...&lt/&&gt", "&ltscript&gt...&lt/script&gt", "&lt?php&gt...&lt/?&gt"], "&lt?php...?&gt"),
    new Question('What is the correct way to include the file "time.inc" ?', ['&lt!--include file="time.inc"--&gt', '&lt?php include file="time.inc";?&gt', '&lt?php include"time.inc";?&gt', '&lt?php include:"time.inc";?&gt'], '&lt?php include"time.inc";?&gt'),
    new Question("Which superglobal variable holds information about headers, paths, and script locations?", ["$_GLOBALS", "$_GET", "$_SERVER", "$_SESSION"], "$_SERVER"),
    new Question("What is the correct way to add 1 to the $count variable?", ["$count++;", "$count =+1", "++count", "count++;"], "$count++;"),
    new Question("Which operator is used to check if two values are equal and of same data type?", ["===", "=", "!=", "=="], "===")
]


var domain = document.getElementById("domain").textContent.toLowerCase();
console.log(domain);
if (domain.search("html") != -1) {
    result = questionsHtml.slice(0, 5).map(function() {
        return this.splice(Math.floor(Math.random() * this.length), 1)[0];
    }, questionsHtml.slice());
    var quiz = new Quiz(result);
    populate();
} else if (domain.search("css") != -1) {
    result = questionsCss.slice(0, 5).map(function() {
        return this.splice(Math.floor(Math.random() * this.length), 1)[0];
    }, questionsCss.slice());
    var quiz = new Quiz(result);
    populate();
} else if (domain.search("js") != -1) {
    result = questionsJs.slice(0, 5).map(function() {
        return this.splice(Math.floor(Math.random() * this.length), 1)[0];
    }, questionsJs.slice());
    var quiz = new Quiz(result);
    populate();
} else if (domain.search("bootstrap") != -1) {
    result = questionsBootstrap.slice(0, 5).map(function() {
        return this.splice(Math.floor(Math.random() * this.length), 1)[0];
    }, questionsBootstrap.slice());
    var quiz = new Quiz(result);
    populate();
} else if (domain.search("sql") != -1) {
    result = questionsSql.slice(0, 5).map(function() {
        return this.splice(Math.floor(Math.random() * this.length), 1)[0];
    }, questionsSql.slice());
    var quiz = new Quiz(result);
    populate();
} else if (domain.search("php") != -1) {
    result = questionsPhp.slice(0, 5).map(function() {
        return this.splice(Math.floor(Math.random() * this.length), 1)[0];
    }, questionsPhp.slice());
    var quiz = new Quiz(result);
    populate();
}