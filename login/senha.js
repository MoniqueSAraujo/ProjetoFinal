function validatePasswords() {
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;

    // Verifica se a senha atende aos critérios mínimos
    if (!password.match(lowerCaseLetters) || !password.match(upperCaseLetters) || !password.match(numbers)) {
        document.getElementById('passwordMessage').innerHTML = "A senha deve conter pelo menos uma letra minúscula, uma letra maiúscula e um número";
        return false;
    }

    // Verifica se as senhas coincidem
    if (password !== confirmPassword) {
        document.getElementById('passwordMessage').innerHTML = "As senhas não coincidem";
        return false;
    }

    // Limpa a mensagem de erro se tudo estiver correto
    document.getElementById('passwordMessage').innerHTML = "";

    // Mostra as senhas digitadas por um breve momento
    showPasswordTemporarily('password');
    showPasswordTemporarily('confirmPassword');

    // Aqui você pode adicionar código para enviar a nova senha para o servidor, etc.
    alert("Senha redefinida com sucesso!");

    return true;
}

function showPasswordTemporarily(id) {
    var passwordField = document.getElementById(id);
    var password = passwordField.value;
    var index = 0;

    // Muda o tipo do campo para texto temporariamente
    passwordField.type = 'text';

    var intervalId = setInterval(function() {
        if (index <= password.length) {
            passwordField.value = password.substr(0, index);
            index++;
        } else {
            // Quando todas as letras foram reveladas, volta a ser campo de senha
            clearInterval(intervalId);
            passwordField.type = 'password';
            passwordField.value = password; // Restaura o valor original
        }
    }, 100); // Mostra rapidamente cada letra antes de voltar a ser campo de senha
}

function updatePasswordDisplay(id) {
    var passwordField = document.getElementById(id);
    var fieldType = passwordField.type;
    var fieldValue = passwordField.value;

    // Atualiza o campo de senha para texto temporariamente
    passwordField.type = 'text';

    setTimeout(function() {
        // Volta a ser campo de senha após um curto período
        passwordField.type = 'password';
    }, 100); // Mostra rapidamente antes de voltar a ser campo de senha
}
