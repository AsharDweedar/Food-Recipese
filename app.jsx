//import { Provider } from "react-redux"
var { Provider } = window.ReactRedux;
$(document).ready(function() {
    // debugger;
    console.log('before rendering')
  ReactDOM.render(
    <Provider store={store}>
      <Layout />
    </Provider>,
    document.getElementById("container")
  );
}); 