﻿/* --ToDo-- Van egy uncaught hiba üzenet de a működést nem befolyásolja
A kérdések vége a vége legyen probléma nincs megoldva körbe mennek a kérdések*/

var kérdések;
//var kérdés =0 ;
var sorszám = 1;
var jóVálasz;

var hotList = [];          
var questionsInHotList = 7;
var displayedQuestion;     
var numberOfQuestions;     
var nextQuestion = 1;
var timeoutHandler;

window.onload = () => {
    //letöltés();
    kérdésBetöltés(sorszám);
    init();

    document.getElementById("Következő").onclick = () => {

        előre();

        //sorszám++;
        //if (sorszám == kérdések.length) {
        //    sorszám = 0;
        //}
        //kérdésMegjelenítése(sorszám);
        //kérdésBetöltés(sorszám);
    }

    //document.getElementById("Vissza").onclick = () => {
    //    sorszám--;
    //    //if (sorszám < 0) {
    //    //    sorszám = kérdések.length - 1;
    //    //}
    //    //kérdésMegjelenítése(sorszám);
    //    kérdésBetöltés(sorszám);
    //}
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

//function kérdésBetöltés(id) {
//    fetch(`/questions/${id}`)
//        .then(response => {
//            if (!response.ok) {
//                console.error(`Hibás válasz: ${response.status}`)
//            }
//            else {
//                return response.json()
//            }
//        })
//        .then(kérdésMegjelenítése);
//}

//function letöltésBefejeződött(d) {
//    console.log("Sikeres letöltés")
//    console.log(d)
//    kérdések = d;
//    kérdésMegjelenítése(kérdés);
//}

function kérdésBetöltés(questionNumber, destination) {
    fetch(`/questions/${questionNumber}`)
        .then(
            result => {
                if (!result.ok) {
                    console.error(`Hibás letöltés: ${response.status}`)
                }
                else {
                    return result.json()
                }
            }
        )
        .then(
            q => {
                hotList[destination].question = q;
                hotList[destination].goodAnswers = 0;
                console.log(`A ${questionNumber}. kérdés letöltve a hot list ${destination}. helyére`)
                if (displayedQuestion == undefined && destination == 0) {
                    displayedQuestion = 0;
                    kérdésMegjelenítése();
                }
            }
        );
}

function init() {
    for (var i = 0; i < questionsInHotList; i++) {
        let q = {
            question: {},
            goodAnswers: 0
        }
        hotList[i] = q;
    }

    for (var i = 0; i < questionsInHotList; i++) {
        kérdésBetöltés(nextQuestion, i);
        nextQuestion++;
    }
}

function előre() {
    displayedQuestion++;
    clearTimeout(timeoutHandler)
    if (displayedQuestion == questionsInHotList) displayedQuestion = 0;
    kérdésMegjelenítése()
}

function kérdésMegjelenítése(/*kérdés*/) {
    let kérdés = hotList[displayedQuestion].question;
    console.log(kérdés);
    document.getElementById("kérdés_szöveg").innerHTML = kérdés.questionText;
    //document.getElementById(`válasz1`).style.pointerEvents = "none"->további katintás tíltás, többi elemre is kellene
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

    timeoutHandler = setTimeout(előre, 3000);//ez az időzítő elég gyors
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