class recomendations extends React.Component {
  constructor(props) {
    super(props);
    console.log("props recomendations : ");
    console.log(props);
  }

  render() {
    var list = [];
    for (var rec of this.props.recomendations) {
      list.push(<div className="col-sm-6 col-md-4">
          <div className="thumbnail">
            <div className="caption">
              <h3>{rec.text}</h3>
              <h5>{rec.auth}</h5>
            </div>
          </div>
        </div>);
    }
    return <div>{list}</div>;
  }
}