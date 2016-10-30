var React = require("react");
var TodoList = require("TodoList");
var AddTodoForm = require("AddTodoForm");
var SearchTodo = require("SearchTodo");
var uuid = require("node-uuid");

var TodoApp = React.createClass({
     getInitialState: function () {
          return {
               showCompleted: false,
               searchText: "",
               todos: [
                    {
                         id: uuid(),
                         text: 'Play Games',
                         completed: true
                    },
                    {
                         id: uuid(),
                         text: 'Eat Foods',
                         completed: true
                    },
                    {
                         id: uuid(),
                         text: 'Sleep',
                         completed: false
                    },
                    {
                         id: uuid(),
                         text: 'Repeat',
                         completed: false
                    }
               ]
          };
     },
     handleAddTodo: function (text) {
          this.setState({
               todos: [
                    ...this.state.todos,
                    {
                         id: uuid(),
                         text: text,
                         completed: false
                    }
               ]
          });
     },
     handleSearch:  function (showCompleted, searchText) {
          this.setState({
               showCompleted: showCompleted,
               searchText: searchText.toLowerCase()
          });
     },
     handleToggle: function (id) {
          var updatedTodos = this.state.todos.map((todo) => {
               if(todo.id === id) {
                    todo.completed = !todo.completed;
               }
               
               return todo;
          });
          
          this.setState({todos: updatedTodos});
     },
     render: function () {
          var {todos} = this.state;
          return (
               <div>
                    <SearchTodo onSearch={this.handleSearch}/>
                    <TodoList todos={todos} onToggle={this.handleToggle}/>
                    <AddTodoForm onAddTodo={this.handleAddTodo}/>
               </div>
          );
     }
});

module.exports = TodoApp;