class Persona{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}
const cola = [];
var nombre = document.getElementsByName("nombre")[0].value;
var edad = document.getElementsByName("edad")[0].value;
var mostrar = document.getElementById("mostrar");
var string1 = "";

function cargar (){
    var filtro;
    var aux;
    var i;
    var a = 0;
    var nombre = document.getElementsByName("nombre")[0].value;
    var edad = document.getElementsByName("edad")[0].value;

    if(edad>=18){
        alert(nombre+", usted es mayor de edad");
    }
    console.log("nombre: "+nombre);
    console.log("edad: "+edad);
    const persona1 = new Persona(nombre,edad);
    var persona2 = new Persona();
    cola.push(persona1);
    aux = cola[0];
    i = aux.age;
    console.log("Tamaño del array actual: "+cola.length);
    console.log("\n");

    for(const Persona of cola){
        a = Persona.age;
        if(parseInt(i)<parseInt(a)){
            i=a;
        }
    }
    console.log("i:"+i);
    console.log("a:"+a);
    filtro = cola.filter(n => n.age == i);
    persona2 = filtro[0];

    mostrar.innerHTML = "La persona de mayor edad ingresada es: "+persona2.name;
    document.getElementById("testo").value="";
    document.getElementById("entrar").value="";
}