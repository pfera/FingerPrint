document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
    Fingerprint.isAvailable(isAvailableSuccess, isAvailableError, optionalParams);
}

function isAvailableSuccess(result) {
    /*
    result depends on device and os.
    iPhone X will return 'face' other Android or iOS devices will return 'finger' Android P+ will return 'biometric'
    */
    console.log(result)
    alert("Fingerprint available");
    Fingerprint.show({description: "Some biometric description"}, successAuth, errorAuth);
}

function isAvailableError(error) {
    // 'error' will be an object with an error code and message
    console.log(error.message);
    alert(error.message);
}

function successAuth(){
    alert("Authentification par empreinte digitale validée");
}

function errorAuth(error){
    alert("Authentication invalid " + error.message);
}