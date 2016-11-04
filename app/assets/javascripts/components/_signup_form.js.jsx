var SignupForm = React.createClass({
  handleSubmit: function ( event ) {
    event.preventDefault();

    var first_name = this.refs.first_name.value.trim();
    var last_name = this.refs.last_name.value.trim();
    var email = this.refs.email.value.trim();
    var password = this.refs.password.value.trim();
    var confirm_password = this.refs.confirm_password.value.trim();

    // validate
    if (!first_name || !last_name || !email || !password || !confirm_password) {
      return false;
    }

    // submit
    var formData = $( this.refs.form ).serialize();
    this.props.onSignupSubmit( formData, this.props.form.action );

    // reset form
    this.refs.first_name.value = "";
    this.refs.last_name.value = "";
    this.refs.email.value = "";
    this.refs.password.value = "";
    this.refs.confirm_password.value = "";
  },
  render: function () {
    return (
      <form ref="form" className="login-container" action={ this.props.form.action } acceptCharset="UTF-8" method="post" onSubmit={ this.handleSubmit }>
        <p><input type="hidden" name={ this.props.form.csrf_param } value={ this.props.form.csrf_token } /></p>
        <p><input type="first_name" ref="first_name" name="user[first_name]" placeholder="First Name" /></p>
        <p><input type="last_name" ref="last_name" name="user[last_name]" placeholder="Last Name" /></p>
        <p><input type="email" ref="email" name="user[email]" placeholder="Email" /></p>
        <p><input type="password" ref="password" name="user[password]" placeholder="Password" /></p>
        <p><input type="password" ref="confirm_password" name="user[confirm_password]" placeholder="Confirm Password" /></p>
        <p><input type="submit" defaultValue="Sign Up" /></p>
      </form>

    )
  }
});
