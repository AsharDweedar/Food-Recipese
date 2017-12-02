//import { Provider } from "react-redux"
var { Provider } = window.ReactRedux;
$(document).ready(function() {
    console.log('before rendering')
    console.log(Layout)
    console.log(window.Layout)
  ReactDOM.render(
    <Provider store={store}>
      <window.Layout />
    </Provider>,
    document.getElementById("container")
  );
}); 