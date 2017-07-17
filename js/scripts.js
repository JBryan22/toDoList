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
    //var toDoListArr = [];
    var taskName = $("#new-task-name").val();
    var when = $("#when").val();
    var description = $("#description").val();
    var priority = $("#task-priority").val();

    var toDoList = new ToDoList(taskName, when, description, priority);

//
    // toDoListArr.push(toDoList);
    // for (var i = 0; i < toDoListArr.length; i++) {
    //   $("#todoList").append("<li> <span class='fakeLink'> " + toDoListArr[i].fullTask() + "</span> </li>");
    //
    // }
//
    $("#todoList").append("<li> <span class='fakeLink'> " + toDoList.fullTask() + "</span> </li>");

    $("#todoList li").last().click(function(){
      $("#show-todoList").show();
      $("#show-todoList h2").text(toDoList.fullTask());     $(".new-task-name").text(taskName);
      $(".when").text(when);
      $(".description").text(description);
      $(".task-priority").text(priority);
      // var index = $("#todoList li").indexOf(this);e
      var itemToRemove = this;
      $("#delete").off("click");
      $("#delete").click(function(){
        $("#show-todoList").hide();
        itemToRemove.remove();
      });
    });

  //  $("#delete").last().click(function(){

//       //
// debugger;
//        var dtName = $(".new-task-name").val();
//        var dWhen = $(".when").val();
//        var dDescription = $(".description").val();
//        var dPriority = $(".task-priority").val();
//        var elementToDelete = new ToDoList(dtName, dWhen, dDescription, dPriority);
//        var indexToDelete = toDoListarr.indexOf(elementToDelete);
//        toDoListarr.splice(indexToDelete, 1);
//
//        for (var i = 0; i < toDoListArr.length; i++) {
//          $("#todoList").append("<li> <span class='fakeLink'> " + toDoListArr[i].fullTask() + "</span> </li>");
//
//        }
//
//       //

    //   $("#show-todoList").hide();
    //   $("#todoList li").remove();
    // })

    $("#new-task-name").val('');
    $("#when").val('');
    $("#description").val('');
    $("#task-priority").val('');

  });
});
