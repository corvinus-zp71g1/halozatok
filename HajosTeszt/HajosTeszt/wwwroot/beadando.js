var hallgatos = [];
var hallgatoszam = 0;

window.onload = () => {
    loadItems();
}

function loadItems() {
    fetch('/api/hallgatos/count')
        .then(response => response.json())
        .then(
            itemsCount => {
                hallgatoszam = itemsCount;
                fetch('/api/hallgatos/all')
                    .then(response => response.json())
                    .then(data => loadingFinished(data));
            }
        );
}

function loadingFinished(items) {
    console.log("Sikeres letöltés")
    console.log(items)
    hallgatos = items;

    document.getElementById("subContainer").innerHTML = "";
    for (var i = 0; i < hallgatoszam; i++) {
        document.getElementById("subContainer").innerHTML += `<div class="hallgatok">
            <div class="lista">
                ${hallgatos[i].nev}
        </div>
            <div class="kattintható gomb">
                <div>
                    <i onclick="deleteItem(${hallgatos[i].id})" class="material-icons">delete</i>
                </div>
            </div>
        </div>`;
    }
}

function addItem() {
    let data = {
        nev: document.getElementById('nev').value,
    }
    document.getElementById('nev').value = "";
    console.log(data);
    fetch("api/hallgatos",
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
    ).then(setTimeout(function () { loadItems(); }, 1000));

}

function deleteItem(id) {

    fetch('api/hallgatos/' + id, {
        method: 'DELETE',
    }).then(setTimeout(function () { loadItems(); }, 1000));

}