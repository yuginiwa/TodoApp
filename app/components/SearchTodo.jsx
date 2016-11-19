var React = require("react");
var {connect} = require('react-redux');

var actions = require('actions');

export var SearchTodo = React.createClass({
    render: function () {
          var {dispatch, showCompleted, searchText} = this.props;
          return (
               <div className='container__header'>
                    <div>
                         <input type="search" ref="searchText" placeholder="Search Todos" value={searchText} onChange={() => {
                               var searchText = this.refs.searchText.value;
                               dispatch(actions.setSearchText(searchText));
                           }}/>
                    </div>
                    <div>
                         <lable>
                              <input type="checkbox" ref="showCompleted" value={showCompleted} onChange={() => {
                                  dispatch(actions.toggleShowCompleted());
                                }}/>
                              Show completed todo
                         </lable>
                    </div>
               </div>
          );
     }
});

export default connect(
  (state) => {
    return {
      searchText: state.searchText,
      showCompleted: state.showCompleted
    }
  }
)(SearchTodo);
