var messageArraey = ["Hi. I'm Artem Ruzaev."];
var textPosition = 0;
var speed = 100;

typewriter = () => {
    document.querySelector("#message").innerHTML = messageArraey[0].substring(0, textPosition) + "<span>\u25ae</span>";

    if(textPosition++ != messageArraey[0].length)
        setTimeout(typewriter, speed);
}

window.addEventListener("load", typewriter);