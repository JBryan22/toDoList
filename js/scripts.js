//business logic
function ToDoList(taskName, when, description, priority){
  this.taskName = taskName;
  this.whenToDo = when;
  this.taskDescription = description;
  this.priority = priority;
}
ToDoList.prototype.fullTask = function(){
  return this.taskName + " on " + this.whenToDo;
}

$(document).ready(function(){
  $("form#new-task").submit(function(event){
    event.preventDefault();

    var taskName = $("#new-task-name").val();
    var when = $("#when").val();
    var description = $("#description").val();
    var priority = $("#task-priority").val();

    var toDoList = new ToDoList(taskName, when, description, priority);

    $("#todoList").append("<li> <span class='fakeLink'> " + toDoList.fullTask() + "</span> </li>");

    $("#todoList li").last().click(function(){

      $("#show-todoList").show();
      $("#show-todoList h2").text(toDoList.fullTask());     $(".new-task-name").text(taskName);
      $(".when").text(when);
      $(".description").text(description);
      $(".task-priority").text(priority);
    });

    $("#delete").last().click(function(){
      $("#show-todoList").hide();
      $("#todoList li").remove();
    })

    $("#new-task-name").val('');
    $("#when").val('');
    $("#description").val('');
    $("#task-priority").val('');

  });
});
