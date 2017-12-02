const { createStore, combineReducers, applyMiddleware } = Redux;
const logger = reduxLogger.createLogger;
const thunk = ReduxThunk.default;
const promise = ReduxPromiseMiddleware.default;
//PENDING , FULFILLED , REJECTED => if there is error (the promise)
const middleWares = applyMiddleware(promise() ,thunk, logger())

/************************************************/
/****************** userReducer *****************/
/************************************************/

const userReducer = function (state, action) {
    switch (action.type) {
        case "DEF":
            state = Object.assign({}, state, action.user );
            break;
        default:
            state = { email: "", name: "", password: "", fav: [], myRecipes: [] };
            break;
    }
  return state;
};

/************************************************/
/*************** recipesReducer ****************/
/************************************************/

const recipesReducer = function ( state , action ) {
    switch (action.type) {
        case "ADD":
            state = state.concat(action.recipes);
            break;
        default:
            state = [];
            break;
    }
    return state;
}

/************************************************/
/************* combine reducers *****************/
/************************************************/

const reducer = combineReducers({
    user: userReducer,
    recipes : recipesReducer
});

/************************************************/
/******************** store   *******************/
/************************************************/

const store = createStore(reducer, middleWares);
store.subscribe(() => {
    console.log("new state :" , store.getState());
})

/************************************************/
/***************** user actions *****************/
/************************************************/
//thunk will work here 
//store.dispatch((dis) => {
    //     dis({ type: "DEF", user: {name: "name of user2" } })
    //     dis({ type: "DEF", user: {name: "name of user3" } })
    // });

const recipesActions = {
  comment: comment => {
    //do something to send it to firebase
    return { type: "comment", comment: comment };
  }
};
    
    
/************************************************/
/***************** user actions *****************/
/************************************************/
//promise will work here 
// store.dispatch({ type: "add", recipes: some aync function });

const userActions = {
  addToFav: recipes => {
    return { type: "addToFav", fav: recipes };
  },
  addToRecipes: recipes => {
    return { type: "addToFav", myRecipes: recipes };
  }
};