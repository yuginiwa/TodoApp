var React = require("react");
var {connect} = require('react-redux');
var actions = require('actions');

export var AddTodoForm = React.createClass({
     handleSubmit: function (e) {
          e.preventDefault();
          var {dispatch} = this.props;
          var text = this.refs.text.value;

          if(text.length > 0) {
               this.refs.text.value = "";
               dispatch(actions.addTodo(text));
          } else {
               this.refs.text.focus();
          }
     },
     render: function () {
          return (
               <div className='container__footer'>
                    <form onSubmit={this.handleSubmit}>
                         <input type="text" ref="text" placeholder="Add new todo"/>
                         <button className="button primary expanded">Add New Todo</button>
                    </form>
               </div>
          );
     }
});

export default connect()(AddTodoForm);
