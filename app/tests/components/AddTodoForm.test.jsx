var  React     = require("react"),
     ReactDOM  = require("react-dom"),
     TestUtils = require("react-addons-test-utils"),
     $         = require("jquery"),
     expect    = require("expect");

var {AddTodoForm} = require('AddTodoForm');

describe('AddTodoForm', () => {
     it('should exist', () => {
          expect(AddTodoForm).toExist();
     });

     it('should dispatch ADD_TODO action when valid text entered', () => {
          var text = 'test';
          var action = {
            type: 'ADD_TODO',
            text: text
          };
          var spy = expect.createSpy();
          var addTodoForm = TestUtils.renderIntoDocument(<AddTodoForm dispatch={spy}/>);
          var $el = $(ReactDOM.findDOMNode(addTodoForm));

          addTodoForm.refs.text.value = text;
          TestUtils.Simulate.submit($el.find('form')[0]);

          expect(spy).toHaveBeenCalledWith(action);
     });

     it('should not dispatch ADD_TODO action when invalid text entered', () => {
          var spy = expect.createSpy();
          var addTodoForm = TestUtils.renderIntoDocument(<AddTodoForm dispatch={spy}/>);
          var $el = $(ReactDOM.findDOMNode(addTodoForm));

          addTodoForm.refs.text.value = '';
          TestUtils.Simulate.submit($el.find('form')[0]);

          expect(spy).toNotHaveBeenCalled();
     });
});
