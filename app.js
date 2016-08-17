var app = angular.module('taskApp', []);

app.controller('taskListController', function(){
  this.tasks = tasks;
});

app.controller('taskController', function (){
  this.task = {};
  this.addTask = function(title){
    this.task.createdOn = Date.now();
    this.task.complete = false;
    tasks.push(this.task);
    this.task = {};
  };
});


app.controller('deleteController', function(){
  var filteredTask = _.filter(tasks, function(task){
    return task.complete == true;
  });
});

var tasks = [
  {
    title: 'Dinner with jackie and brian',
    description: '',
    createdOn: 1397490980837,
    complete: false
  }, {
    title: 'Lunch with mom',
    description: '',
    createdOn: 1397490980837,
    complete: false
  }, {
    title: 'Clean and clear closet',
    description: '',
    createdOn: 1397490980837,
    complete: false
  }
];
