import { RoutesUtils } from "../../utils"

/**Build Route alias */
const br = RoutesUtils.buildRoute;

export namespace AppRoutes {
    /**AUTH */
    export const AuthModulePaths = {
        index: 'auth',
        login: 'login',
        crearCuenta: 'crear-cuenta',
        recuperarCuenta: 'recuperar-cuenta',
    }
    export const AuthRoutePaths = {
        index: br(AuthModulePaths.index),
        login: br(AuthModulePaths.index, AuthModulePaths.login),
        crearCuenta: br(AuthModulePaths.index, AuthModulePaths.crearCuenta),
        recuperarCuenta: br(AuthModulePaths.index, AuthModulePaths.recuperarCuenta),
    }
    
    /**HOME */
    export const HomeModulePaths = {
        index: 'inicio',
        perfil: 'mi-perfil'
    }
    export const HomeRoutePaths = {
        index: br(HomeModulePaths.index),
        perfil: br(HomeModulePaths.index, HomeModulePaths.perfil),
    }
    
    
    /**GESTION */
    export const GestionModulePaths = {
        index: 'gestion',
        registrarUsuario: 'registrar-usuario',
        registrarEspecialidad: 'registrar-especialidad',
        registrarConsultorio: 'registrar-consulorio',
    }
    export const GestionRoutePaths = {
        index: br(GestionModulePaths.index),
        registrarUsuario: br(GestionModulePaths.index, GestionModulePaths.registrarUsuario),
        registrarEspecialidad: br(GestionModulePaths.index, GestionModulePaths.registrarEspecialidad),
        registrarConsultorio: br(GestionModulePaths.index, GestionModulePaths.registrarConsultorio),
    }
    
    
    /**USUARIOS */
    export const UsuariosModulePaths = {
        index: 'usuarios',
        ver: 'ver/:id',
    }
    export const UsuariosRoutePaths = {
        index: br(UsuariosModulePaths.index),
        ver: br(UsuariosModulePaths.index, UsuariosModulePaths.ver),
    }

    /**MEDICOS */
    export const MedicosModulePaths = {
        index: 'medicos',
        ver: 'ver/:id',
        editar: "editar/:id",
        gestionarEspecialidades: "gestionar-especialidades/:id",
    }
    export const MedicosRoutePaths = {
        index: br(MedicosModulePaths.index),
        ver: br(MedicosModulePaths.index, MedicosModulePaths.ver),
        editar: br(MedicosModulePaths.index, MedicosModulePaths.editar),
        gestionarEspecialidades: br(MedicosModulePaths.index, MedicosModulePaths.gestionarEspecialidades),
    }

    /**PACIENTES */
    export const PacientesModulePaths = {
        index: 'pacientes',
        ver: 'ver/:id'
    }
    export const PacientesRoutePaths = {
        index: br(PacientesModulePaths.index),
        ver: br(PacientesModulePaths.index, PacientesModulePaths.ver),
    }

    /**ESPECIALIDADES */
    export const EspecialidadesModulePaths = {
        index: 'especialidades',
        ver: 'ver/:id',
    }
    export const EspecialidadesRoutePaths = {
        index: br(EspecialidadesModulePaths.index),
        ver: br(EspecialidadesModulePaths.index, EspecialidadesModulePaths.ver),
    }


    /**CONSULTORIOS */
    export const ConsultoriosModulePaths = {
        index: 'consultorios',
        ver: 'ver/:id',
    }
    export const ConsultoriosRoutePaths= {
        index: br(ConsultoriosModulePaths.index),
        ver: br(ConsultoriosModulePaths.index, ConsultoriosModulePaths.ver)
    }
}