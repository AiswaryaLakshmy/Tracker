var ProjectForm = React.createClass({
  handleSubmit: function ( event ) {
    event.preventDefault();

    var name = this.refs.name.value.trim();

    // validate
    if ( !name ) {
      return false;
    }

    // submit
    var formData = $( this.refs.form ).serialize();
    this.props.onProjectSubmit( formData, this.props.form.action );

    // reset form
    this.refs.name.value = "";
  },
  render: function () {
    return (
      <form ref="form" className="form-inline" action={ this.props.form.action } acceptCharset="UTF-8" method="post" onSubmit={ this.handleSubmit }>
        <input type="hidden" name={ this.props.form.csrf_param } value={ this.props.form.csrf_token } />
        <div className="form-group">
          <input type="name" ref="name" className="form-control" name="project[name]" placeholder="Name of the project" />&nbsp;
        </div>
        
        <br /><br />
        <button type="submit" className="btn btn-default">Create Project</button>
      </form>
    )
  }
});
