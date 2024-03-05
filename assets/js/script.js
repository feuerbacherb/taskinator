var formE1 = document.querySelector("#task-form");
var tasksToDoE1 = document.querySelector("#tasks-to-do");
var taskIdCounter = 0;

var taskFormHandler = function (e) {
  e.preventDefault();

  var taskNameInput = document.querySelector("input[name='task-name']").value;
  var taskTypeInput = document.querySelector("select[name='task-type']").value;
  console.dir(taskNameInput);

  if (!taskNameInput || !taskTypeInput) {
    alert("You need to fill out the task form!");
    return false;
  }

  var taskDataObj = {
    name: taskNameInput,
    type: taskTypeInput,
  };

  createTaskE1(taskDataObj);
};

var createTaskE1 = function (taskDataObj) {
  var listItemE1 = document.createElement("li");
  listItemE1.className = "task-item";

  // add task id as a custom attribute
  listItemE1.setAttribute("data-task-id", taskIdCounter);

  var taskInfoE1 = document.createElement("div");
  taskInfoE1.className = "task-info";
  taskInfoE1.innerHTML =
    "<h3 class='task-name'>" +
    taskDataObj.name +
    "</h3><span class='task-type'>" +
    taskDataObj.type +
    "</span>";
  listItemE1.appendChild(taskInfoE1);

  tasksToDoE1.appendChild(listItemE1);

  // increase task counter for next unique id
  taskIdCounter++;
};

formE1.addEventListener("submit", taskFormHandler);
