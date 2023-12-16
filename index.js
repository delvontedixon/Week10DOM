let id = 0;

document.getElementById("add").addEventListener("click", () => {
  let table = document.getElementById("list");
  let row = table.insertRow(1);
  row.setAttribute("id", `item-${id}`);
  row.insertCell(0).innerHTML = document.getElementById("new-name").value;
  let actions = row.insertCell(1);
  actions.appendChild(createDeleteButton(id++));
  document.getElementById("new-name").value = "";
});

function createDeleteButton(id) {
  let btn = document.createElement("button");
  btn.className = "btn btn-primary";
  btn.id = id;
  btn.innerHTML = "Delete";
  btn.onclick = () => {
    console.log(`Deleting row with id: item-${id}`);
    let elementToDelete = document.getElementById(`itemlet -${id}`);
    elementToDelete.parentNode.removeChild(elementToDelete);
  };
  return btn;
}
