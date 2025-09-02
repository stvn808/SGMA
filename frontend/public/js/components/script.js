// Função para exibir a mensagem com animação
function showMessage(message, type) {
    const messageElement = document.getElementById('message');
    messageElement.textContent = message;
    messageElement.classList.remove('show', 'success', 'error');
    messageElement.classList.add(type, 'show');

    // Esconde a mensagem após 4 segundos
    setTimeout(() => {
        messageElement.classList.remove('show');
    }, 4000);
}

// Função para registrar um novo usuário
document.getElementById('registerForm')?.addEventListener('submit', function (e) {
    e.preventDefault();

    let username = document.getElementById('newUsername').value;
    let password = document.getElementById('newPassword').value;

    // Verifica se já existe um usuário com o mesmo nome
    if (localStorage.getItem(username)) {
        showMessage('Nome de usuário já existe!', 'error');
    } else {
        // Armazena o novo usuário no localStorage
        localStorage.setItem(username, JSON.stringify({ password }));
        showMessage('Conta criada com sucesso!', 'success');

        // Adiciona a animação de fade-out no body
        document.body.classList.add('fade-out');

        // Aguarda a animação de fade-out e depois redireciona
        setTimeout(() => {
            window.location.href = '../login/index.html';  // Redireciona para a página de login
        }, 2000);  // Tempo da animação (1 segundo)
    }
});

// Função para fazer o login
document.getElementById('loginForm')?.addEventListener('submit', function (e) {
    e.preventDefault();

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    // Verifica se o usuário existe no localStorage
    let user = localStorage.getItem(username);

    if (user) {
        // Verifica se a senha está correta
        if (JSON.parse(user).password === password) {
            showMessage('Login realizado com sucesso!', 'success');
            setTimeout(() => {
                window.location.href = '../social-links/social-links.html'; // Redireciona para a página de links sociais
            }, 400);
        } else {
            showMessage('Senha incorreta!', 'error');
        }
    } else {
        showMessage('Usuário não encontrado!', 'error');
    }
});

