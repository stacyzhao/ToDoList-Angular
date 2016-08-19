var app = angular.module('taskApp', []);

app.service('TaskService', function(){
  var id = 4;

  var tasks = [
    {
      id: 0,
      title: 'Dinner with jackie and brian',
      description: '',
      createdOn: 1397490980837,
      complete: false
    }, {
      id: 1,
      title: 'Lunch with mom',
      description: '',
      createdOn: 1397490980837,
      complete: false
    }, {
      id: 2,
      title: 'Clean and clear closet',
      description: '',
      createdOn: 1397490980837,
      complete: false
    }, {
      id: 3,
      title: 'hand in papers',
      description: '',
      createdOn: 1397490980837,
      complete: false
    }
  ];

  this.addTask = function(task){
    task.id = id++;
    task.createdOn = Date.now();
    task.complete = false;
    tasks.push(task);
  };

  this.deleteTask = function(id){
    for (task in tasks) {
      if (tasks[task].id == id){
        tasks.splice(task, 1);
      }
    }
  };

  this.getTasks = function() {
    return tasks;
  };
});

app.controller('TaskController', function($scope, TaskService){
  $scope.tasks = TaskService.getTasks();

  $scope.addTask = function(){
    TaskService.addTask($scope.newTask);
    $scope.newTask = {};
  };

  $scope.deleteTask = function(id){
    TaskService.deleteTask(id);
    if ($scope.newTask.id == id) $scope.newTask = {};
  }
});
