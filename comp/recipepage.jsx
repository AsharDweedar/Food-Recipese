
class recipepage extends React.Component {
  constructor(props) {
    console.log("props recipepage : ");
    console.log(props);
    super(props);
    this.state = { ...props.recipe }
  }
  subcomment () {
    var st = this.state;
    var comm = $("#comm").val();
    var email = this.props.user.email;
    var co = { auth: email, comment: comm };
    st.comments.push(co);
    firebase
      .database()
      .ref("recipese/" + this.state.id)
      .update(st)
      .catch(({ message }) => {
        console.log(message);
      });
  }
  addfav() {
    

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
                {this.props.isLoggedIn && <div><input id="comm" type="text" className="form-control" placeholder="add comment" /><p></p><button type="submit" className="btn btn-default" onClick={this.subcomment.bind(this)}>Comment</button></div>}
            </div>
          </div>
        </div>
      </div>;
  }
}
