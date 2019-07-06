console.log('teoria');
const stats = document.createElement("div");
stats.classList = "btn btn-primary";
stats.style.position = "fixed";
stats.style.bottom = "5px";
stats.style.left = "5px";
if (localStorage.getItem('total') !== null) {
    stats.innerHTML = `Wykonane testy: ${localStorage.getItem('total')}`
} else {
    stats.innerHTML = `Brak zapisanych testów.`;
}
document.getElementsByTagName("body")[0].appendChild(stats);