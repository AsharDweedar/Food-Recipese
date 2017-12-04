
class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSignUp: false,
      showSignIn: true,
      showRecipes: false,
      showRecipePage: false,
      showRecomendations: false,
      isLoggedIn: window.isLoggedIn || false ,
      current: "showSignIn",
      recipe: "",
      recipes: [{name : "... fetching recipes"}, {name : "... fetching recipes"}, {name : "... fetching recipes"}],
      recomendations: [{auth : 'default', text : 'rec'}, {auth : 'default', text : 'rec1'}, {auth : 'default', text : 'rec2'}],
      user: {}
    };
    console.log("state Layout : ");
    console.log(this.state);
    var st = this.state;

    //fetch recipes from firebase & store it at :
    firebase
      .database()
      .ref("/recipese/")
      .once("value")
      .then(function(recipes) {
        var all = [];
        recipes.forEach(recipe => {
          let rec = recipe.val();
          rec.id = recipe.key;
          all.push(rec);
        });
        st.recipes = all;
      });
    
    //fetch recomendations from firebase & store it at :
    firebase
      .database()
      .ref("/recomendations/")
      .once("value")
      .then(function(recomendations) {
        var all = [];
        recomendations.forEach(recomendation => {
          let rec = recomendation.val();
          rec.id = recomendation.key;
          all.push(rec);
        });
        st.recomendations = all;
      });
    
    //fetch current user data :
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        st.isLoggedIn = true;
        st.user = user
      } else {
        st.isLoggedIn = false;
        st.user = {};
      }
    });

  }
  
  logout () {
    var st = this.state;
    if (st.isLoggedIn) {
      // check if he is already signed in with facebook
      FB.getLoginStatus((response) => {
        if (response.status === "connected") {
          console.log(response)
          logmeout();
        } else {
          firebase
            .auth()
            .signOut()
            .then(function() {
              console.log("Sign-out successful");
              st.setState({ isLoggedIn: false });
            })
            .catch(function({ message }) {
              alert(message);
            });
        }
      });
    } else {
      alert('You are not signed in');
    }
  }

  subrec () {
    var st = this.state;
    var rec = $("#rec").val();
    var displayName = st.user.displayName;
    var co = { auth: displayName, text: rec };
    var ID = firebase
      .database()
      .ref()
      .child("recomendations")
      .push().key;

    var newRec = {};
    newRec[ID] = co;

    firebase
      .database()
      .ref("recomendations/")
      .update(newRec)
      .catch(({ message }) => {
        console.log(message);
      });

  }

  toShow (show, prop) {
    //switch the active tab of the nav bar : styling purposes 
    $("#bs-example-navbar-collapse-1 li." + show).toggleClass("active");
    $("#bs-example-navbar-collapse-1 li." + this.state.current).toggleClass("active");
    if (show === "showRecipePage") {
      this.state.recipe = prop;
    }
    if (show === "showRecipes" && prop) {
      this.state.isLoggedIn = true;
      this.state.user = prop;
    }
    //conditional rendering
    this.state[show] = true; //the passed value is now true => will be shown 
    this.state[this.state.current] = false; //change the currently shown tab to false => will be hided
    this.setState({ current: show }); //the passed value is now the cuurrent
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
                <li onClick={() => this.toShow("showRecipes")} className="showRecipes">
                  <a href="#">Recipes</a>
                </li>
                <li onClick={() => this.toShow("showRecipePage")} className="showRecipePage">
                  <a href="#">
                    Recipe Page <span className="sr-only" />
                  </a>
                </li>
                <li onClick={() => this.toShow("showRecomendations")} className="showRecomendations">
                  <a href="#">
                    Recomendations <span className="sr-only" />
                  </a>
                </li>
              </ul>
              <form className="navbar-form navbar-left">
                <div className="form-group">
                  <input type="text" className="form-control" id="rec" placeholder="recomend a recipe" />
                </div>
                <span>{"          "}</span>
                <button type="submit" onClick={() => this.subrec("showSignUp")} className="btn btn-default">
                  Recomend
                </button>
              </form>
              <ul className="nav navbar-nav navbar-right">
                <li onClick={() => this.toShow("showSignIn")} className="showSignIn active">
                  <a href="#">sign in</a>
                </li>
                <li onClick={() => this.toShow("showSignUp")} className="showSignUp">
                  <a href="#">sign up</a>
                </li>
                <li onClick={() => this.logout()}>
                  <a href="#">sign out</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {this.state.showSignUp && <window.signup show={this.toShow.bind(this)} />}
        {this.state.showSignIn && <window.signin show={this.toShow.bind(this)} />}
        {this.state.showRecipes && <window.recipes recipes={this.state.recipes} show={this.toShow.bind(this)} />}
        {this.state.showRecipePage && <window.recipepage recipe={this.state.recipe} isLoggedIn={this.state.isLoggedIn} user={this.state.user} />}
        {this.state.showRecomendations && <window.recomendations recomendations={this.state.recomendations} />}
      </div>;
  }
}
// console.log('before connect');
// const connect = ReactRedux.connect;
// connect((store, ownProps) => {
//   console.log('hi this is my store : ');
//   console.log(store );
//   //whatever i return here it will be sent as props
//   return { name: "name is here !" };
// })(Layout);
