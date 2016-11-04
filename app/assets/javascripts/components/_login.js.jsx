var Login = React.createClass({
  getInitialState: function () {
    return JSON.parse(this.props.login);
  },

  handleLoginSubmit: function ( formData, action ) {
    $.ajax({
      data: formData,
      url: action,
      type: "POST",
      dataType: "json",
      success: function ( data ) {
        this.setState({ user: data });
        window.location.reload();
      }.bind(this),
      error: function(){
        window.location.reload();
      }.bind(this)
    });
  },

  render: function () {
    return (
      <div className="login">
        <h1 className="main-heading">Tracker</h1>
        <hr />
        <div className="login-triangle" />
        <h2 className="login-header">Log in</h2>
        <LoginForm form={ this.state.form } onLoginSubmit={ this.handleLoginSubmit } />
        <p className="new-user">New User? <a className="link" href="/users/sign_up">Sign Up</a> here!</p>
      </div>
    );
  }
});
