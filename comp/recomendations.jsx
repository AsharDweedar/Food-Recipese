class recomendations extends React.Component {
  constructor(props) {
    super(props);
    console.log("props recomendations : ");
    console.log(props);
    this.state = { ...props };
  }

  render() {
    return <div>recomendations Component</div>;
  }
}