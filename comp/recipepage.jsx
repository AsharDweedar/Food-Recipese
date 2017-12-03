
class recipepage extends React.Component {
  constructor(props) {
    console.log("props recipepage : ");
    console.log(props);
    super(props);
    this.state = { ...props.recipe , user : props.user }
  }
  subcomment () {
    var st = this.state;
    var comm = $("#comm").val();
    var displayName = st.user.displayName;
    var co = { auth: displayName, comment: comm };
    st.comments.push(co);
    firebase
      .database()
      .ref("recipese/" + st.id)
      .update(st)
      .catch(({ message }) => {
        console.log(message);
      });
    }
    
  addfav() {
    var st = this.state;
    st.user.fav.push(st.recipe.name);
    firebase
      .database()
      .ref("users/" + this.state.user.id)
      .update(st.user)
      .catch(({ message }) => {
        console.log(message);
      });
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
