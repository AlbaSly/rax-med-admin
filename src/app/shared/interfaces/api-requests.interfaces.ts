export interface IRegistrar {
    persona: {
        nombre: string,
        apellidoPaterno: string,
        apellidoMaterno: string,
        fechaNacimiento: Date,
        curp: string,
        telefono: string,
        activo: boolean,
    };
    credenciales: {
        email: string
    };
    rol: {
        nombre: string,
        password: string | null
    };
}

export interface IIniciarSesion {
    email: string;
    password: string;
}

export interface IRecuperarCuenta {
    email: string;
}

export interface INuevaContrasena {
    email: string;
    codigo: string;
    password: string;
}

export interface ICrearEspecialidad {
    nombre: string;
    descripcion: string;
    duracionPorSesion: number;
}

export interface ICrearConsultorio {
    nombre: string;
    notas: string;
}