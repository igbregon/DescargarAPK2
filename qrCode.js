document.addEventListener("DOMContentLoaded", function () {
    var enlaceDescarga = "https://drive.google.com/drive/folders/1EBHqjDiz0EiwABJYzjgY7M75Hr11oP7_"; 
    var qrcode = new QRCode(document.getElementById("codigoQR"), {
        text: enlaceDescarga,
        width: 256,
        height: 256
    });
});
