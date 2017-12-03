
class recipepage extends React.Component {
  constructor(props) {
    console.log("props recipepage : ");
    console.log(props);
    super(props);
    this.state = { ...props.recipe }
    console.log(this.state)
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
      return <div className="alert alert-warning" role="alert">
          no recipe selected !!
        </div>;
    }
    return <div className="row" >
        <div className="col-sm-6 col-md-4">
          <div className="thumbnail">
            <div className="caption">
              <h3>{this.state.name}</h3>
              <p>
                {this.state.preperation}
              </p>
                {this.props.isLoggedIn && <a className="btn btn-primary btn-lg" href="#" role="button" onClick={this.addfav}>
                    Add to favourit
                  </a>}
                  <hr/>
                {this.props.isLoggedIn && <div><input type="text" className="form-control" placeholder="add comment" /><p></p><button type="submit" className="btn btn-default" onClick={this.subcomment}>Comment</button></div>}
            </div>
          </div>
        </div>
      </div>;
  }
}
