function AddTask(){

    let input = document.getElementById("input");

    const newDiv = document.createElement("div");
    const checkBox = document.createElement("input");
    const edit = document.createElement("button");
    const del = document.createElement("button");

    newDiv.id = "newDiv";
    let enteredText = input.value;
    newDiv.textContent = enteredText;

    checkBox.type = "checkbox";
    edit.textContent = "Edit";
    edit.onclick = () => {
        enteredText = window.prompt("Enter the task:");
        newDiv.textContent = enteredText;
        del.textContent = "Delete";
        del.onclick = ()=>{
        newDiv.remove();
    };
        checkBox.type = "checkbox";
        newDiv.appendChild(checkBox);
        newDiv.appendChild(edit);
        newDiv.appendChild(del);
    };

    del.textContent = "Delete";
    del.onclick = ()=>{
        newDiv.remove();
    };

    document.getElementById("box").append(newDiv);
    newDiv.appendChild(checkBox);
    newDiv.appendChild(edit);
    newDiv.appendChild(del);
}