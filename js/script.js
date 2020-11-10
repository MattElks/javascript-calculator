var input = document.getElementById("input");  // input/output button
var number = document.querySelectorAll(".numbers div"); // number buttons 
var operator = document.querySelectorAll(".operators div"); // operator buttons
var result = document.getElementById("result"); // equal button
var clear = document.getElementById("clear"); // clear button
var resultDisplayed = false; // flag to keep an eye on what output is displayed

// adding click handlers to number buttons        #1
for (var i = 0; i < number.length; i++) {
    number[i].addEventListener("click", function(e) {
        // storing current input string and it's last character in variables - used later
        var currentString = input.innerHTML;
        var lastChar = currentString[currentString.length - 1];

        // if result is not displayed, just keep adding
        if (resultDisplayed === false) {
            input.innerHTML += e.target.innerHTML;
        } else if (resultDisplayed === true && lastChar === "+" || lastChar === "-" || lastChar === "x" || lastChar === "÷") {
            /* if result is currently displayed and user pressed an operator
            we need to keep adding to the string for the next operation */
            resultDisplayed = false;
            input.innerHTML += e.target.innerHTML;
        } else {
            /* if result is currently displayed and user pressed a number
            we need to clear the input string and add the new input to start the new operation*/ 
            resultDisplayed = false;
            input.innerHTML = "";
            input.innerHTML += e.target.innerHTML; 
        }
    });
}

// adding click handlers to operator buttons        #2
for (var i = 0; i < operator.length; i++) {
    operator[i].addEventListener("click", function(e) {
        //storing current input string and it's last character in variables - used later
        var currentString = input.innerHTML;
        var lastChar = currentString[currentString.length - 1];

        // if last character entered is an operator, replace it with a currently pressed one
        if (lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "÷") {
            var newString = currentString.substring(0, currentString.length - 1) + e.target.innerHTML;
            input.innerHTML = newString;
        } else if (currentString.length === 0) {
            //if first key pressed is an operator, don't do anything
            console.log("enter a number first");
        } else {
            //else just add the operator pressed to the input
            input.innerHTML += e.target.innerHTML;
        }
    });
}

// on click of 'equal' button
result.addEventListener("click", function() {

    // this is the string we will be processing eg 10 + 20 + 30
    var inputString = input.innerHTML;

    // forming an array of numbers eg for above string it will be ["10", "20", "30"]
    var numbers = inputString.split(/\+|\x|\÷/g);

    /* forming an array of operators. For the above string it will be operators = ["+", "-", "*", "÷", "/"]
    first we replace all of the numbers and dot with empty string and then split */
    var operators = inputString.replace(/[0-9]|\./g, "").split("");

})
         