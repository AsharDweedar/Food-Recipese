
class Layout extends React.Component {
  constructor(props) {
    console.log("props Layout : ");
    console.log(props);
    super(props);
    this.state = {
      showSignUp: false,
      showSignIn: true,
      showRecipes: false,
      showRecipesPage: false,
      showRecomendations: false,
      current: "showSignIn",
      recipe:"",
      recipes: ["test 1", "test 2", "test 3", "test 4", "test 5"],
      recomendations: ['rec', 'rec1', 'rec2']
    };
    //TODO : fetch data from firebase & store it at :
    //this.state.recipes = props.recipes;
    //this.setState(res)
  }
  
  logout () {
    // check if he is already signed in with facebook
    FB.getLoginStatus((response) => {
      if (response.state === "connected") {
        return logmeout();
      } else {
        //TODO : log out from firebase
      }
    });
  }
  toShow (show, prop) {
    //conditional rendering
    console.log("showing : ", show)
    $("#bs-example-navbar-collapse-1 li." + show).toggleClass("active");
    $("#bs-example-navbar-collapse-1 li." + this.state.current).toggleClass("active");
    this.state[show] = true; //the passed value is now true => will be shown 
    this.state[this.state.current] = false; //change the currently shown tab to false => will be hided
    this.setState({ current: show }); //the passed value is now the cuurrent
    if (show === "showRecipePage") {
      this.state.recipe = prop;
    }
  }
  render() {
    return <div>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <span>
                <a className="navbar-brand" href="#">
                  Food Recipes
                </a>{" "}
              </span>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li onClick={() => this.toShow("showRecipes").bind(this)} className="showRecipes">
                  <a href="#">Recipes</a>
                </li>
                <li onClick={() => this.toShow("showRecomendations").bind(this)} className="showRecomendations">
                  <a href="#">
                    Recomendations <span className="sr-only" />
                  </a>
                </li>
              </ul>
              <form className="navbar-form navbar-left">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="recomend a recipe" />
                </div>
                <span>{"          "}</span>
                <button type="submit" className="btn btn-default">
                  Recomend
                </button>
              </form>
              <ul className="nav navbar-nav navbar-right">
                <li onClick={() => this.toShow("showSignIn").bind(this)} className="showSignIn active">
                  <a href="#">sign in</a>
                </li>
                <li onClick={() => this.toShow("showSignUp").bind(this)} className="showSignUp">
                  <a href="#">sign up</a>
                </li>
                <li onClick={() => logmeout()}>
                  <a href="#">sign out</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {this.state.showSignUp && <window.signup show={this.toShow.bind(this)} />}
        {this.state.showSignIn && <window.signin show={this.toShow.bind(this)} />}
        {this.state.showRecipes && <window.recipes recipes={this.state.recipes} show={this.toShow.bind(this)} />}
        {this.state.showRecipesPage && <window.recipepage recipe={this.state.recipe} />}
        {this.state.showRecomendations && <window.recomendations recomendations={this.state.recomendations} />}
      </div>;
  }
}
console.log('before connect');
const connect = ReactRedux.connect;
connect((store, ownProps) => {
  console.log('hi this is my store : ');
  console.log(store );
  //whatever i return here it will be sent as props
  return { name: "name is here !" };
})(Layout);
