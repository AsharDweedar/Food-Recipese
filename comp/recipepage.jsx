
class recipepage extends React.Component {
  constructor(props) {
    console.log("props recipepage : ");
    console.log(props);
    super(props);
    this.state = { recipe : props.recipe }
  }
  subcomment() {
    var comm = $("#comm").val();
    // var send = { auth: "this user from store using connect or props", comment: comm };
    //TODO : add the comment to firebase
    //TODO : add comment to current recipe page
      //like : this.state.comments.push(send)
  }
  addfav() {
    //TODO : add the comment to firebase
  }
  render() {
    if (!this.props.recipe) {
      return <div class="alert alert-warning" role="alert">
          no recipe selected !!
        </div>;
    }
    return <div>
        <address> {this.state.recipe} </address>
        <div class="jumbotron">
          <h1>{this.state.recipe} </h1>
          <p>
            {this.state.recipe} {this.state.recipe} {this.state.recipe}{" "}
          </p>
          <p>
            {this.props.isLoggedIn && <a class="btn btn-primary btn-lg" href="#" role="button" onClick={this.addfav}>
                Add to favourit
              </a>}
          </p>
        </div>
        {this.props.isLoggedIn && <form className="navbar-form navbar-left" role="search">
            <div className="form-group">
              <input type="text" className="form-control" placeholder="add comment" />
            </div>
            <button type="submit" className="btn btn-default" onClick={this.subcomment}>
              comment
            </button>
          </form>}
      </div>;
  }
}
