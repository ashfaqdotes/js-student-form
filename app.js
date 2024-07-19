let fName = document.getElementById('fname');
let lName = document.getElementById('lname');
let tableData = document.getElementById('table');
let serialCounter = 1;
let rollCounter = 213321
let counter = 0;

function genRollNum() {
  return rollCounter++;
}

function genSerialNum() {
  return serialCounter++;
}
function addStudent() {
  if (fName.value != '' && lName.value != '') {
    let rollNum = genRollNum();
    let serialNum = genSerialNum();
    let rowId = `row-${counter}`;

    tableData.innerHTML += `<tr id="${rowId}">
      <td>${serialNum}</td>
      <td>${fName.value}</td>
      <td>${lName.value}</td>
      <td>${rollNum}</td>
      <td><button onclick='remove("${rowId}")' type='button' class='btn btn-danger'>DELETE</button>
      <button id="edit-btn-${counter}" onclick='toEdit("${counter}")' type='button' class='btn btn-warning'>Edit</button></td>
    </tr>`;

    counter += 1;
    fName.value = '';
    lName.value = '';
  } else {
    alert('Please Enter Data in Blank Fields');
  }
}

function remove(id) {
  let itemToDelete = document.getElementById(id);
  itemToDelete.remove();
}

function toEdit(id) {
  let itemText = document.getElementById(`text-${id}`);
  let newText = prompt('Type to Edit:', itemText.textContent);
  if (newText !== null && newText.trim() !== '') {
    itemText.textContent = newText;
  }
}