debugger
function renderEditor(){
    let inputEl = document.querySelector("#defult-todo-panel .todo-editor > input");

    inputEl.onchange=(e) =>{
        console.log("input change:",e);
    }
}

renderEditor();