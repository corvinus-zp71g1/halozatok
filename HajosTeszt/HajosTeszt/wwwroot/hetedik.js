var kérdések;
var kérdés =0 ;
var sorszám = 0;

window.onload = () => {
    letöltés();

    document.getElementById("Következő").onclick = () => {
        sorszám++;
        if (sorszám == kérdések.length) {
            sorszám = 0;
        }
        kérdésMegjelenítése(sorszám);
    }

    document.getElementById("Vissza").onclick = () => {
        sorszám--;
        if (sorszám < 0) {
            sorszám = kérdések.length - 1;
        }
        kérdésMegjelenítése(sorszám);
    }
}

function letöltés() {
    fetch('/questions.json')
        .then(response => response.json())
        .then(data => letöltésBefejeződött(data)
    );
}

function letöltésBefejeződött(d) {
    console.log("Sikeres letöltés")
    console.log(d)
    kérdések = d;
    kérdésMegjelenítése(kérdés);
}

function kérdésMegjelenítése(kérdés) {
    document.getElementById("kérdés_szöveg").innerHTML = kérdések[kérdés].questionText;
    document.getElementById("válasz1").innerHTML = kérdések[kérdés].answer1;
    document.getElementById("válasz2").innerHTML = kérdések[kérdés].answer2;
    document.getElementById("válasz3").innerHTML = kérdések[kérdés].answer3;
    document.getElementById("kép1").src = "https://szoft1.comeback.hu/hajo/" + kérdések[kérdés].image;
    document.getElementById("válasz1").classList.remove("jó");
    document.getElementById("válasz1").classList.remove("rossz");
    document.getElementById("válasz2").classList.remove("jó");
    document.getElementById("válasz2").classList.remove("rossz");
    document.getElementById("válasz3").classList.remove("jó");
    document.getElementById("válasz3").classList.remove("rossz");
}

function válasz(v){
    if (v == kérdések[kérdés].correctAnswer) {
        document.getElementById("válasz" + v).classList.add("jó")
    }
    else {
        document.getElementById("válasz" + v).classList.add("rossz")
    }
}