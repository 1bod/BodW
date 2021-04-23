const auth = firebase.auth()

const logPopup = document.querySelector('.log')
const accPopup = document.querySelector('.acc')

const GLogin = document.querySelector(".GLogin")
const GSignOut = document.querySelector(".SignOut")

const provider = new firebase.auth.GoogleAuthProvider()

GLogin.onclick = () => auth.signInWithPopup(provider)

GSignOut.onclick = () => auth.signOut()

auth.onAuthStateChanged(user => {
    if (user) {
        logPopup.classList.remove("visible")
        logPopup.classList.add("invisible")
        accPopup.classList.remove("invisible")
        accPopup.classList.add("visible")
        accPopup.querySelector("span").innerHTML = user.displayName
    } else {
        logPopup.classList.remove("invisible")
        logPopup.classList.add("visible")
        accPopup.classList.remove("visible")
        accPopup.classList.add("invisible")
    }
})