    function alternarSenha(idInput, icone) {
        const input = document.getElementById(idInput);
        if (input.type === "password") {
            input.type = "text";
            icone.textContent = "◉";
        } else {
            input.type = "password";
            icone.textContent = "○";
        }
    }
    function mostrarCadastro() {
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('registerForm').classList.remove('hidden');
}

function mostrarLogin() {
    document.getElementById('registerForm').classList.add('hidden');
    document.getElementById('loginForm').classList.remove('hidden');
}
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let valido = true;

    const nome = document.querySelector('#registerForm input[name="name"]').value.trim();
    const email = document.getElementById('email-cadastro').value.trim();
    const senha = document.getElementById('senha-cadastro').value;

    
    if (nome === "") {
        document.getElementById('erro-nome').textContent = "O nome é obrigatório";
        valido = false;
    } else {
        document.getElementById('erro-nome').textContent = "";
    }

    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('erro-email').textContent = "E-mail inválido";
        valido = false;
    } else {
        document.getElementById('erro-email').textContent = "";
    }

    
    if (senha.length < 6) {
        document.getElementById('erro-senha-cadastro').textContent = "A senha precisa ter no mínimo 6 caracteres";
        valido = false;
    } else {
        document.getElementById('erro-senha-cadastro').textContent = "";
    }

    if (valido) {
        alert('Cadastro enviado');
        
    }
});
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let valido = true;

    const usuario = document.querySelector('#loginForm input[name="user"]').value.trim();
    const senha = document.getElementById('senha-login').value;

    if (usuario === "") {
        valido = false;
    }

    if (senha === "") {
        valido = false;
    }

    if (valido) {
        alert('Login enviado');
    } else {
        alert('Preencha usuário e senha');
    }
});