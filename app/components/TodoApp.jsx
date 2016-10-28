var React = require("react");
var TodoList = require("TodoList");
var AddTodoForm = require("AddTodoForm");
var SearchTodo = require("SearchTodo");

var TodoApp = React.createClass({
     getInitialState: function () {
          return {
               showCompleted: false,
               searchText: "",
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
     handleSearch:  function (showCompleted, searchText) {
          this.setState({
               showCompleted: showCompleted,
               searchText: searchText.toLowerCase()
          });
     },
     render: function () {
          var {todos} = this.state;
          return (
               <div>
                    <SearchTodo onSearch={this.handleSearch}/>
                    <TodoList todos={todos}/>
                    <AddTodoForm onAddTodo={this.handleAddTodo}/>
               </div>
          );
     }
});

module.exports = TodoApp;