function typenumber(ctrl) {
    let textbox = document.getElementById("textbox");
    let value = textbox.value;
    if (ctrl.innerText == ".") {
        // alert("dot")
        if (value.indexOf(".") != -1)
            return;

    }
    let number = value + ctrl.innerText;
    textbox.value = number;
}

function clearall() {
    let textbox = document.getElementById("textbox");
    textbox.value = "";
    textboxhistory.value = "";
    operator = "";
}

function clearone() {
    let textbox = document.getElementById("textbox");
    let text = textbox.value;
    // alert(length);
    let length = text.length;
    // alert(text);
    if (length > 0) {
        let newtext = text.slice(0, length - 1);
        // alert(newtext); 
        textbox.value = newtext;
    }

}

function operation(ctrl) {
    let textbox = document.getElementById("textbox");
    let textboxhistory = document.getElementById("textboxhistory");
    textboxhistory.value = textbox.value;
    textbox.value = ""

    operator = ctrl.innerText
}

function calculate() {
    let textbox = document.getElementById("textbox");
    let textboxhistory = document.getElementById("textboxhistory");

    let no1 = Number(textboxhistory.value);
    let no2 = Number(textbox.value);

    let answer = 0;
    display = "";

    display = textboxhistory.value.concat(operator, textbox.value);

    if (operator == "+") {
        answer = no1 + no2;
    }

    else if (operator == "-") {
        answer = no1 - no2;

    }

    if (operator == "*") {
        answer = no1 * no2;

    }

    if (operator == "/") {
        answer = no1 / no2;
        // display = concat(no1, '/', no2);

    }
    textbox.value = answer;
    textboxhistory.value = display;

}
