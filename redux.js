
//PENDING , FULFILLED , REJECTED => if there is error 
const middleWares = applyMiddleware(promise() ,thunk, logger())

/************************************************/
/****************** userReducer *****************/
/************************************************/

const userReducer = function ( state = {
    user : {
        email : "",
        name : "",
        password : "",
        fav : [],

    }
}, action ) {
    if (action.type === "DEF") {
        state = Object.assign({},state, {user : action.user});
    }
    return state;
}

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
/******************** reducer *******************/
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
//using thunk
store.dispatch((dis) => {
    dis({ type: "DEF", user: {name: "name of user2" } })
    dis({ type: "DEF", user: {name: "name of user3" } })
});