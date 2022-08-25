const targetHidden = document.querySelector(".hidden");
let timeOut;
function show() {
    document.documentElement.style.setProperty('--hiddenRight', "inherit");
    timeOut = setTimeout(() => {
        document.documentElement.style.setProperty('--hiddenRight', "100vw");
    }, 2000)
}

targetHidden.addEventListener('mouseover', (event) => {
    clearTimeout(timeOut);
    document.documentElement.style.setProperty('--hiddenRight', "inherit");
    console.log("hovering");
});

// function showAll() {
//     document.documentElement.style.setProperty('--hiddenRight', "inherit");
//     console.log("hovering");
// }
function hide() {
    timeOut = setTimeout(() => {
        document.documentElement.style.setProperty('--hiddenRight', "100vw");
    }, 2000)
}
