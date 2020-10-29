var input = document.getElementById("input");  // input/output button
var number = document.querySelectorAll(".numbers div"); // number buttons 
var operator = document.querySelectorAll(".operators div"); // operator buttons
var result = document.getElementById("result"); // equal button
var clear = document.getElementById("clear"); // clear button
var resultDisplayed = false; // flag to keep an eye on what output is displayed

// adding click handlers to number buttons
for (var i = 0; i < number.length; i++) {
    number[i].addEventListener("click", function(e) {
        // storing current input string and it's last character in variables - used later
        var currentString = input.innerHTML;
        var lastChar = currentString[currentString.length -1 ];

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
         // REVIEW CODE ABOVE //