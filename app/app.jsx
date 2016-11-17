var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require("TodoApp");

var store = require('configureStore').configure();
var actions = require('actions');

store.subscribe(() => {
  console.log('New State', store.getState());
});

store.dispatch(actions.addTodo('Need to Study more'));
store.dispatch(actions.setSearchText('Need'));
store.dispatch(actions.toggleShowCompleted());

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <TodoApp/>,
  document.getElementById('app')
);
