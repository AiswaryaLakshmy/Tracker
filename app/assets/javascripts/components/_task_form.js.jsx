var TaskForm = React.createClass({
  handleSubmit: function ( event ) {
    event.preventDefault();

    var name = this.refs.name.value.trim();
    var start_time = this.refs.start_time.value.trim();
    var end_time = this.refs.end_time.value.trim();
    var project_id = this.refs.project_id.value.trim();

    // validate
    if ( !name || !start_time || !end_time || !project_id) {
      return false;
    }

    // submit
    var formData = $( this.refs.form ).serialize();
    this.props.onTaskSubmit( formData, this.props.form.action );

    // reset form
    this.refs.name.value = "";
    this.refs.start_time.value = "";
    this.refs.end_time.value = "";
    this.refs.project_id.value = "";
  },
  render: function () {
    return (
      <form ref="form" className="form-inline" action={ this.props.form.action } acceptCharset="UTF-8" method="post" onSubmit={ this.handleSubmit }>
        <input type="hidden" name={ this.props.form.csrf_param } value={ this.props.form.csrf_token } />
        <div className="form-group">
          <input type="name" ref="name" className="form-control" name="task[name]" placeholder="Name of the task" />&nbsp;
        </div>
        <div className="form-group">
          <input type="start_time" ref="start_time" className="form-control" name="task[start_time]" placeholder="Start time" />&nbsp;
        </div>
        <div className="form-group">
          <input type="end_time" ref="end_time" className="form-control" name="task[end_time]" placeholder="End time" />&nbsp;
        </div>
        <div className="form-group">
          <input type="project_id" ref="project_id" className="form-control" name="task[project_id]" placeholder="Project id" />&nbsp;
        </div>
        <br /><br />
        <button type="submit" className="btn btn-default">Create Task</button>
      </form>
    )
  }
});

