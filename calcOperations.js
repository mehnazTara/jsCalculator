$(".btn").click(function (event) {
    var val = this.innerHTML
    if (val === "=") {
        evaluate();
    } else if (val === "CE") {
        clearDisplayEntry();
    } else if (val === "X") {
        document.getElementById("display-field").value += "*";
    } else {
        console.log("you clicked: ", val)
        appendKeyVal(val);
    }

});

function appendKeyVal(val) {
    var result = document.getElementById("display-field").value;
    if (result == 0) {
        document.getElementById("display-field").value = val;
    } else {
        document.getElementById("display-field").value += val;
    }
}

function clearDisplayEntry() {
    var currentVal = document.getElementById("display-field").value;
    if (currentVal === "Infinity" || currentVal === "undefined") {
        document.getElementById("display-field").value = "";
    } else {
        document.getElementById("display-field").value = currentVal.slice(0, -1);
    }
}

function setDisplayField(id, val) {
    if (id == undefined) {
        id = "display-field";
    }
    document.getElementById(id).value = val;
}

function evaluate() {
    var expression = document.getElementById("display-field").value;
    console.log(expression);
    console.log(expression + "i am outside");

    try {
        if(expression && expression !== "") {
            console.log(expression + "i am inside");
            var result = eval(expression);
            setDisplayField("display-field", result);
            setDisplayField("prev-result", expression + "=" + result)
        }
    } catch (e) {
        document.getElementById("prev-result").value = expression + " =ERROR";
    }
}

