//funciones pregunta 2
function nombreynick(name,lastname,nickname){
    console.log(`mi nombre completo es ${name} ${lastname} pero prefiero que me digan ${nickname}`);
}
nombreynick("jorge","munera","brick")


//condicionales pregunta 2

function validacion(){
    const tsuscripcion=prompt("escriba plan");
    if(tsuscripcion=="Free"){
        console.log("Solo puedes tomar los cursos gratis");
    } else if(tsuscripcion=="Basic"){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    } else if(tsuscripcion=="Expert"){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
    } else if(tsuscripcion=="ExpertPlus"){
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
    } else {
        console.log("escriba una opcion valida");
        validacion()
    }
}

//ciclos pregunta 2

let i=0;
while (i>=0 && i<5) {
    console.log("El valor de i es: " + i);
    i++
}

let a=10;
while (a>=2 && a<=10) {
    console.log("El valor de i es: " + a);
    a--
}

//ciclos pregunta 3

function sumar(){
    let valorusuario=prompt("ingrese el valor de 2+2");
    if(valorusuario==4){
        console.log("felicitaciones es un matematico");
    } else {
        console.log("vaya estudie vago");
        sumar()
    }
}

//arrays pregunta 2

let familia=["jorge","camilo","mama","papa"];

function leerarray(array){
    console.log(array[0])
}
leerarray(familia)

function imprimirelementos(array){
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);     
    }
}
imprimirelementos(familia)

let objjorge= {
    nombre:"jorge",
    edad:29
}
let objjorgedetallado= {
    nombre:"jorge",
    edad:29,
    cedula: 1144057797,
    segundonombre:"alexander",
    primerapellido:"munera",
    segundoapellido:"canabal",
    profesion:"ing de materiales"
    
}

function printelementos(obj){
    let claves= Object.keys(obj)
    let valores = Object.values(obj)
    for (let b = 0; b < claves.length; b++) {
        console.log(`usted tiene esta propiedad ${claves[b]} y este valor respectivamente ${valores[b]}`)  
    }
}

printelementos(objjorge)