var app = angular.module('taskApp', ["firebase"]);

app.service('TaskService', function(){
  var id = 0;

  this.addTask = function(task, tasks){
    if (task.$id == null){
      tasks.$add({
        title: task.title,
        id: id++,
        complete: false,
        createdOn: Date.now()
      });
    } else {
      console.log("Updating")
      tasks.$save(task).then(function(){
        console.log("Updated");
        }, function(error){
          console.log("Didn't Work")
        });
      console.log(tasks)
    }
  };

  this.getTasks = function(tasks) {
    return new Promise(function(resolve, reject) { resolve(tasks); });
  };
});

app.controller('TaskController', function(TaskService, $scope, $firebaseArray) {

  var ref = new Firebase('https://to-do-list-8c645.firebaseio.com/tasks')
  $scope.tasks = $firebaseArray(ref);

  var promise = TaskService.getTasks($scope.tasks);

  promise.then(function(tasks){
    $scope.getTasks = tasks;
  });

  $scope.addTask = function(){
    if ($scope.taskForm.$valid){
      TaskService.addTask($scope.newTask, $scope.tasks);
    }
    $scope.newTask = '';
  };

  $scope.editTask = function(id){
    $scope.newTask = $scope.tasks.$getRecord(id);
  };

  $scope.deleteTask = function(task){
    $scope.tasks.$remove(task).then(function(){
      console.log("Task removed")
    });
  };
});
