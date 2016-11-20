var React = require("react");
var uuid = require("node-uuid");
var moment = require("moment");

import TodoList from 'TodoList';
import AddTodoForm from 'AddTodoForm';
import SearchTodo from 'SearchTodo';

var TodoApp = React.createClass({
  render: function () {
          return (
               <div>
                    <h1 className='page-title'>Todo App</h1>

                    <div className='row'>
                         <div className='column small-centered small-11 medium-6 large-5'>
                              <div className='container'>
                                   <SearchTodo/>
                                   <TodoList/>
                                   <AddTodoForm/>
                              </div>
                         </div>
                    </div>
               </div>
          );
     }
});

module.exports = TodoApp;
