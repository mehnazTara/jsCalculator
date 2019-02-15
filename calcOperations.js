/**
 * Main Jquery function to add event handlers for button clicks
 */
$(".btn").click(function (event) {
    var val = this.innerHTML;
    if (val === "=") {
        evaluate();
        document.getElementById("clear-entry").innerHTML="C";
    } else if (val === "CE") {
        clearDisplayEntry();
    } else if (val === "C") {
        clearAllEntry();
    }else if (val === "X") {
        document.getElementById("display-field").value += "*";
        document.getElementById("clear-entry").innerHTML="CE";
    } else {
        document.getElementById("clear-entry").innerHTML="CE";
        appendKeyVal(val);
    }

});


/**
 * Concatenates the key entered and displays in the display-field.
 * Ignores leading zero.
 * @param val of the key entered
 */
function appendKeyVal(val) {
    var result = document.getElementById("display-field").value;
    if (result == 0) {
        document.getElementById("display-field").value = val;
    } else {
        document.getElementById("display-field").value += val;
    }
}


/**
 * Clears one digit/entry at a time for the display-field.
 */
function clearDisplayEntry() {
    var currentVal = document.getElementById("display-field").value;
    if (currentVal === "Infinity" || currentVal === "undefined") {
        clearAllEntry()
    } else {
        document.getElementById("display-field").value = currentVal.slice(0, -1);
    }
}


/**
 * Clears the field display-field.
 */
function clearAllEntry() {
    document.getElementById("display-field").value = "";
}


/**
 * Sets the value of specified field Id element to the value provided
 * @param id of the element
 * @param val to be set
 */
function setDisplayField(id, val) {
    if (id == undefined) {
        id = "display-field";
    }
    document.getElementById(id).value = val;
}


/**
 * Uses eval function to evaluate the expression in display field and displays result in
 * display-field and prev-result field.
 * If eval throws Exception, the error is captured in prev-result field.
 */
function evaluate() {
    var expression = document.getElementById("display-field").value;
    try {
        if(expression && expression !== "") {
            var result = eval(expression);
            setDisplayField("display-field", result);
            setDisplayField("prev-result", expression + "=" + result)
        }else{
            //= is pressed without any key entry, then display 0
            setDisplayField("display-field", 0);
        }
    } catch (e) {
        document.getElementById("prev-result").value = expression + " =ERROR";
    }
}

