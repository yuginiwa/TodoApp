var  React     = require("react"),
     ReactDOM  = require("react-dom"),
     TestUtils = require("react-addons-test-utils"),
     $         = require("jquery"),
     expect    = require("expect");

import * as actions from 'actions';
import {Todo} from 'Todo';

describe('Todo', () => {
     it('should exist', () => {
          expect(Todo).toExist();
     });

     it('should dispatch TOGGLE_TODO action', () => {
          var todoData = {
               id: 1,
               text: 'test',
               completed: true
          };

          var action = actions.startToggleTodo(todoData.id, !todoData.completed);

          var spy = expect.createSpy();
          var todo = TestUtils.renderIntoDocument(<Todo {...todoData} dispatch={spy}/>);
          var $el = $(ReactDOM.findDOMNode(todo));

          TestUtils.Simulate.click($el[0]);

          expect(spy).toHaveBeenCalledWith(action);
     });
});
