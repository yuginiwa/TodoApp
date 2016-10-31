var  React     = require("react"),
     ReactDOM  = require("react-dom"),
     TestUtils = require("react-addons-test-utils"),
     $         = require("jquery"),
     expect    = require("expect");
     
var TodoList    = require("TodoList");
var Todo        = require("Todo");

describe('TodoList', () => {
     it('should exist', () => {
          expect(TodoList).toExist();
     });
     
     it('should render one Todo component in each Todo item', () => {
          var todos = [
               {
                    id: 1,
                    text: 'Some text'
               },
               {
                    id: 2,
                    text: 'Another text'
               }
          ];
          
          var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
          var todosComponent = TestUtils.scryRenderedComponentsWithType(todoList, Todo);
          
          expect(todosComponent.length).toBe(todos.length);
     });
     
     it('should render empty message if no todos', () => {
          var todos = [];
          
          var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
          var $el = $(ReactDOM.findDOMNode(todoList));
          
          expect($el.find('.container__message').length).toBe(1);
     });
});