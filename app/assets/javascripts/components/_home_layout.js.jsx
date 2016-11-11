var HomeLayout = React.createClass({
    render: function() {
      return (
        <div>
        <h4 className="home"></h4>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="=&quot;IE=edge&quot;/" />
        <meta name="google" value="notranslate" />
        <title>Side Menu</title>
     
        <nav className="main-menu">
          
          <div className="settings" />
          <div className="scrollbar" id="style-1">
            <ul>
              <li>
                <a href="/home">
                  <i className="fa fa-home fa-lg" />
                  <span className="nav-text">Home</span>
                </a>
              </li>
              <li>
                <a  href="http://www.7nodes.com/">
                  <i className="fa fa-user fa-lg" />
                  <span className="nav-text">About Us</span>
                </a>
              </li>
              <li>
                <a href="/users/sign_out" data-method="delete">
                  <i className="fa fa-sign-out" aria-hidden="true" />
                  <span className="nav-text">Logout</span>
                </a>
              </li>

              <li className="darkerlishadow">
                <a href="/projects">
                  <i className="fa fa-cubes" aria-hidden="true" />
                  <span className="nav-text">Projects</span>
                </a>
              </li>
              <li className="darkerli">
                <a href="/projects/new">
                  <i className="fa fa-cube" aria-hidden="true" />
                  <span className="nav-text">Create Project</span>
                </a>
              </li>
              <li className="darkerli">
                <a href="/tasks">
                  <i className="fa fa-tasks" aria-hidden="true" />
                  <span className="nav-text">Tasks</span>
                </a>
              </li>
            </ul>

          </div></nav>
      </div>
      )
    }
  });
