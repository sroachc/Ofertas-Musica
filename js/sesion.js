document.querySelector('#btnIngresar').addEventListener('click', iniciarSesion);

function iniciarSesion() {
    var sCorreo = '';
    var sPass = '';
    var bAcceso = false;

    sCorreo = document.querySelector('#correo').value;
    sPass = document.querySelector('#pass').value;

    bAcceso = validarCredenciales(sCorreo, sPass);   

    if (bAcceso == true) {
        ingresar();
    }

}

function ingresar() {
    var rol = sessionStorage.getItem('rolUsuario');

    switch (rol) {
        case '1':
            window.location.href = 'admin.html';
        break;
        
        case '2':
            window.location.href = 'usuario.html';
        break;

        default:
            window.location.href = 'index.html';
        break;

    }
}