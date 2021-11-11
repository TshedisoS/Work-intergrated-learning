var selectedRow = null;
function onFormSubmit(){
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow===null){
        insertNewRecord(formData);
    }
    else{
      updateRecord(formData);
    }
    resertForm();
}
//Retrieve the data
function readFormData(){
    var formData = {};
    formData["id"]=document.getElementById("id").value;
    formData["membername"]=document.getElementById("membername").value;
    formData["complaint"]=document.getElementById("complaint").value;
    formData["date"]=document.getElementById("date").value;
    formData["appeal"]=document.getElementById("appeal").value;
    formData["status"]=document.getElementById("status").value;

    return formData;  
}

//insert the data
function insertNewRecord(data){
 var table = document.getElementById('storeList').getElementsByTagName('tbody')[0];
 var newRow = table.insertRow(table.length);
 var cell1 = newRow.insertCell(0)
     cell1.innerHTML = data.id;
 var cell2 = newRow.insertCell(1)
     cell2.innerHTML = data.membername;   
  var cell3 = newRow.insertCell(2)
      cell3.innerHTML = data.complaint;
  var cell4 = newRow.insertCell(3)
      cell4.innerHTML = data.date;
  var cell5 = newRow.insertCell(4)
      cell5.innerHTML = data.appeal;
  var cell6 = newRow.insertCell(5)
      cell6.innerHTML = data.status;
  var cell7 = newRow.insertCell(6)
      cell7.innerHTML = " <button onClick='onEdit(this)'>Edit</button> <button onClick='onDelete(this)'>Delete</button>"
}
//Edit the data function
function onEdit(td){
    selectedRow=td.parentElement.parentElement;
    document.getElementById('id').value=selectedRow.cells[0].innerHTML;
    document.getElementById('membername').value=selectedRow.cells[1].innerHTML;
    document.getElementById('complaint').value=selectedRow.cells[2].innerHTML;
    document.getElementById('date').value=selectedRow.cells[3].innerHTML;
    document.getElementById('appeal').value=selectedRow.cells[4].innerHTML;
    document.getElementById('status').value=selectedRow.cells[5].innerHTML;
}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.membername;
    selectedRow.cells[1].innerHTML = formData.complaint;
    selectedRow.cells[2].innerHTML = formData.date;
    selectedRow.cells[3].innerHTML = formData.appeal;
    selectedRow.cells[4].innerHTML = formData.status;
    selectedRow.cells[5].innerHTML = formData.status;
}

//Delete the data
function onDelete(td){
    if(confirm('Do you want to delete this record?')){
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
    }
    resertForm();
}

//Reset the data
function resertForm(){
    document.getElementById('id').value="";
    document.getElementById('membername').value="";
    document.getElementById('complaint').value="";
    document.getElementById('date').value="";
    document.getElementById('appeal').value="";
    document.getElementById('status').value="";
}