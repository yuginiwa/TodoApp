var  React     = require("react"),
     ReactDOM  = require("react-dom"),
     TestUtils = require("react-addons-test-utils"),
     $         = require("jquery"),
     expect    = require("expect");
     
var SearchTodo = require("SearchTodo");

describe('SearchTodo', () => {
     it('should exist', () => {
          expect(SearchTodo).toExist();
     });
     
     it('should call onSearch with entered input text', () => {
          var searchText = "Play";
          var spy = expect.createSpy();
          var searchTodo = TestUtils.renderIntoDocument(<SearchTodo onSearch={spy}/>);
          
          searchTodo.refs.searchText.value = searchText;
          TestUtils.Simulate.change(searchTodo.refs.searchText);
          
          expect(spy).toHaveBeenCalledWith(false, 'Play');
     });
     
     it('should call onSearch with proper checked value', () => {
          var spy = expect.createSpy();
          var searchTodo = TestUtils.renderIntoDocument(<SearchTodo onSearch={spy}/>);
          
          searchTodo.refs.showCompleted.checked = true;
          TestUtils.Simulate.change(searchTodo.refs.showCompleted);
          
          expect(spy).toHaveBeenCalledWith(true, '');
     });
});