const setup = () => {console.log("loaded");
    let start = document.getElementById("start");
    start.addEventListener("click", startTheGame);
};

let global = {
    IMAGE_COUNT: 5,
    IMAGE_SIZE: 48,
    IMAGE_PATH_PREFIX:"images/",
    IMAGE_PATH_SUFFIX:".png",

    MOVE_DELAY: 5000,
    score: 0,
    timeoutID: 0
};

const startTheGame = () => {

    console.log("startthegame");
    document.getElementById("start").style.display = "none";

    let target = document.getElementById("target");
    target.addEventListener("click", klik);

    beweeg();
};

const klik = (ev) => {
    console.log(ev.target);
    if (ev.target.className.indexOf("bom") !== -1) {
        gameOver();
    } else {
        raak();
    }
}

const beweeg = () => {
    let target = document.getElementById("target");
    let scherm = document.getElementById("playField");
    let maxLeft = scherm.clientWidth - global.IMAGE_SIZE;
    let maxTop = scherm.clientHeight - global.IMAGE_SIZE;
    let nummer = Math.floor(Math.random() * global.IMAGE_COUNT);

    if (nummer === 0) {
        // bom
        target.className = "bom";
    } else {
        target.className = "";
    }
    target.setAttribute("src", global.IMAGE_PATH_PREFIX
        + nummer + global.IMAGE_PATH_SUFFIX);

    target.style.left = Math.floor(Math.random() * maxLeft) + "px";
    target.style.top = Math.floor(Math.random() * maxTop) + "px";

    global.timeoutId = setTimeout(beweeg, global.MOVE_DELAY);
};

const gameOver = () => {
    clearTimeout(global.timeoutID);
    alert ("GAME OVER, je hebt verloren!!");
};

const raak = () => {
    let puntSpans = document.getElementsByClassName("punt");
    let i = 0;

    clearTimeout(global.timeoutID);
    global.score++;
    for (i = 0; i <puntSpans.length; i++) {
        puntSpans[i].innerText = global.score;
    }
    beweeg();
}
window.addEventListener("load", setup);