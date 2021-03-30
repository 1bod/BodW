"use strict";

var cookiepopup = document.querySelector(".cookieP");
var browser = browser || chrome;

cookiepopup.querySelector("button").onclick = function () {
  browser.cookies.set({
    "url": window.location.hostname,
    "name": "cookiesAcknowledged",
    "value": true,
    "session": false,
    "expirationDate": Date.now() + 2628000
  });
  cookiepopup.remove();
};