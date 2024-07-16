const up = document.getElementById("up"),
    text = document.getElementById("text"),
    down = document.getElementById("down");


down.onclick = () => {
    text.style.display = "block";
    down.style.display = "none";
    up.style.display = "block"
}

up.onclick = () => {
    text.style.display = "none";
    down.style.display = "block";
    up.style.display = "none"
}