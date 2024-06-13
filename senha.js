function senha(length, specialChar) {
    var charset = "qwertyuiopasdfghjklçzxcvbnmQWERTYUIOPASDFGHJKLÇZXCVBNM";
    var specialChars = "!@#$*/?-+çÇ^~ªº°1234567890";
    var allChars = specialChar ? charset + specialChars : charset;
    var password = "";
     
    for (var i = 0; i < length; i++) {
        var senhaa = Math.floor(Math.random() * allChars.length);
        password += allChars[senhaa];
    }
    return password;
}
console.log(senha(10, true));








C:\Users\Aluno\Desktop\2024-06-13 11_34_33-senha.js - PasswordGenerator - Visual Studio Code.png