var React = require("react");
var TodoList = require("TodoList");

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
     render: function () {
          var {todos} = this.state;
          return (
               <TodoList todos={todos}/>
          );
     }
});

module.exports = TodoApp;