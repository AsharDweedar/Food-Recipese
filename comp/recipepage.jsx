
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
    return <div>
        <address> {this.state.recipe} </address>
        <input placeholder="add comment" />
        <button onClick={this.subcomment}>comment</button>
        <button onClick={this.addfav} > Add to favourit</button>
      </div>;
  }
}
