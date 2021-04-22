var kérdések;
var kérdés =0 ;
var sorszám = 1;
var jóVálasz;

window.onload = () => {
    //letöltés();
    kérdésBetöltés(sorszám);

    document.getElementById("Következő").onclick = () => {
        sorszám++;
        //if (sorszám == kérdések.length) {
        //    sorszám = 0;
        //}
        //kérdésMegjelenítése(sorszám);
        kérdésBetöltés(sorszám);
    }

    document.getElementById("Vissza").onclick = () => {
        sorszám--;
        //if (sorszám < 0) {
        //    sorszám = kérdések.length - 1;
        //}
        //kérdésMegjelenítése(sorszám);
        kérdésBetöltés(sorszám);
    }
}

//function letöltés() {
//    //fetch('/questions.json')
//    //    .then(response => response.json())
//    //    .then(data => letöltésBefejeződött(data)
//    //);
//
//    fetch('/questions/4')
//        .then(response => response.json())
//        .then(data => kérdésMegjelenítése(data)
//        );
//}

function kérdésBetöltés(id) {
    fetch(`/questions/${id}`)
        .then(response => {
            if (!response.ok) {
                console.error(`Hibás válasz: ${response.status}`)
            }
            else {
                return response.json()
            }
        })
        .then(kérdésMegjelenítése);
}

//function letöltésBefejeződött(d) {
//    console.log("Sikeres letöltés")
//    console.log(d)
//    kérdések = d;
//    kérdésMegjelenítése(kérdés);
//}

function kérdésMegjelenítése(kérdés) {
    document.getElementById("kérdés_szöveg").innerHTML = kérdés.questionText;
    document.getElementById("válasz1").innerHTML = kérdés.answer1;
    document.getElementById("válasz2").innerHTML = kérdés.answer2;
    document.getElementById("válasz3").innerHTML = kérdés.answer3;
    //document.getElementById("kép1").src = "https://szoft1.comeback.hu/hajo/" + kérdés.image;
    if (!kérdés.image == "") {
        document.getElementById("kép1").src = "https://szoft1.comeback.hu/hajo/" + kérdés.image;
    }
    else {
        document.getElementById("kép1").src = ""
    }
    jóVálasz = kérdés.correctAnswer;
    document.getElementById("válasz1").classList.remove("jó");
    document.getElementById("válasz1").classList.remove("rossz");
    document.getElementById("válasz2").classList.remove("jó");
    document.getElementById("válasz2").classList.remove("rossz");
    document.getElementById("válasz3").classList.remove("jó");
    document.getElementById("válasz3").classList.remove("rossz");
}

function válasz(v) {
    console.log(jóVálasz)
    console.log(v)
    if (v == jóVálasz) {
        document.getElementById("válasz" + v).classList.add("jó")
    }
    else {
        document.getElementById("válasz" + v).classList.add("rossz")
    }
}