const auth = firebase.auth()

const logPopup = document.querySelector('.log')
const accPopup = document.querySelector('.acc')

const GLogin = document.querySelector(".GLogin button")
const GSignOut = document.querySelector(".SignOut")

const provider = new firebase.auth.GoogleAuthProvider()

GLogin.onclick = () => auth.signInWithPopup(provider)

GSignOut.onclick = () => auth.signOut()

auth.onAuthStateChanged(user => {
    if (user) {
        logPopup.hidden = true
        accPopup.hidden = false
        accPopup.querySelector("span").innerHTML = user.displayName
    }else {
        logPopup.hidden = false
        accPopup.hidden = true
    }
})