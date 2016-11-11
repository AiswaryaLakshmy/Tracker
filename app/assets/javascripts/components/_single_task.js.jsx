var SingleTask = React.createClass({
  render: function () {
    return (
      <div>
        <h4>* Task: { this.props.name }</h4>
        <h4> Start Time: { this.props.start_time }</h4>
        <h4> End Time: { this.props.end_time }</h4>
        <br />
      </div>
    )
  }
});
