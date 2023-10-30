function addContact() {
    validateForm()
}

function validateForm(){
    error = validateName()
    
    if (!error)
    {
        error = validateNumber(error)
        if(!error){
            error = validateEmail(error)
            if (!error){
                addContactAfterValidation()
            }
        }
    }
  }

function validateName(){
    error = false
    let nameRegex = /^[a-zA-Z\s]+$/;
    let contactName = document.forms["contactForm"]["contactName"].value;
    var errorMsg = document.getElementById("error")

    if (contactName == ""){
        errorMsg.innerText = 'Error - name is empty'
        error = true
    }

    else if (!nameRegex.test(contactName)){
        errorMsg.innerText = 'Error - Only alphabets and spaces allowed for name.'
        error = true
    }

    else if(contactName.length > 20){
        errorMsg.innerText = 'Error - Name should not be greater than 20 characters.'
        error = true
    }

    return error
}

function validateNumber(error){
    let mobileNumberRegex = /^[0-9]+$/;
    let mobileNumber = document.forms["contactForm"]["mobileNumber"].value;
    
    var errorMsg = document.getElementById("error")

    if (mobileNumber == ""){
        errorMsg.innerText = 'Error - Mobile number is empty.'
        error = true
    }

    else if (!mobileNumberRegex.test(mobileNumber)){
        errorMsg.innerText = 'Error - Only numbers are allowed.'
        error = true
    }

    else if(mobileNumber.length != 10){
        errorMsg.innerText = 'Error - Mobile numer must be 10 digits only.'
        error = true
    } 

    return error
}

function validateEmail(error){  
    let email = document.forms["contactForm"]["email"].value;
    var errorMsg = document.getElementById("error")

    if (email == ""){
        errorMsg.innerText = 'Error - Email is empty.'
        error = true
    }

    else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
        errorMsg.innerText = 'Error - Invalid email.'
        error = true
    }

    else if(email.length > 40){
        errorMsg.innerText = 'Error - Email should be less than 40 characters.'
        error = true
    } 
    return error
}

function addContactAfterValidation(){
    let contactName = document.forms["contactForm"]["contactName"].value;
    let mobileNumberValue = document.forms["contactForm"]["mobileNumber"].value;
    let emailValue = document.forms["contactForm"]["email"].value;

    var row = document.createElement("tr"); 
    var cell1 = document.createElement("td"); 
    var cell2 = document.createElement("td"); 
    var cell3 = document.createElement("td"); 


    cell1.innerText = contactName
    row.appendChild(cell1)
    phoneBookTableBody.appendChild(row)

    cell2.innerText = mobileNumberValue
    row.appendChild(cell2)
    phoneBookTableBody.appendChild(row)

    cell3.innerText = emailValue
    row.appendChild(cell3)
    phoneBookTableBody.appendChild(row)

    // reset form values
    document.forms["contactForm"]["contactName"].value = '';
    document.forms["contactForm"]["mobileNumber"].value = '';
    document.forms["contactForm"]["email"].value = '';
}

function sortTable(){
    let rows, switching, i, first, second, shouldSwitch, sortingDirection, switchcount = 0;
    let table = document.getElementById("phoneBookTable");
    switching = true;
    sortingDirection = "ascending"; 
    
    // only break out of while loop if more switching to be done
    while (switching) {
      switching = false;
      rows = table.rows;
      
      // ensure we dont go out of bounds
      for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        // first row
        first = rows[i].getElementsByTagName("td")[0];
        // second row
        second = rows[i + 1].getElementsByTagName("td")[0]; 
        if (sortingDirection == "ascending") {
          if (first.innerHTML.toLowerCase() > second.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        } 
        
        else if (sortingDirection == "descending") {
          if (first.innerHTML.toLowerCase() < second.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        }
      }

      if (shouldSwitch) {
        // insert the smaller one before the bigger one
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        switchcount ++; 
      } 

      else {
        // if no more switching to be done and its been sorted ascending, continuing sorting in descending
        if (switchcount == 0 && sortingDirection == "ascending") {
          sortingDirection = "descending";
          switching = true;
        }
      }
    }
}