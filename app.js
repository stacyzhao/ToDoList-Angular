var app = angular.module('taskApp', ["firebase"]);

app.service('TaskService', function(){
  var id = 4;

  // var tasks = [
  //   {
  //     id: 0,
  //     title: 'Dinner with jackie and brian',
  //     description: '',
  //     createdOn: 1394490980834,
  //     complete: false
  //   }, {
  //     id: 1,
  //     title: 'Lunch with mom',
  //     description: '',
  //     createdOn: 1397490980834,
  //     complete: false
  //   }, {
  //     id: 2,
  //     title: 'Clean and clear closet',
  //     description: '',
  //     createdOn: 1394490980834,
  //     complete: false
  //   }, {
  //     id: 3,
  //     title: 'hand in papers',
  //     description: '',
  //     createdOn: 1394490980834,
  //     complete: false
  //   }
  // ];

  this.addTask = function(task){

    task.$add({
      title: task.title,
      id: id++,
      complete: false,
      createdOn: Date.now()
    });

    // if (task.id == null){
    //   task.id = id++;
    //   task.createdOn = Date.now();
    //   task.complete = false;
    //   console.log(task)
    //   task.$add(task);
    // } else {
    //   for (i in tasks) {
    //     if (tasks[i].id == task.id){
    //       tasks[i] = task
    //     }
    //   }
    // }
  };

  this.editTask = function(task){
    for (i in task) {
      // if (tasks[i].id == id) {
      //   return tasks[i]
      // }
    }
  };

  this.deleteTask = function(task){
    task.$remove(task);
    // for (task in tasks) {
    //   if (tasks[task].id == id){
    //     tasks.splice(task, 1);
    //   }
    // }
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
      TaskService.addTask($scope.tasks);
    }
    $scope.tasks = $firebaseArray(ref);
  };

  $scope.editTask = function(tasks){
    $scope.tasks = angular.copy(TaskService.editTask($scope.tasks));
  };

  $scope.deleteTask = function(task){
    console.log("1" + task)
    TaskService.deleteTask(task);
    $scope.newTask = {};
  };
});
