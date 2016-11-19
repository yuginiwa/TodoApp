var  React     = require("react"),
     ReactDOM  = require("react-dom"),
     TestUtils = require("react-addons-test-utils"),
     $         = require("jquery"),
     expect    = require("expect");

import {SearchTodo} from 'SearchTodo';

describe('SearchTodo', () => {
     it('should exist', () => {
          expect(SearchTodo).toExist();
     });

     it('should dispatch SET_SEARCH_TEXT on change', () => {
          var searchText = "Play";
          var action = {
            type: 'SET_SEARCH_TEXT',
            searchText
          };
          var spy = expect.createSpy();
          var searchTodo = TestUtils.renderIntoDocument(<SearchTodo dispatch={spy}/>);

          searchTodo.refs.searchText.value = searchText;
          TestUtils.Simulate.change(searchTodo.refs.searchText);

          expect(spy).toHaveBeenCalledWith(action);
     });

     it('should dispatch TOGGLE_SHOW_COMPLETED on change', () => {
          var action = {
            type: 'TOGGLE_SHOW_COMPLETED'
          };
          var spy = expect.createSpy();
          var searchTodo = TestUtils.renderIntoDocument(<SearchTodo dispatch={spy}/>);

          searchTodo.refs.showCompleted.checked = true;
          TestUtils.Simulate.change(searchTodo.refs.showCompleted);

          expect(spy).toHaveBeenCalledWith(action);
     });
});
