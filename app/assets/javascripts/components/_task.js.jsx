var Task = React.createClass({
  getInitialState: function () {
    return JSON.parse(this.props.tasknew);
  },

  handleTaskSubmit: function ( formData, action ) {
    $.ajax({
      data: formData,
      url: action,
      type: "POST",
      dataType: "json",
      success: function ( data ) {
        this.setState({ task: data });
        window.location.reload();
      }.bind(this),
      error: function(){
        window.location.reload();
      }.bind(this)
    });
  },

  render: function () {
    return (
      <div className="project-box">
        <HomeLayout />
        <h2>Add Task:</h2>
        <TaskForm form={ this.state.form } onTaskSubmit={ this.handleTaskSubmit } />
      </div>
    );
  }
});
