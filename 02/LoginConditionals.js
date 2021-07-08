// logged in with twitter
// logged in with github
// logged in with google
// logged in with facebook

var isLoggedInWithTwitter = false;
var isLoggedInWithGithub = false;
var isLoggedInWithGoogle = false;
var isLoggedInWithFacebook = false;
var isLoggedInWithEmail = false;

// if any of the above condition is true log in the user

if (isLoggedInWithTwitter || isLoggedInWithGithub || isLoggedInWithGoogle || isLoggedInWithFacebook) {
    console.log("Logged in Successfully");
}
else{
    console.log("choose any login method first");
}


