var expect = require("expect");

var TodoAPI = require("TodoAPI");

describe('TodoAPI', () => {

     beforeEach(() => {
          localStorage.removeItem('todos');
     });

     it('should exist', () => {
          expect(TodoAPI).toExist();
     });
     
     describe('filterTodos', () => {
          var todos = [
               {
                    id: 1,
                    text: 'Some test',
                    completed: true
               },
               {
                    id: 2,
                    text: 'test',
                    completed: false
               },
               {
                    id: 3,
                    text: 'Some test',
                    completed: true
               }
          ];

          it('should return all items if showCompleted is true', () => {
               var filteredTodos = TodoAPI.filterTodos(todos, true, '');
               expect(filteredTodos.length).toBe(3);
          });

          it('should return item with completed is false if showCompleted is false', () => {
               var filteredTodos = TodoAPI.filterTodos(todos, false, '');
               expect(filteredTodos.length).toBe(1);
          });

          it('should sort by completed status', () => {
               var filteredTodos = TodoAPI.filterTodos(todos, true, '');
               expect(filteredTodos[0].completed).toBe(false);
          });

          it('should filter todos by searchText', () => {
               var filteredTodos = TodoAPI.filterTodos(todos, true, 'some');
               expect(filteredTodos.length).toBe(2);
          });

          it('should return all todos if searchText is empty', () => {
               var filteredTodos = TodoAPI.filterTodos(todos, true, '');
               expect(filteredTodos.length).toBe(3);
          });
     });
});
