
class Layout extends React.Component {
  constructor(props) {
    console.log("props Layout : ");
    console.log(props);
    super(props);
    this.state = { showSignUp: false,
      showSignIn: false,
      showRecipes: true,
      showRecipesPage: false,
      showRecomendations: false,
      current: "showRecipesPage",
      recipe:"recipe is here",
      recipes: ["test 1", "test 2", "test 3", "test 4", "test 5"]
    };
    //TODO : fetch data from firebase & store it at :
    //this.setState(res)
  }
  toShow (show,prop) {
    //conditional rendering
    this.state[show] = true; //the passed value is now true => will be shown 
    this.state[current] = false; //change the currently shown tab to false => will be hided
    this.setState({ current: show }); //the passed value is now the cuurrent
    if (show === "showRecipePage") {
      this.state.recipe = prop;
    }
    if (show === "showRecipes") {
      this.state.recipes = prop;
    }
  }
  render() {
    return <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">
                nav
              </a>
            </div>
          </div>
        </nav>
        {this.state.showSignUp && <window.signup show={this.toShow} />}
        {this.state.showSignIn && <window.signin show={this.toShow} />}
        {this.state.showRecipes && <window.recipes recipes={this.state.recipes} show={this.toShow} />}
        {this.state.showRecipesPage && <window.recipepage recipe={this.state.recipe} />}
        {this.state.showRecomendations && <window.recomendations />}
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
