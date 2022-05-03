var firstnum = 0;
var secondnum = 0;
var total = 0;
var op = '';
var cont = 0;
var number = "";
function getnum(el) {
    if (cont == 1) {
        clearbtn();
        cont = 0;
    }
    document.getElementById("input").value += el.textContent;
    number = document.getElementById("input").value;
    console.log(number);
}

function back() {
    let inarray = [];
    inarray = number.split("");
    inarray.pop();
    number = inarray.join("");
    document.getElementById("input").value = number;
}

function clearbtn() {
    document.getElementById("input").value = "";
}

function cal(el) {

    firstnum = parseFloat(document.getElementById("input").value);
    if (firstnum == 0) {
        document.getElementById("input").value = `${el}錯誤`;
    }
    else {
        console.log(total);
        op = el;
        clearbtn();
    }

}
function totalcal() {
    secondnum = parseFloat(document.getElementById("input").value);
    switch (op) {
        case '+':
            total = firstnum + secondnum;
            break;
        case '-':
            total = firstnum - secondnum;
            break;
        case '*':
            total = firstnum * secondnum;
            break;
        case '/':
            total = firstnum / secondnum;
            break;
        default:
            break;

    }
    document.getElementById("input").value = `${total}`;
    cont += 1;
}