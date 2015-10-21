angular.module('todoApp', [])
  .controller('TodoListController', function () {
    var todoList  = this;

    todoList.todos = [
      {text: 'Learn Angular', done: false},
      {text: 'Build a TODO list', done: false}
    ];

    todoList.addTodo = function () {
      todoList.todos.push({ text: todoList.todoText, done: false });
      todoList.todoText = '';
    }
  });
