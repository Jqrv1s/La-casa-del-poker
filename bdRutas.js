class Numero{
    constructor(nombre){
        this.nombre = nombre;
    }    
}

class Calle{
    constructor(nombre){
        this.nombre = nombre;
        this.numActualDeNumeros = 0;
        this.listaNumeros = [];
    }

    insertarNumero(numeroObj) {
        this.listaNumeros[this.numActualDeNumeros] = numeroObj;
        this.numActualDeNumeros++;
    }
    
    getNumero(numero){
        let encontrado = false;
        let i = 0;
        let num = new Numero;
        while((encontrado == false) && (i<this.listaNumeros.length)){
            if(numero == this.listaNumeros[i].nombre){
                encontrado = true;
                num = this.listaNumeros[i];
            }
            i++;
        }
        return num;
    }
}

class Colonia{
    constructor(nombre){
        this.nombre = nombre;
        this.listaCalles = [];
        this.numCalle = 0;
    }

    insertarCalle(calleObj){
        this.listaCalles[this.numCalle] = calleObj;
        this.numCalle++;
    }

    getCalle(calleNombre){
        let encontrado = false;
        let i = 0;
        let c = new Calle;
        while(encontrado == false && i<this.listaCalles.length){
            if(calleNombre.toUpperCase == this.listaCalles[i].nombre.toUpperCase){
                encontrado = true;
                c = this.listaCalles[i];
            }
            i++;
        }
        return c;
    }
}

class Codigo{
    constructor(nombre){
        this.nombre = nombre;
        this.listaColonias = [];
        this.numColonia = 0;
    }

    insertarColonia(coloniaObj){
        this.listaColonias[this.numColonia] = coloniaObj;
        this.numColonia++;
    }

    getColonia(coloniaNombre){
        let encontrado = false;
        let i = 0;
        let c = new Colonia;
        while(encontrado == false&& i<this.listaColonias.length){
            if(coloniaNombre.toUpperCase == this.listaColonias[i].nombre.toUpperCase){
                encontrado = true;
                c = this.listaColonias[i];
            }
            i++;
        }
        return c;
    }
}
class Ciudad{
    constructor(nombre){
        this.nombre = nombre;
        this.listaCodigos = [];
        this.numCodigo = 0;
    }

    insertarCodigo(codigoObj){
        this.listaCodigos[this.numCodigo] = codigoObj;
        this.numCodigo++;
    }

    getCodigo(codigoNombre){
        let encontrado = false;
        let i = 0;
        let c = new Codigo;
        while(encontrado == false && i<this.listaCodigos.length){
            if(codigoNombre == this.listaCodigos[i].nombre){
                encontrado = true;
                c = this.listaCodigos[i];
            }
            i++;
        }
        return c;
    }
}
class Ruta{
    constructor(nombre,chofer){
        this.nombre = nombre;
        this.chofer = chofer;
        this.listaCiudades = [];
        this.numCiudad = 0;
    }

    insertarCiudad(ciudadObj){
        this.listaCiudades[this.numCiudad] = ciudadObj;
        this.numCiudad++;
    }

    getCiudad(ciudadNombre){
        let encontrado = false;
        let i = 0;
        let c = new Ciudad;
        while(encontrado == false && i<this.listaCiudades.length){
            if(ciudadNombre == this.listaCiudades[i].nombre){
                encontrado = true;
                c = this.listaCiudades[i];
            }
            i++;
        }
        return c;
    }
}
export var rutas = new Array;

rutas[0] = new Ruta("Las Aguilas","");

rutas[0].insertarCiudad(new Ciudad("Zapopan"));
rutas[0].getCiudad("Zapopan").insertarCodigo(new Codigo(45080));
rutas[0].getCiudad("Zapopan").getCodigo(45080).insertarColonia(new Colonia("La calMa"));
rutas[0].getCiudad("Zapopan").getCodigo(45080).getColonia("La calma").insertarCalle(new Calle("Navio"));
rutas[0].getCiudad("Zapopan").getCodigo(45080).getColonia("la calma").getCalle("Navio").insertarNumero(new Numero(4655));

rutas[1] = new Ruta("El capu","Capu");
rutas[1].insertarCiudad(new Ciudad("Zapopan"));
rutas[1].getCiudad("Zapopan").insertarCodigo(new Codigo(45235));
rutas[1].getCiudad("Zapopan").getCodigo(45235).insertarColonia(new Colonia("Francisco Sarabia"));
rutas[1].getCiudad("Zapopan").getCodigo(45235).getColonia("Francisco Sarabia").insertarCalle(new Calle("Hernan Cortez"));
rutas[1].getCiudad("Zapopan").getCodigo(45235).getColonia("Francisco Sarabia").getCalle("Hernan Cortez").insertarNumero(new Numero(6945));

rutas[2] = new Ruta("Tlajomulco centro","");

rutas[2].insertarCiudad(new Ciudad("Tlajomulco"));
rutas[2].getCiudad("Tlajomulco").insertarCodigo(new Codigo(45645));
rutas[2].getCiudad("Tlajomulco").getCodigo(45645).insertarColonia(new Colonia("Ciudad Tlajomulco"));
rutas[2].getCiudad("Tlajomulco").getCodigo(45645).getColonia("Ciudad Tlajomulco");
rutas[2].getCiudad("Tlajomulco").getCodigo(45645).getColonia("Ciudad Tlajomulco").insertarCalle(new Calle("Lopez Mateos sur"));
rutas[2].getCiudad("Tlajomulco").getCodigo(45645).getColonia("Ciudad Tlajomulco").getCalle("Lopez MAteos sur").insertarNumero(new Numero(9900));

rutas[3] = new Ruta("Buganbilias","");

rutas[3].insertarCiudad(new Ciudad("Tlajomulco"));
rutas[3].getCiudad("Tlajomulco").insertarCodigo(new Codigo(45645));
rutas[3].getCiudad("Tlajomulco").getCodigo(45645).insertarColonia(new Colonia("Residencial Provenza"));
rutas[3].getCiudad("Tlajomulco").getCodigo(45645).getColonia("Residencial Provenza");
rutas[3].getCiudad("Tlajomulco").getCodigo(45645).getColonia("Residencial Provenza").insertarCalle(new Calle("Lopez Mateos sur"));
rutas[3].getCiudad("Tlajomulco").getCodigo(45645).getColonia("Residencial Provenza").getCalle("Lopez MAteos sur").insertarNumero(new Numero(157));

rutas[4] = new Ruta("Tecnology Park","La bala");

rutas[4].insertarCiudad(new Ciudad("Zapopan"));
rutas[4].getCiudad("Zapopan").insertarCodigo(new Codigo(45019));
rutas[4].getCiudad("Zapopan").getCodigo(45019).insertarColonia(new Colonia("Santilla Residecial"));
rutas[4].getCiudad("Zapopan").getCodigo(45019).getColonia("Santillana Residencial").insertarCalle(new Calle("Paseo de la luna"));
rutas[4].getCiudad("Zapopan").getCodigo(45019).getColonia("Santillana Residencial").getCalle("Paseo de la luna").insertarNumero(new Numero(997));
rutas[4].getCiudad("Zapopan").getCodigo(45019).insertarColonia(new Colonia("San juan de ocotlan"));
rutas[4].getCiudad("Zapopan").getCodigo(45019).getColonia("San juan de ocotlan").insertarCalle(new Calle("Parques Vallarta coto cedro"));
rutas[4].getCiudad("Zapopan").getCodigo(45019).getColonia("San juan de ocotlan").getCalle("Parques Vallarta coto cedro").insertarNumero(new Numero(88));
rutas[4].getCiudad("Zapopan").insertarCodigo(new Codigo(45220));
rutas[4].getCiudad("Zapopan").getCodigo(45220).insertarColonia(new Colonia("San wenceslao"));
rutas[4].getCiudad("Zapopan").getCodigo(45220).getColonia("San wenceslao").insertarCalle(new Calle("Del Marques"));
rutas[4].getCiudad("Zapopan").getCodigo(45220).getColonia("San wenceslao").getCalle("Del Marques").insertarNumero(new Numero(3960));

rutas[5] = new Ruta("Zapopan Centro","Limon");

rutas[5].insertarCiudad(new Ciudad("Zapopan"));
rutas[5].getCiudad("Zapopan").insertarCodigo(new Codigo(45136));
rutas[5].getCiudad("Zapopan").getCodigo(45136).insertarColonia(new Colonia("Jardin Real"));
rutas[5].getCiudad("Zapopan").getCodigo(45136).getColonia("Jardin Real").insertarCalle(new Calle("Jardin de los Ciruelos"));
rutas[5].getCiudad("Zapopan").getCodigo(45136).getColonia("Jardin Real").getCalle("Jardin de los Ciruelos").insertarNumero(new Numero(221));
rutas[5].getCiudad("Zapopan").getCodigo(45136).insertarColonia(new Colonia("Puerta Las Lomas"));
rutas[5].getCiudad("Zapopan").getCodigo(45136).getColonia("Puerta Las Lomas").insertarCalle(new Calle("Av Universidad"));
rutas[5].getCiudad("Zapopan").getCodigo(45136).getColonia("Puerta Las Lomas").getCalle("Av Universidad").insertarNumero(new Numero(2662));
rutas[5].getCiudad("Zapopan").insertarCodigo(new Codigo(45138));
rutas[5].getCiudad("Zapopan").getCodigo(45138).insertarColonia(new Colonia("Jardines del valle"));
rutas[5].getCiudad("Zapopan").getCodigo(45138).getColonia("Jardines del valle").insertarCalle(new Calle("Av. magnolias"));
rutas[5].getCiudad("Zapopan").getCodigo(45138).getColonia("Jardines del valle").getCalle("Av. magnolias").insertarNumero(new Numero(1375));
rutas[5].getCiudad("Zapopan").getCodigo(45138).insertarColonia(new Colonia("La Casita"));
rutas[5].getCiudad("Zapopan").getCodigo(45138).getColonia("La Casita").insertarCalle(new Calle("Azucenas"));
rutas[5].getCiudad("Zapopan").getCodigo(45138).getColonia("La Casita").getCalle("Azucenas").insertarNumero(new Numero(960));

rutas[6] = new Ruta("Barranquitas","Humberto");

rutas[6].insertarCiudad(new Ciudad("Guadalajara"));
rutas[6].getCiudad("Guadalajara").insertarCodigo(new Codigo(44270));
rutas[6].getCiudad("Guadalajara").getCodigo(44270).insertarColonia(new Colonia("Alcalde Barranquitas"));
rutas[6].getCiudad("Guadalajara").getCodigo(44270).getColonia("Alcalde Barranquitas").insertarCalle(new Calle("Juan Cano"));
rutas[6].getCiudad("Guadalajara").getCodigo(44270).getColonia("Alcalde Barranquitas").getCalle("Juan Cano").insertarNumero(new Numero(893));
rutas[6].getCiudad("Guadalajara").insertarCodigo(new Codigo(44220));
rutas[6].getCiudad("Guadalajara").getCodigo(44220).insertarColonia(new Colonia("Santa Elena Alcalde Poniente"));
rutas[6].getCiudad("Guadalajara").getCodigo(44220).getColonia("Santa Elena Alcalde Poniente").insertarCalle(new Calle("Pamplona"));
rutas[6].getCiudad("Guadalajara").getCodigo(44220).getColonia("Santa Elena Alcalde Poniente").getCalle("Pamplona").insertarNumero(1172);
rutas[6].getCiudad("Guadalajara").getCodigo(44220).insertarColonia(new Colonia("la Guadalupana"));
rutas[6].getCiudad("Guadalajara").getCodigo(44220).getColonia("la Guadalupana").insertarCalle(new Calle("jesus Ortiz"));
rutas[6].getCiudad("Guadalajara").getCodigo(44220).getColonia("la Guadalupana").getCalle("jesus Ortiz").insertarNumero(new Numero(2552));



export function prueba(){
    console.log();
    for(let i=0; i < rutas.length; i++){
        console.log(rutas[i]);
    }
}