var React = require("react");
var TodoList = require("TodoList");
var AddTodoForm = require("AddTodoForm");

var TodoApp = React.createClass({
     getInitialState: function () {
          return {
               todos: [
                    {
                         id: 1,
                         text: 'Play Games'
                    },
                    {
                         id: 2,
                         text: 'Eat Foods'
                    },
                    {
                         id: 3,
                         text: 'Sleep'
                    },
                    {
                         id: 4,
                         text: 'Repeat'
                    }
               ]
          };
     },
     handleAddTodo: function (text) {
          alert('new todo ' + text);
     },
     render: function () {
          var {todos} = this.state;
          return (
               <div>
                    <TodoList todos={todos}/>
                    <AddTodoForm onAddTodo={this.handleAddTodo}/>
               </div>
          );
     }
});

module.exports = TodoApp;