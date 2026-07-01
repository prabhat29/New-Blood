// ===============================
// TYPEWRITER EFFECT
// ===============================

const typing = document.getElementById("typing");

const text =
"Every heartbeat of mine whispers your name. Wishing you the happiest birthday, my love. ❤️";

let index = 0;

function typeWriter() {

    if (index < text.length) {

        typing.textContent += text.charAt(index);

        index++;

        setTimeout(typeWriter, 45);

    }

}

window.addEventListener("load", typeWriter);
//====================================
// PARTICLE ENGINE
//====================================

const celebrateBtn=document.getElementById("celebrateBtn");

celebrateBtn.addEventListener("click",()=>{

createHearts();

createPetals();

createSparkles();

startCelebration();

});

function createHearts(){

for(let i=0;i<40;i++){

const h=document.createElement("div");

h.className="heart";

h.innerHTML="💜";

h.style.left=Math.random()*100+"vw";

h.style.animationDuration=
(5+Math.random()*4)+"s";

document
.getElementById("hearts-container")
.appendChild(h);

setTimeout(()=>{

h.remove();

},9000);

}

}

function createPetals(){

for(let i=0;i<30;i++){

const p=document.createElement("div");

p.className="petal";

p.innerHTML="🌹";

p.style.left=Math.random()*100+"vw";

p.style.animationDuration=
(5+Math.random()*5)+"s";

document
.getElementById("petals-container")
.appendChild(p);

setTimeout(()=>{

p.remove();

},10000);

}

}

function createSparkles(){

for(let i=0;i<80;i++){

const s=document.createElement("div");

s.className="spark";

s.style.left=Math.random()*100+"vw";

s.style.top=Math.random()*100+"vh";

document
.getElementById("sparkles-container")
.appendChild(s);

setTimeout(()=>{

s.remove();

},1200);

}

}
// ==============================
// PREMIUM CELEBRATION
// ==============================

celebrateBtn.addEventListener("click", () => {

    // Confetti Blast
    confetti({
        particleCount: 250,
        spread: 180,
        origin: { y: 0.6 }
    });

    // GSAP Card Animation
    gsap.from(".glass",{
        scale:0.8,
        opacity:0,
        duration:1,
        ease:"back.out(1.7)"
    });

});
//==============================
// LOVE LETTER
//==============================

const loveLetter=document.getElementById("loveLetter");

const closeLetter=document.getElementById("closeLetter");

celebrateBtn.addEventListener("click",()=>{

setTimeout(()=>{

loveLetter.classList.add("show");

},2500);

});

closeLetter.addEventListener("click",()=>{

loveLetter.classList.remove("show");

});
//===============================
// MUSIC PLAYER
//===============================

const music=document.getElementById("bgMusic");

const musicBtn=document.getElementById("musicBtn");

let playing=false;

musicBtn.addEventListener("click",()=>{

if(!playing){

music.play();

musicBtn.innerHTML="⏸ Pause Music";

playing=true;

}

else{

music.pause();

musicBtn.innerHTML="🎵 Play Music";

playing=false;

}

});
/* ===========================
   PREMIUM CONFETTI SHOW
=========================== */

function startCelebration() {

    const duration = 5000;
    const end = Date.now() + duration;

    (function frame() {

        confetti({
            particleCount: 4,
            angle: 60,
            spread: 70,
            origin: { x: 0 }
        });

        confetti({
            particleCount: 4,
            angle: 120,
            spread: 70,
            origin: { x: 1 }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }

    })();

}
//============================
// GIFT BOX
//============================

const gift=document.getElementById("giftBox");

gift.addEventListener("click",()=>{

gift.classList.toggle("open");

});
//===============================
// ENVELOPE
//===============================

const envelope = document.getElementById("envelope");

envelope.addEventListener("click",()=>{

    envelope.classList.toggle("open");

    setTimeout(()=>{

        loveLetter.classList.add("show");

    },700);

});

//==================================
// GLOWING ORBS
//==================================

function createOrb(){

const orb=document.createElement("div");

orb.className="orb";

const size=20+Math.random()*60;

orb.style.width=size+"px";
orb.style.height=size+"px";

orb.style.left=Math.random()*100+"vw";

orb.style.bottom="-100px";

orb.style.background=
`hsla(${260+Math.random()*60},100%,70%,.45)`;

orb.style.animationDuration=
(10+Math.random()*10)+"s";

document
.getElementById("orbs")
.appendChild(orb);

setTimeout(()=>{

orb.remove();

},20000);

}

setInterval(createOrb,500);
//==================================
// CURSOR GLOW
//==================================

const cursor=document.getElementById("cursorGlow");

document.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px";

cursor.style.top=e.clientY+"px";

});

//==================================
// SHOOTING STARS
//==================================

function shootingStar(){

const star=document.createElement("div");

star.className="shooting-star";

star.style.top=Math.random()*40+"vh";

star.style.left=(80+Math.random()*20)+"vw";

document.body.appendChild(star);

setTimeout(()=>{

star.remove();

},1600);

}

setInterval(shootingStar,4000);

//==================================
// ROSE RAIN
//==================================

function createRose(){

const rose=document.createElement("div");

rose.className="rose";

rose.innerHTML="🌹";

rose.style.left=Math.random()*100+"vw";

rose.style.animationDuration=
(6+Math.random()*6)+"s";

document
.getElementById("roseContainer")
.appendChild(rose);

setTimeout(()=>{

rose.remove();

},12000);

}

setInterval(createRose,600);

//==================================
// HEART EXPLOSION
//==================================

document.addEventListener("click",(e)=>{

for(let i=0;i<8;i++){

const heart=document.createElement("div");

heart.className="heartBurst";

heart.innerHTML="💜";

heart.style.left=
(e.clientX+(Math.random()*80-40))+"px";

heart.style.top=
(e.clientY+(Math.random()*80-40))+"px";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},900);

}

});