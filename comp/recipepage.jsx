
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
    var co = st.comments.concat({ auth: displayName, comm: comm });
    console.log(co)
    firebase
      .database()
      .ref("recipese/" + st.id)
      .update({ comments : co })
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
    var ingrediantsList = [];
    for (var ingrediant of this.props.recipe.ingrediants) {
      ingrediantsList.push(<li className="list-group-item">
        <span className="badge">{ingrediant.quantity}</span>
        {ingrediant.ingrediant}
      </li>);
    }
    var comments = [];
    let comms = this.props.recipe.comments;
    for (var comm in comms) {
      comments.push(<div className="list-group">
          <a href="#" className="list-group-item disabled">
            {comms[comm].auth}
          </a>
          <a href="#" className="list-group-item">
            {comms[comm].comm}
          </a>
        </div>);
    }
    return <div className="row">
        <div className="col-sm-6 col-md-4">
          <div className="thumbnail">
            <div className="caption">
              <h3>{this.props.recipe.name}</h3>
              <ul className="list-group">{ingrediantsList}</ul>
              <h3>{this.props.recipe.time}</h3>
              <p>{this.props.recipe.preparing}</p>
              <hr />
              {comments}
              {this.props.isLoggedIn && <div>
                  <input id="comm" type="text" className="form-control" placeholder="add comment" />
                  <p />
                  <button type="submit" className="btn btn-default" onClick={this.subcomment.bind(this)}>
                    Add Comment
                  </button>
                </div>}
            </div>
          </div>
        </div>
      </div>;
  }
}

/* {this.props.isLoggedIn && <a className="btn btn-primary btn-lg" href="#" role="button" onClick={this.addfav}>
    Add to favourit
  </a>} */