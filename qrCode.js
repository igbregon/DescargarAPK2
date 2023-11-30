document.addEventListener("DOMContentLoaded", function () {
    var enlaceDescarga = "https://github.com/TomasPaz22/DescargarAPK/releases/download/Apk/app-release.apk"; 
    var qrcode = new QRCode(document.getElementById("codigoQR"), {
        text: enlaceDescarga,
        width: 256,
        height: 256
    });
});
