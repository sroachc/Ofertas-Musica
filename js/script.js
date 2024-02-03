//sagiri -> admin
//izumi -> usuario

//Funcion para llenar la lista de usuarios y obtenerla.
function obtenerListaUsuarios() {
    var listaUsuarios = JSON.parse(localStorage.getItem('listaUsuariosLs'));

    if (listaUsuarios == null) {
        listaUsuarios = [
            //id, nombre, correo, contraseña, rol
            ['1', 'Sagiri', 'sagiri@mail.com', '123', '1'],
            ['2', 'Izumi', 'izumi@mail.com', '123', '2']
        ]
        return listaUsuarios;
    }
}

//Funcion para validar los datos de usuario
function validarCredenciales(pCorreo, pPass) {
    var listaUsuarios = obtenerListaUsuarios();
    var bAcceso = false;

    //Recorre la lista
    for (var i = 0; i < listaUsuarios.length; i++) {
        if (pCorreo == listaUsuarios[i][2] && pPass == listaUsuarios[i][3]) {
            bAcceso = true;
            sessionStorage.setItem('usuarioActivo', listaUsuarios[i][1]);
            sessionStorage.setItem('rolUsuario', listaUsuarios[i][4]);
        }
    }
    return bAcceso;
}