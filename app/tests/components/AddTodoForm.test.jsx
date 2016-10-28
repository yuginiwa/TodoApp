var  React     = require("react"),
     ReactDOM  = require("react-dom"),
     TestUtils = require("react-addons-test-utils"),
     $         = require("jquery"),
     expect    = require("expect");
     
var AddTodoForm = require("AddTodoForm");

describe('AddTodoForm', () => {
     it('should exist', () => {
          expect(AddTodoForm).toExist();
     });
     
     it('should call onAddTodo if text entered is valid', () => {
          var spy = expect.createSpy();
          var addTodoForm = TestUtils.renderIntoDocument(<AddTodoForm onAddTodo={spy}/>);
          var $el = $(ReactDOM.findDOMNode(addTodoForm));
          
          addTodoForm.refs.text.value = 'test';
          TestUtils.Simulate.submit($el.find('form')[0]);
          
          expect(spy).toHaveBeenCalledWith('test');
     });
     
     it('should not call onAddTodo if text entered is empty', () => {
          var spy = expect.createSpy();
          var addTodoForm = TestUtils.renderIntoDocument(<AddTodoForm onAddTodo={spy}/>);
          var $el = $(ReactDOM.findDOMNode(addTodoForm));
          
          addTodoForm.refs.text.value = '';
          TestUtils.Simulate.submit($el.find('form')[0]);
          
          expect(spy).toNotHaveBeenCalled();
     });
});