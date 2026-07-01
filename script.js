const typingText = document.getElementById("typingText");

const message =
"🎂 Wishing You a Very Happy Birthday! May your life always be full of happiness, success and love ❤️";

let i = 0;

function typing() {
    if (i < message.length) {
        typingText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typing, 50);
    }
}

typing();

const celebrateBtn = document.getElementById("celebrateBtn");

celebrateBtn.addEventListener("click", () => {

    for (let i = 0; i < 50; i++) {

        const heart = document.createElement("div");

        heart.innerHTML = "💖";

        heart.style.position = "fixed";
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.top = window.innerHeight + "px";
        heart.style.fontSize = "30px";
        heart.style.transition = "4s linear";
        heart.style.zIndex = "999";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.style.top = "-100px";
            heart.style.opacity = "0";
        }, 50);

        setTimeout(() => {
            heart.remove();
        }, 4000);
    }

    alert("🎉 Happy Birthday! 🎂");
});