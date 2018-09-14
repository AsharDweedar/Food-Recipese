
class recipepage extends React.Component {
  constructor(props) {
    console.log("props recipepage : ");
    console.log(props);
    super(props);
    this.state = { user : props.user }
    var that = this;
    firebase
      .database()
      .ref("recipese/" + props.recipe)
      .once('value')
      .then((rec) => {
        console.log(that)
        that.setState({recipe : rec.val()});
        console.log(that.state)
      })
      .catch(({ message }) => {
        console.log(message);
      });
  }
  subcomment () {
    let st = this.state;
    let comm = $("#comm").val();
    let displayName = st.user.displayName;
    let co = st.recipe.comments.concat({ auth: displayName, comm: comm });
    console.log(co)
    firebase
      .database()
      .ref("recipese/" + st.recipe.id)
      .update({ comments : co })
      .catch(({ message }) => {
        console.log(message);
      });
  }
    
  addfav() {
    // var st = this.state;
    // st.user.fav.push(st.recipe.name);
    // firebase
    //   .database()
    //   .ref("users/" + this.state.user.id)
    //   .update(st.user)
    //   .catch(({ message }) => {
    //     console.log(message);
    //   });
  }

  render() {
    if (this.props.recipe && typeof this.props.recipe === "string") {
      return <div className="alert alert-warning" role="alert">
          no recipe selected !!
        </div>;
    }
    var ingrediantsList = [];
    for (var ingrediant of this.state.recipe.ingrediants) {
      ingrediantsList.push(<li className="list-group-item">
        <span className="badge">{ingrediant.quantity}</span>
        {ingrediant.ingrediant}
      </li>);
    }
    var comms = [];
    let DBcomms = this.state.recipe.comments;
    for (var comm in DBcomms) {
      comms.push(<div className="list-group">
          <a href="#" className="list-group-item disabled">
            {DBcomms[comm].auth}
          </a>
          <a href="#" className="list-group-item">
            {DBcomms[comm].comm}
          </a>
        </div>);
    }
    return <div className="row">
        <div className="col-sm-6 col-md-4">
          <div className="thumbnail">
            <div className="caption">
              <h3>{this.state.recipe.name}</h3>
              <ul className="list-group">{ingrediantsList}</ul>
              <h3>{this.state.recipe.time}</h3>
              <p>{this.state.recipe.preparing}</p>
              <hr />
              {comms}
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