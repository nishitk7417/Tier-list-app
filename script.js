function drag(e) {
    e.dataTransfer.setData("img", e.target.id);
}
function allowDrop(e) {
    e.preventDefault();
}
function drop(e) {
    e.preventDefault();
    var data = e.dataTransfer.getData("img");
    e.currentTarget.appendChild(document.getElementById(data));
}