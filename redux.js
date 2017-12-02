const { createStore, combineReducers, applyMiddleware } = Redux;
const logger = reduxLogger.createLogger;
const thunk = ReduxThunk.default;
const promise = ReduxPromiseMiddleware.default;
//PENDING , FULFILLED , REJECTED => if there is error (the promise)
const middleWares = applyMiddleware(promise() ,thunk, logger())

/************************************************/
/****************** userReducer *****************/
/************************************************/

const userReducer = function (
  state = {
      email: "",
      name: "",
      password: "",
      fav: [],
      myRecipese: []
  },
  action
) {
    console.log('state : ');
    console.log(state);
  if (action.type === "DEF") {
    state = Object.assign({}, state, { user: action.user });
  }
  return state;
};

/************************************************/
/*************** recipeseReducer ****************/
/************************************************/

const recipeseReducer = function ( state = [] , action ) {
    if (action.type === "ADD") {
        state = state.concat(action.recipese);
    }
    return state;
}


/************************************************/
/******************** reducers ******************/
/************************************************/

const reducer = combineReducers({
    user: userReducer,
    recipese : recipeseReducer
});

/************************************************/
/******************** store   *******************/
/************************************************/

const store = createStore(reducer, middleWares);
store.subscribe(() => {
    console.log("new state :" , store.getState());
})

/************************************************/
/******************** actions *******************/
/************************************************/

//promise will work here 
// store.dispatch({ type: "add", recipese: some aync function });
//thunk will work here 
store.dispatch((dis) => {
    dis({ type: "DEF", user: {name: "name of user2" } })
    dis({ type: "DEF", user: {name: "name of user3" } })
});