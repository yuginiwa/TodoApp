var React = require("react");

var SearchTodo = React.createClass({
     handleSearch: function () {
          var showCompleted = this.refs.showCompleted.checked;
          var searchText = this.refs.searchText.value;
          
          this.props.onSearch(showCompleted, searchText);
     },
     render: function () {
          return (
               <div className='container__header'>
                    <div>
                         <input type="search" ref="searchText" placeholder="Search Todos" onChange={this.handleSearch}/>
                    </div>
                    <div>
                         <lable>
                              <input type="checkbox" ref="showCompleted" onChange={this.handleSearch}/>
                              Show completed todo
                         </lable>
                    </div>
               </div>
          );
     }
});

module.exports = SearchTodo;