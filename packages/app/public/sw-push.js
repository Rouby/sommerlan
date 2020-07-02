var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
/// <reference no-default-lib="true"/>
/// <reference lib="es2015" />
/// <reference lib="webworker" />
var sw = self;
var applicationServerKey = 'BFgrQqNuZVowpcdsmTRQJkzPPKLISwco1EoHrUHqGaUbyGocrHWhywjkPEL8pzW0oqXcvocQAeqP4wmznmbm-iI';
sw.addEventListener('activate', function (event) {
    console.log('active');
    event.waitUntil(sw.clients.claim());
});
sw.addEventListener('pushsubscriptionchange', function (event) {
    console.log("[Service Worker]: 'pushsubscriptionchange' event fired.");
    event.waitUntil(sw.registration.pushManager
        .subscribe({
        userVisibleOnly: true,
        applicationServerKey: applicationServerKey
    })
        .then(function (newSubscription) {
        // TODO: Send to application server
        console.log('[Service Worker] New subscription: ', newSubscription);
    }));
});
sw.addEventListener('push', function (event) {
    console.log("[Service Worker]: 'push' event fired.");
    if (event.data) {
        try {
            var _a = event.data.json(), title = _a.title, options = __rest(_a, ["title"]);
            sw.registration.showNotification(title, options);
        }
        catch (err) {
            console.log("[Service Worker]: malformed push data '%s'.", event.data.text());
        }
    }
});
