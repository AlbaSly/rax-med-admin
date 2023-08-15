interface MongoDocument {
    _id: string,
    __v: string,
}

export interface IPersonas extends MongoDocument {
    nombre: string,
    apellidoPaterno: string,
    apellidoMaterno: string,
    fechaNacimiento: Date,
    sexo: string,
    curp: string,
    telefono: string,
    activo: boolean,
}

export interface IUsuarios extends MongoDocument {
    persona: IPersonas,
    rol: IRoles,
    email: string,
    password: string,
    codigo: string | null,
    expiracionCodigo: Date | null,
    activo: boolean,
}

export interface InfoUsuario {
    usuario: IUsuarios,
    medico: IMedicos | null,
    paciente: IPacientes | null,
}

export interface IMedicos extends MongoDocument {
    usuario: IUsuarios,
    horaEntrada: Date,
    horaSalida: Date,
    activo: boolean,
}

export interface IPacientes extends MongoDocument {
    usuario: IUsuarios,
    activo: boolean,
}

export interface IRoles extends MongoDocument { 
    nombre: string,
    password: string,
}

export interface IEspecialidades extends MongoDocument {
    nombre: string,
    descripcion: string,
    duracionSesion: number,
}

export interface IConsultorios extends MongoDocument {
    nombre: string,
    notas: string,
    activo: boolean,
}

export interface IMedicosEspecialidades extends MongoDocument {
    medico: IMedicos | number;
    especialidad: IEspecialidades;
    consultorio: IConsultorios;
    cedula: string;
    activo: boolean;
}