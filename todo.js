const todoList = [];

    function displayTodos() {
      const listContainer = document.getElementById("todoList");
      listContainer.innerHTML = "";

      for (let i = 0; i < todoList.length; i++) {
        const todoobject = todoList[i];
        const {name, date} = todoobject;
        const listItem = document.createElement("li");
        listItem.innerHTML = `
          <p class='listoutput'>${name}
          ${date}
          <button class='delbutton' onclick="deleteTodo(${i})">Delete</button>
          </p>
          `;
        listContainer.appendChild(listItem);
      }
    }

    function addTodo() {
      const Date = document.getElementById("dueDate");
      const dueDate=Date.value.trim();
      console.log(dueDate);
      const todoInput = document.getElementById("todoInput");
      const newTodo = todoInput.value.trim();

      if (newTodo !== "") {
        todoList.push({name:newTodo,date:dueDate});
        todoInput.value = "";
        displayTodos();
      }
    }

    function deleteTodo(index) {
      todoList.splice(index, 1);
      displayTodos();
    }