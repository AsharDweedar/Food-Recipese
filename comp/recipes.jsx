
class recipes extends React.Component {
  constructor(props) {
    console.log("props recipes : ");
    console.log(props);
    super(props);
  }

  render () {
    var list = [];
    for (var recipe of this.props.recipes) {
      list.push(<div className="row" width = "40%"onClick={() => this.props.show("showRecipePage", recipe)}>
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
