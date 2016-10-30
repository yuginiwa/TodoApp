var  React     = require("react"),
     ReactDOM  = require("react-dom"),
     TestUtils = require("react-addons-test-utils"),
     $         = require("jquery"),
     expect    = require("expect");
     
var TodoApp    = require("TodoApp");

describe('TodoApp', () => {
     it('should exist', () => {
          expect(TodoApp).toExist();
     });
     
     it('should add todo to the todos state on handleAddTodo', () => {
          var text = 'test';
          var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
          
          todoApp.setState({todos: [] });
          todoApp.handleAddTodo(text);
          
          expect(todoApp.state.todos[0].text).toBe(text);
     });
     
     it('should toggle completed value when handleToggle called', () => {
          var todoData = {
               id: 11,
               text: 'test',
               completed: false
          };
          
          var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
          todoApp.setState({todos: [todoData]});
          
          // Check that todos first item has completed value of false
          expect(todoApp.state.todos[0].completed).toBe(false);
          // Call handleToggel with 11
          todoApp.handleToggle(11);
          // Verify that value change
          expect(todoApp.state.todos[0].completed).toBe(true);
          
     });
});