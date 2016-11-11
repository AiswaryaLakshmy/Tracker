var TaskAll = React.createClass({
  render: function () {
    var taskNodes = this.props.tasks.map(function ( task ) {
      return <SingleTask name={ task.name } start_time={task.start_time} end_time={task.end_time} key={ task.id } />
    });

    return (
      <div className="task-list">
        { taskNodes }
      </div>
    )
  }
});
