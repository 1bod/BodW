const cookiepopup = document.querySelector(".cookieP");
cookiepopup.querySelector("button").onclick = function () {
    var expD = new Date()
    expD.setTime(expD.getTime() + (2628000000))
    document.cookie = "cookiesAcknowledged=true;" + "expires=" + expD.toUTCString() + ";path=/";
    cookiepopup.remove()
}

decodeURIComponent(document.cookie).split("; ").forEach(list => {
    console.log(list)
    if (list.split("=")[0] == "cookiesAcknowledged") {
        if (list.split("=")[1] == "true") {
            cookiepopup.remove()
        }
    }
})