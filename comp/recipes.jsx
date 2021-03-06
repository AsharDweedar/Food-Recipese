
class recipes extends React.Component {
  constructor(props) {
    console.log("props recipes : ");
    console.log(props);
    super(props);
  }

  render () {
    var list = [];
    var recipes = this.props.recipes;
    for (var i = 0; i < recipes.length; i++) {
      var recipe = recipes[i];
      list.push(<div className="row" width="40%" onClick={() => this.props.show("showRecipePage", recipe.id)} key={recipe.id}>
          <div className="col-sm-6 col-md-4">
            <div className="thumbnail">
              <div className="caption">
                <h3>{recipe.name}</h3>
              </div>
            </div>
          </div>
        </div>);
    }
    return <div>
      {list}
    </div>;
  }
}
