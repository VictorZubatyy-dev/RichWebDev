
function addNote() {
    var x = document.getElementById("note").value;
    var list_item = document.createElement("li"); 

    list_item.setAttribute("id", Math.random());
    list_item.setAttribute("style", "border:0.5px solid red")
    var p_text = document.createTextNode(x);
    list_item.appendChild(p_text)
    document.getElementById("notes").append(list_item)

    var c = document.createElement("button"); 
    c.setAttribute("id", "edit_button");
    var list_id = list_item.getAttribute("id")
    c.setAttribute("onclick", "editNote" + "(" + list_id + ")")
    c.setAttribute("className", list_item.getAttribute("id"))
    c.innerHTML = "Edit";
    document.getElementById("notes").append(c)

    var d = document.createElement("button"); 
    d.setAttribute("id", "delete_button");
    var list_id = list_item.getAttribute("id")
    d.setAttribute("onclick", "deleteNote" + "(" + list_id + ")")
    d.setAttribute("className", list_item.getAttribute("id"))
    d.innerHTML = "Delete";
    document.getElementById("notes").append(d)
  }

function deleteNote(list_id) {
    var list_item_id = document.getElementById(list_id);
    console.log(list_item_id)
    var delete_button = document.getElementById("delete_button");
    var edit_button = document.getElementById("edit_button");
    list_item_id.remove();
    delete_button.remove();
    edit_button.remove();
}

function editNote(list_id){
    var list_item_id = document.getElementById(list_id);
    var x = document.getElementById("note").value;
    list_item_id.innerText = x;
    console.log(x)
    console.log(list_item_id)
}