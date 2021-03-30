var auth = firebase.auth();
var logPopup = document.querySelector('.log');
var accPopup = document.querySelector('.acc');
var GLogin = document.querySelector(".GLogin button");
var GSignOut = document.querySelector(".SignOut");
var provider = new firebase.auth.GoogleAuthProvider();
GLogin.onclick = function () { return auth.signInWithPopup(provider); };
GSignOut.onclick = function () { return auth.signOut(); };
auth.onAuthStateChanged(function (user) {
    if (user) {
        logPopup.hidden = true;
        accPopup.hidden = false;
        accPopup.querySelector("span").innerHTML = user.displayName;
    }
    else {
        logPopup.hidden = false;
        accPopup.hidden = true;
    }
});
