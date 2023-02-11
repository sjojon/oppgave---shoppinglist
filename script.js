//model
let list = [];
let onChange;


//view
view()
function view() {
    let html = /*html*/ `
    <h1>Handleliste:</h1>
    <input type="text" onchange="addItem(this.value)">
    <button onclick="addItem">Legg til</button>
    `;
    for (i = 0; list.length > i; i++) {
        html += /*html*/`
        <li> ${list[i]}</li><br>
        <button onclick="removeItem(${i})">Slett</button>
        <button onclick="changeItem">Forandre</button>
        <input type="text" onchange="changeItem(this.value, ${i})">
        `

    }
    document.getElementById('app').innerHTML = html;
}

//controller
function addItem(liste) {
    list.push(liste);
    view()
}

function removeItem(liste) {
    list.splice(liste, 1);
    view()
}

function changeItem(onChange, index) {
    list[index] = onChange;
    view()
}