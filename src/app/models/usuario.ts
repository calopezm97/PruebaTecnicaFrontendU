export class Usuario{
    id!:number;
    nombre!: string;
    apellido!: string;
    pais!: Pais;
    tipoDocumento!: TipoDocumento;
    documento!: string;
    email!: string;
    estado!: Estado;
    addmissionDate!: Date;
    creadoEl!: Date;
    actualizadoEl?: Date;
}
export class TipoDocumento{
    sigla!: string;
    nombre!: string;
}
export class Estado{
    nombre!: string;
}
export class Pais{
    nombre!: string;
    indicativo!: string;
}
