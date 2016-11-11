var ReactModal = React.createClass({
  render: function() {
    const token = $('meta[name="csrf-token"]').attr('content');
    return (
      <div>
        <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target={"#myModal" + this.props.id}>
          Create task
        </button>
        <div className="modal fade" role="dialog" aria-labelledby="Test" id={"myModal" + this.props.id} tabIndex={-1} role="dialog" aria-labelledby="myModalLabel">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                <h3 className="modal-title" id="myModalLabel"><strong>Add a Task</strong></h3>
              </div>
              <div className="modal-body">
                <form action="/tasks" acceptCharset="UTF-8" method="post" >
                  <input type="hidden" name="authenticity_token" value={token} readOnly={true} />
                  <div className="form-group">
                    <input type="name" ref="name" className="form-control" name="task[name]" placeholder="Name of the task" />&nbsp;
                  </div>
                  <div className="form-group">
                    <input type="start_time" ref="start_time" className="form-control" name="task[start_time]" placeholder="Start time" />&nbsp;
                  </div>
                  <div className="form-group">
                    <input type="end_time" ref="end_time" className="form-control" name="task[end_time]" placeholder="End time" />&nbsp;
                  </div>
                  <input type="hidden" name="task[project_id]" value={this.props.id} readOnly={true} />
                  <br /> <br />
                  <div className="modal-footer">
                    <button type="submit" className="btn btn-primary">Create Task</button>
                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
