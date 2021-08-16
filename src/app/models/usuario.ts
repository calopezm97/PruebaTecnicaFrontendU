import { Estado } from "./estado";
import { pais } from "./pais";
import { TipoDocumento } from "./tipo-documento";

export class Usuario{
    id!:number;
    nombre!: string;
    apellido!: string;
    pais!: pais;
    tipoDocumento!: TipoDocumento;
    document!: string;
    email!: string;
    estado!: Estado;
    creadoEl!: Date;
    actualizadoEl?: Date;
}

