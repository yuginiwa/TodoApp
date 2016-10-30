var expect = require("expect");

var TodoAPI = require("TodoAPI");

describe('TodoAPI', () => {
     
     beforeEach(() => {
          localStorage.removeItem('todos');
     });
     
     it('should exist', () => {
          expect(TodoAPI).toExist();
     });
     
     describe('setTodos', () => {
          it('should set valid todos array', () => {
               var todos = [{
                    id: 1,
                    text: 'test',
                    completed: false
               }];
               TodoAPI.setTodos(todos);
               
               var actualTodos = JSON.parse(localStorage.getItem('todos'));
               expect(actualTodos).toEqual(todos);
          });
          
          it('should not set invalid todos array', () => {
               var badTodos = {a: 'bad data'};
               TodoAPI.setTodos(badTodos);
               
               var actualTodos = JSON.parse(localStorage.getItem('todos'));
               expect(actualTodos).toEqual(null);
          });
     });
     
     describe('getTodos', () => {
          it('should return empty array on bad array on localStorage', () => {
               var actualTodos = TodoAPI.getTodos();
               expect(actualTodos).toEqual([]);
          });
          
          it('should return todo if valid array in localStorage', () => {
               var todos = [{
                    id: 1,
                    text: 'test',
                    completed: false
               }];
               localStorage.setItem('todos', JSON.stringify(todos));
               
               var actualTodos = TodoAPI.getTodos();
               expect(actualTodos).toEqual(todos);
          });
     });
});