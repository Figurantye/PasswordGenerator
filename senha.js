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

// Função para copiar a senha gerada para a área de transferência
function copyPassword() {
    const passwordField = document.getElementById('passwordField'); // Obtém o campo de senha
    passwordField.select(); // Seleciona o conteúdo do campo de senha
    document.execCommand('copy'); // Executa o comando de cópia
    alert('Senha copiada para a área de transferência!'); // Exibe um alerta informando que a senha foi copiada
}

// Adiciona um evento de clique ao botão "Generate Password"
document.getElementById('generateBtn').addEventListener('click', function() {
    const passwordLength = document.getElementById('passwordLength').value; // Obtém o comprimento da senha do campo de entrada

    const includeSpecialChars = document.getElementById('includeSpecialChars').checked; // Verifica se a opção de caracteres especiais está marcada

    const generatedPassword = senha(passwordLength, includeSpecialChars); // Gera a senha com base nos parâmetros fornecidos

    const passwordField = document.getElementById('passwordField'); // Obtém o campo de senha
    passwordField.value = generatedPassword; // Define o valor do campo de senha como a senha gerada
});
