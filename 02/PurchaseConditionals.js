// loggedin
// card payment verified
// email / phoneNumber verified
// then purchase can be done

var isLoggedIn = true;
var isEmailVerified = true;
var cardInfoCorrect = false;

// if(isLoggedIn){
//     if (isEmailVerified) {
//         if (cardInfoCorrect) {
//             console.log("You can purchase product");
//         }
//     }
// }

if (isLoggedIn && isEmailVerified && cardInfoCorrect ) {
    console.log("You can Purchase a product");
}else{
    console.log("Check all the parameters like login card info and email verification");
}