const cookiepopup = document.querySelector(".cookieP");
cookiepopup.querySelector("button").onclick = function () {
    var expD = new Date()
    expD.setTime(expD.getTime() + (2628000000))
    document.cookie = "cookiesAcknowledged=true;" + "expires=" + expD.toUTCString() + ";samesite=strict;path=/";
    cookiepopup.remove()
}

decodeURIComponent(document.cookie).split("; ").forEach(list => {
    if (list.split("=")[0] == "cookiesAcknowledged") {
        if (list.split("=")[1] == "true") {
            cookiepopup.remove()
        }
    }
})

let url = new URL(window.location.href)
let err = url.searchParams.get("err") || null

if(err){
    if (err == 'passwordRejected') {
        let errMessage = "Une erreur est survenue: le mot de passe que vous avez entré ne correspond pas aux recommendations de sécurité."
        document.querySelector("#regForm").insertAdjacentHTML("afterbegin","<div class='alert alert-danger'>"+errMessage+"</div>")
    }if (err == 'alreadyExists') {
        let errMessage = "Une erreur est survenue: un compte existe déja avec cette adresse email."
        document.querySelector("#regForm").insertAdjacentHTML("afterbegin","<div class='alert alert-danger'>"+errMessage+"</div>")
    }if (err == 'badEmail') {
        let errMessage = "Une erreur est survenue: l'adresse email entrée n'est pas valide."
        document.querySelector("#regForm").insertAdjacentHTML("afterbegin","<div class='alert alert-danger'>"+errMessage+"</div>")
    }if (err == 'unknownAccount') {
        let errMessage = "Une erreur est survenue: aucun compte ne correspond aux informations entrées."
        document.querySelector("#logForm").insertAdjacentHTML("afterbegin","<div class='alert alert-danger'>"+errMessage+"</div>")
    } else {
        document.querySelector("#regForm").insertAdjacentHTML("afterbegin","<div class='alert alert-danger'>Une erreur inconnue est survenue: "+_.unescape(err)+"</div>")
    }
}
