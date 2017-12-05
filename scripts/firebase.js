// Initialize Firebase
var config = {
  apiKey: "AIzaSyCyNVuhw15FXBK8csnceSkfylzOfRJT9IU",
  authDomain: "food-recipese.firebaseapp.com",
  databaseURL: "https://food-recipese.firebaseio.com",
  projectId: "food-recipese",
  storageBucket: "food-recipese.appspot.com",
  messagingSenderId: "751614730997"
};
firebase.initializeApp(config);

// var recipese = {
//   name: "how to make sandwish",
//   time: "02:00",
//   ingrediants: [{ingrediant : "bread", quantity : "1 Leaf"}, {ingrediant : "labaneh", quantity : "3 TS"}],
//   preparing: "open the bread leaf then put the lananeh",
//   comments: [{ auth: "Ashar Dweedar", comm: "you can eat it while drinkin juice" }]
// };
// var ID = firebase.database().ref().child('recipese').push().key;
// var path = firebase.database().ref("recipese/" + ID);
// path
//   .set(recipese)
//   .then(stng => {
//     console.log("success " + stng);
//   })
//   .catch(({ message }) => console.log("failed" + message));







/*
 //set data*************************************************************
            var user = { name: "Ashar Dweedar", email: "Ashar@email.com", password:  "hi there" , fav : ['1'], recipese : ['1']};
                var ID = 1;
                var path = firebase.database().ref('users/' + ID);
                path.set(user)
                    .then(() => {
                        console.log('success');
                    })
                    .catch((err) => {
                        console.log('failed' + err.message);
                        console.log(err);
                    })
            var recipese = { name: "test name", time: "02:00", ingrediants: ["milk", "sugar", "water"], preparing: "preparing stuff" };
            var ID = 1;
            var path = firebase.database().ref('recipese/' + ID);
            path.set(recipese)
                .then((stng) => {
                    console.log('success ' + stng);
                })
               .catch(({ message }) => console.log('failed' + message))

               fetch data *************************************************************
                var ID = "1";
                firebase.database().ref('recipese/' + ID).once('value').then((data)=> console.log(data.val()))
          
            //------------------------------------------------ update => resave on the same id

            /*
            var data = { name: 'sec name' };
            firebase.database().ref('recipese/' + '1').update(data).then(function () {
                console.log(' succeeded');
            })
            .catch(function (error) {
                console.log(' failed' + error.message);
            });
            //-------------------------------------- Delete Data - field 

            var MyPath = firebase.database().ref('Users/' + '1');
            MyPath.child('Age').remove().then(function () {
                console.log("Remove succeeded.")
            })
                .catch(function (error) {
                    console.log("Remove failed: " + error.message)
                });

            //----------------------------------- Listen Data

            var UserID = 225422;
            var MyPath = firebase.database().ref('Users/' + UserID);
            MyPath.on('value', function (GetData) {

                console.log("Change Data", GetData.val());

            });

            //-------------- Child 

            var UserID = 225422;
            var Child = "FirstName";
            var MyPath = firebase.database().ref('Users/' + UserID + '/' + Child);
            MyPath.on('value', function (GetData) {

                console.log("Change Data " + Child + ": " + GetData.val());

            }); */