var  React     = require("react"),
     ReactDOM  = require("react-dom"),
     {Provider}= require('react-redux'),
     TestUtils = require("react-addons-test-utils"),
     $         = require("jquery"),
     expect    = require("expect");

import {configure} from 'configureStore';
import ConnectedTodoList, {TodoList} from 'TodoList';
import ConnectedTodo, {Todo} from 'Todo';

describe('TodoList', () => {
     it('should exist', () => {
          expect(TodoList).toExist();
     });

     it('should render one Todo component in each Todo item', () => {
          var todos = [
               {
                    id: 1,
                    text: 'Some text',
                    completed: false,
                    createdAt: 123,
                    completedAt: undefined
               },
               {
                    id: 2,
                    text: 'Another text',
                    completed: false,
                    createdAt: 123,
                    completedAt: undefined
               }
          ];
          var store = configure({
            todos
          });
          var provider = TestUtils.renderIntoDocument(
            <Provider store={store}>
              <ConnectedTodoList/>
            </Provider>
          );
          var todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
          var todosComponent = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);

          expect(todosComponent.length).toBe(todos.length);
     });

     it('should render empty message if no todos', () => {
          var todos = [];

          var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
          var $el = $(ReactDOM.findDOMNode(todoList));

          expect($el.find('.container__message').length).toBe(1);
     });
});
