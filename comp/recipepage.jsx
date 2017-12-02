
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

        <form className="navbar-form navbar-left" role="search">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="add comment" />
          </div>
          <button type="submit" className="btn btn-default" onClick={this.subcomment}>
            comment
          </button>
          <button className="btn btn-default" onClick={this.addfav}>
            {" "}
            Add to favourit
          </button>
        </form>
      </div>;
  }
}
