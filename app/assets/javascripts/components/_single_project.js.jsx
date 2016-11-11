var SingleProject = React.createClass({
  render: function () {
    return (
      <div>
        <h4>* { this.props.name }</h4>
        <div className="react-modal">
        	<ReactModal id={ this.props.id }/>
				</div>
      </div>
    )
  }
});
