console.log("fut")

window.onload = () => {
    console.log("betöltődött")
    /*első*/
    let hova = document.getElementById("ide");
    for (var s = 0; s < 10; s++) {
        let sor = document.createElement("div");
        sor.classList.add("sor");
        hova.appendChild(sor);

        for (var o = 0; o < 10; o++) {
            let szám = document.createElement("div");
            szám.classList.add("elem");
            szám.innerText = (s + 1) * (o + 1);
            sor.appendChild(szám);
            szám.style.background = `rgb(${255-255 / 10 * s}, 0 , ${255-255 / 10 * o})`
        }
    }
    /*második*/
    let lerak = document.getElementById("pascal");
    for (var s = 0; s < 10; s++) {
        let sor = document.createElement("div");
        sor.classList.add("sor");
        lerak.appendChild(sor);

        for (var o = 0; o <= s; o++) {
            let szám = document.createElement("div");
            szám.classList.add("elem");
            szám.innerText = faktoriálisR(s) / (faktoriálisR(o) * faktoriálisR(s-o));
            sor.appendChild(szám);
        }
    }    
}

var faktoriális = function (n) {
    let eredmény = 1
    for (var i = 2; i <= n; i++) {
        eredmény = eredmény * i;
    }
    return eredmény;
}

var faktoriálisR = (n) => {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * faktoriálisR(n - 1);
    }
}

for (var i = 0; i < 10; i++) {
    console.log(`${i} : ${faktoriálisR}`)
}

