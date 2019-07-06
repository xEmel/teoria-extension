console.clear();
const btn = document.createElement("div");
btn.classList = "btn btn-success test-result";
btn.style.margin = "2px";
btn.innerHTML = "+";

const clear = document.createElement("div");
clear.classList = "btn btn-danger";
clear.style.position = "fixed";
clear.style.right = "5px";
clear.style.top = "5px";
clear.innerHTML = "Wyczyść";



const totalCounter = document.createElement("div");
totalCounter.classList = "btn btn-primary m-3";
if (localStorage.getItem('total') !== null) {
    totalCounter.innerHTML = localStorage.getItem('total');
} else {
    totalCounter.innerHTML = "Brak zapisanych testów";
}

const successCounter = document.createElement("div")
successCounter.classList = "btn btn-success m-3";
if (localStorage.getItem('success') !== null) {
    successCounter.innerHTML = localStorage.getItem('success');
} else {
    successCounter.innerHTML = "0";
}

const failCounter = document.createElement("div")
failCounter.classList = "btn btn-danger m-3";
if (localStorage.getItem('fail') !== null) {
    failCounter.innerHTML = localStorage.getItem('fail');
} else {
    failCounter.innerHTML = "0";
}

const stats = document.createElement("div");
stats.classList = "statsContainer";
stats.style.position = "fixed";
stats.style.left = "5px";
stats.style.top = "5px";
stats.innerHTML = "";
stats.appendChild(totalCounter);
stats.appendChild(successCounter);
stats.appendChild(failCounter);






const menu = document.getElementsByClassName("pull-right")[4];

menu.appendChild(btn);
menu.appendChild(clear);
menu.appendChild(stats);

const nextExam = menu.getElementsByTagName("a")[0];
nextExam.addEventListener("click", enableAdd);
btn.addEventListener("click", result);
clear.addEventListener("click", clearStorage);

function enableAdd() {
    if (btn.classList.contains("disabled")) {
        btn.classList.remove("disabled");
    }
}

function result() {
    checkResult();
    btn.classList += " disabled";
}

function total() {
    if (localStorage.getItem('total') === null) {
        localStorage.setItem('total', 1);
        totalCounter.innerHTML = localStorage.getItem('total');
        console.log('Ustawiono total na 1');
    } else {
        let total = parseInt(localStorage.getItem('total'));
        localStorage.setItem('total', total + 1);
        totalCounter.innerHTML = localStorage.getItem('total');
        console.log('Ustawiono total na ' + localStorage.getItem('total'));
    }
}

function checkResult() {
    if (btn.classList.contains("disabled")) return;
    total();
    const result = parseInt(document.getElementById('report-points').innerHTML);

    if (result >= 68) {
        if (localStorage.getItem('success') === null) {
            localStorage.setItem('success', 1);
            successCounter.innerHTML = localStorage.getItem('success');
            console.log('Ustawiono zdane na 1');
        } else {
            let success = parseInt(localStorage.getItem('success'));
            localStorage.setItem('success', success + 1);
            successCounter.innerHTML = localStorage.getItem('success');
            console.log('Ustawiono zdane na ' + localStorage.getItem('success'));
        }
    } else {
        if (localStorage.getItem('fail') === null) {
            localStorage.setItem('fail', 1);
            failCounter.innerHTML = localStorage.getItem('fail');
            console.log('Ustawiono fail na 1');
        } else {
            let fail = parseInt(localStorage.getItem('fail'));
            localStorage.setItem('fail', fail + 1);
            failCounter.innerHTML = localStorage.getItem('fail');
            console.log('Ustawiono fail na ' + localStorage.getItem('fail'));
        }
    }
}

function clearStorage() {
    localStorage.removeItem('total');
    localStorage.removeItem('success');
    localStorage.removeItem('fail');
    clear.classList = "btn btn-success";
    totalCounter.innerHTML = "Brak zapisanych wyników";
    successCounter.innerHTML = "0";
    failCounter.innerHTML = "0";
    console.clear();
    console.log('Wyczyszczono')
}