

function digitalClock() {
    let object = new Date();
    let day = String(object.getDate()).padStart(2, '0');
    let month = String(object.getMonth()).padStart(2, '0');
    let year = object.getFullYear()
    let hours = String(object.getHours()).padStart(2, '0');
    let minutes = String(object.getMinutes()).padStart(2, '0');
    let seconds = String(object.getSeconds()).padStart(2, '0');
    const time = `${hours}:${minutes}:${seconds}`
    const date = `${day}/${month}/${year}`
    document.getElementById("clock").innerText = time
    document.getElementById("date").innerText = date
}


setInterval(() => {
    digitalClock()
}, 1000);

digitalClock()