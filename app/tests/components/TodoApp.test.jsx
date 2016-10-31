var  React     = require("react"),
     ReactDOM  = require("react-dom"),
     TestUtils = require("react-addons-test-utils"),
     $         = require("jquery"),
     expect    = require("expect");

var TodoApp    = require("TodoApp");

describe('TodoApp', () => {
     
     beforeEach (() => {
          localStorage.removeItem('todos');
     });
     
     it('should exist', () => {
          expect(TodoApp).toExist();
     });
     
     it('should add todo to the todos state on handleAddTodo', () => {
          var text = 'test';
          var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
          
          todoApp.setState({todos: [] });
          todoApp.handleAddTodo(text);
          
          expect(todoApp.state.todos[0].text).toBe(text);
          expect(todoApp.state.todos[0].createdAt).toBeA('number');
     });
     
     it('should toggle completed value when handleToggle called', () => {
          var todoData = {
               id: 11,
               text: 'test',
               completed: false,
               createdAt: 0,
               completedAt: undefined
          };
          
          var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
          todoApp.setState({todos: [todoData]});
          
          // Check that todos first item has completed value of false
          expect(todoApp.state.todos[0].completed).toBe(false);
          // Call handleToggle with 11
          todoApp.handleToggle(11);
          // Verify that value change
          expect(todoApp.state.todos[0].completed).toBe(true);
          expect(todoApp.state.todos[0].completedAt).toBeA('number');
     });
     
     it('should remove completed at when toggle from true to false', () => {
          var todoData = {
               id: 11,
               text: 'test',
               completed: true,
               createdAt: 0,
               completedAt: 0
          };
          
          var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
          todoApp.setState({todos: [todoData]});
          
          expect(todoApp.state.todos[0].completed).toBe(true);
          
          todoApp.handleToggle(11);
          expect(todoApp.state.todos[0].completed).toBe(false);
          expect(todoApp.state.todos[0].completedAt).toNotExist();
     });
});