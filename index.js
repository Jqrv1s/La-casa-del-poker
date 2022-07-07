import { rutas } from "./bdRutas.js";

var cajaCodigo = document.getElementById("codigoPostal");
var cajaCiudad = document.getElementById("ciudad");
var cajaColonia = document.getElementById("colonia");
var cajaCalle = document.getElementById("calle");
var cajaNumero = document.getElementById("numero");
var cajaPRuta = document.getElementById("pRuta");
var fondoBlack = document.getElementById("cover-box-search");

fondoBlack.addEventListener("click",ocultarBoxs);
function ocultarBoxs(){
    document.getElementById("box-searchCiudad").style.display = "none";
    document.getElementById("box-searchCodigos").style.display = "none";
    document.getElementById("box-searchColonias").style.display = "none";
    document.getElementById("box-searchCalles").style.display = "none";
    fondoBlack.style.display = "none";
}

cajaCodigo.addEventListener("keyup",listaCodigos);
cajaCodigo.addEventListener("click",mostrarBoxCodigos);

function mostrarBoxCodigos(){
    var arreglo = new Array;
    var a=0;
    var ul = document.getElementById("box-searchCodigos");
    for(let i=0;i<rutas.length;i++){
        for(let j=0;j<rutas[i].listaCiudades.length;j++){
            for(let k=0;k<rutas[i].listaCiudades[j].listaCodigos.length;k++){
                var numCodigo = rutas[i].listaCiudades[j].listaCodigos[k].nombre;
                arreglo[a] = numCodigo;
                a++;
            }
        }
    }
    let result = arreglo.filter((item,index)=>{
        return arreglo.indexOf(item)===index;
    })
    if(ul.getElementsByTagName("li").length==0){
        for(let i=0;i<result.length;i++){
            let nombre = result[i]; 
            var li = document.createElement("li");
            li.textContent = nombre;
            ul.appendChild(li);
        }
    }
    fondoBlack.style.display= "block";
    ul.style.display= "Block";
}

function listaCodigos(){
    var indices = new Array;
    var l=0;
    if(cajaCalle.value==""&cajaColonia.value==""&cajaCiudad.value==""&cajaNumero.value==""){
        for(let i=0; i<rutas.length;i++){
            for(let j=0;j<rutas[i].listaCiudades.length;j++){
                for(let k=0;k<rutas[i].listaCiudades[j].listaCodigos.length;k++){
                    var cod = rutas[i].listaCiudades[j].listaCodigos[k].nombre;
                
                    if(cajaCodigo.value == cod){
                        indices[l]=rutas[i].nombre + "  ";
                        l++;
                    }
                }
            }
        }
    }else if(cajaCalle.value==""&cajaColonia.value==""&cajaCiudad.value!=""&cajaNumero.value==""){

    }
    cajaPRuta.textContent=indices;
}


cajaCiudad.addEventListener("keyup",listaCiudades);
cajaCiudad.addEventListener("click",mostrarBoxCiudades);


function mostrarBoxCiudades(){
    var arreglo = new Array;
    var a=0;
    var ul = document.getElementById("box-searchCiudad");
    for(let i=0;i<rutas.length;i++){
        for(let j=0;j<rutas[i].listaCiudades.length;j++){
            var nombreCiud = rutas[i].listaCiudades[j].nombre.toUpperCase();
            arreglo[a] = nombreCiud;
            a++;
        }
    }
    let result = arreglo.filter((item,index)=>{
        return arreglo.indexOf(item)===index;
    })
    if(ul.getElementsByTagName("li").length==0){
        for(let i=0;i<result.length;i++){
            let nombre = result[i]; 
            var li = document.createElement("li");
            li.textContent = nombre;
            ul.appendChild(li);
        }
    }
    fondoBlack.style.display= "block";
    ul.style.display= "Block";
}

function listaCiudades(){
    var indices = new Array;
    var l=0;
    if(cajaCalle.value==""&cajaColonia.value==""&cajaCodigo.value==""&cajaNumero.value==""){
        for(let i=0; i<rutas.length;i++){
            for(let j=0;j<rutas[i].listaCiudades.length;j++){
                var ciud = rutas[i].listaCiudades[j].nombre;
                if(cajaCiudad.value.toUpperCase() == ciud.toUpperCase()){
                    indices[l]=rutas[i].nombre + "  ";
                    l++;
                }
            }
        }
    }else if(cajaCalle.value==""&cajaColonia.value==""&cajaCiudad.value!=""&cajaNumero.value==""){

    }
    cajaPRuta.textContent=indices;
}

cajaColonia.addEventListener("keyup",listaColonias);
cajaColonia.addEventListener("click",mostrarBoxColonias)

function mostrarBoxColonias(){
    var arreglo = new Array;
    var a=0;
    var ul = document.getElementById("box-searchColonias");
    for(let i=0;i<rutas.length;i++){
        for(let j=0;j<rutas[i].listaCiudades.length;j++){
            for(let k=0;k<rutas[i].listaCiudades[j].listaCodigos.length;k++){
                for(let l=0;l<rutas[i].listaCiudades[j].listaCodigos[k].listaColonias.length;l++){
                    var numCodigo = rutas[i].listaCiudades[j].listaCodigos[k].listaColonias[l].nombre;
                    arreglo[a] = numCodigo.toUpperCase();
                    a++;
                }
            }
        }
    }
    let result = arreglo.filter((item,index)=>{
        return arreglo.indexOf(item)===index;
    })
    if(ul.getElementsByTagName("li").length==0){
        for(let i=0;i<result.length;i++){
            let nombre = result[i]; 
            var li = document.createElement("li");
            li.textContent = nombre;
            ul.appendChild(li);
        }
    }
    fondoBlack.style.display= "block";
    ul.style.display= "Block";
}

function listaColonias(){
    var indices = new Array;
    var a=0;
    if(cajaCalle.value==""&cajaCiudad.value==""&cajaCodigo.value==""&cajaNumero.value==""){
        for(let i=0; i<rutas.length;i++){
            for(let j=0;j<rutas[i].listaCiudades.length;j++){
                for(let k=0;k<rutas[i].listaCiudades[j].listaCodigos.length;k++){
                    for(let l=0;l<rutas[i].listaCiudades[j].listaCodigos[k].listaColonias.length;l++){
                        var col = rutas[i].listaCiudades[j].listaCodigos[k].listaColonias[l].nombre;
                        
                        if(cajaColonia.value.toUpperCase() == col.toUpperCase()){
                            indices[a]=rutas[i].nombre + "  ";
                            a++;
                        }
                    }
                }
            }
        }
    }else if(cajaCalle.value==""&cajaColonia.value==""&cajaCiudad.value!=""&cajaNumero.value==""){

    }
    cajaPRuta.textContent=indices;
}
//console.log(rutas[0].listaCiudades[0].listaCodigos[0].listaColonias[0].nombre.toUpperCase())

cajaCalle.addEventListener("keyup",listaCalles);
cajaCalle.addEventListener("click",mostrarBoxCalles)

function mostrarBoxCalles(){
    var arreglo = new Array;
    var a=0;
    var ul = document.getElementById("box-searchCalles");
    for(let i=0;i<rutas.length;i++){
        for(let j=0;j<rutas[i].listaCiudades.length;j++){
            for(let k=0;k<rutas[i].listaCiudades[j].listaCodigos.length;k++){
                for(let l=0;l<rutas[i].listaCiudades[j].listaCodigos[k].listaColonias.length;l++){
                    for(let m=0;m<rutas[i].listaCiudades[j].listaCodigos[k].listaColonias[l].listaCalles.length;m++){
                        var numCodigo = rutas[i].listaCiudades[j].listaCodigos[k].listaColonias[l].listaCalles[m].nombre;
                        arreglo[a] = numCodigo.toUpperCase();
                        a++;
                    }
                    
                }
            }
        }
    }
    let result = arreglo.filter((item,index)=>{
        return arreglo.indexOf(item)===index;
    })
    if(ul.getElementsByTagName("li").length==0){
        for(let i=0;i<result.length;i++){
            let nombre = result[i]; 
            var li = document.createElement("li");
            li.textContent = nombre;
            ul.appendChild(li);
        }
    }
    fondoBlack.style.display= "block";
    ul.style.display= "Block";
}
function listaCalles(){
    var indices = new Array;
    var a=0;
    if(cajaColonia.value==""&cajaCiudad.value==""&cajaCodigo.value==""&cajaNumero.value==""){
        for(let i=0; i<rutas.length;i++){
            for(let j=0;j<rutas[i].listaCiudades.length;j++){
                for(let k=0;k<rutas[i].listaCiudades[j].listaCodigos.length;k++){
                    for(let l=0;l<rutas[i].listaCiudades[j].listaCodigos[k].listaColonias.length;l++){
                        for(let m=0;m<rutas[i].listaCiudades[j].listaCodigos[k].listaColonias[l].listaCalles.length;m++){
                            
                            var call = rutas[i].listaCiudades[j].listaCodigos[k].listaColonias[l].listaCalles[m].nombre;
                             
                            if(cajaCalle.value.toUpperCase() == call.toUpperCase()){
                                indices[a]=rutas[i].nombre + "  ";
                                a++;
                            }
                        }
                    }
                }
            }
        }
    }else if(cajaCalle.value==""&cajaColonia.value==""&cajaCiudad.value!=""&cajaNumero.value==""){

    }
    cajaPRuta.textContent=indices;
}