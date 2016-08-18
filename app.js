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

  this.getTask = function() {
    return tasks;
  }

});

app.controller('TaskController', function($scope, TaskService){
  $scope.tasks = TaskService.getTask();

  $scope.addTask = function(){
    TaskService.addTask($scope.newTask);
    $scope.newTask = {};
  };
});

// app.controller('deleteController', function(){
//   this.filterTask = function(){
//
//
//     // this.evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
//     this.tasks = _.filter(tasks, function(task){
//       return task.complete == false;
//     });
//     console.log(this.tasks)
//   }
// });
