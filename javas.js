selectedRow = null;

function onFormSubmit(){
    var formData = readFormData();
    
    if(selectedRow == null){
        insertNewRec(formData);
    }
    else
        updateRecord(formData);
    resetForm();

}

function readFormData(){
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["empCode"] = document.getElementById("empCode").value; 
    formData["salary"] = document.getElementById("salary").value;
    formData["city"] = document.getElementById("city").value;

    return formData;
}

function insertNewRec(data){
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    
    var newRow = table.insertRow(table.length);

    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;

    cell2 = newRow.insertCell(1);
    cell2.innerHTML= data.empCode;

    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.salary;

    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.city;

    cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onCLick="onDelete(this)">Delete</a>`;         // `` backticks 
}

function resetForm(){
    document.getElementById("fullName").value = "";
    document.getElementById("empCode").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("city").value = "";
}

function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("empCode").value = selectedRow.cells[1].innerHTML;
    document.getElementById("salary").value = selectedRow.cells[2].inncerHTML;
    document.getElementById("city").value = selectedRow.cells[3].innerHTML;
}

function onDelete(td){
    if(confirm("Are u sure, to delete this record: ")){
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);

        resetForm();    
    }
}



function updateRecord(formData){

    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.empCode;
    selectedRow.cells[2].innerHTML = formData.salary;
    selectedRow.cells[3].innerHTML = formData.city;
}