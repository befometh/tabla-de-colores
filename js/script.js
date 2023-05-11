var fila;
var columna;
var tabla;
var color;
var contador;

function crearTabla(){
    tabla="";
    contador=1;
    fila = parseInt(document.getElementById("makeRow").value);
    columna = parseInt(document.getElementById("makeCol").value);
    for (let i=0; i<fila; i++){
        tabla=tabla+"<tr class='border'>";
        color="#"
        for(let j=0; j<columna; j++){
            color=color+colorRand()
            tabla=tabla+"<td class='border p-1 text-center' style='background-color:"+color+";'>"+contador+"<br>"+color+"</td>";
            color="#"
            contador++;
        }
        tabla=tabla+"</tr>";
    }
    document.getElementById("newTable").innerHTML = tabla;
}

function colorRand(){
    let numero="";
    for(let i=0;i<6;i++){
        let valor = Math.floor(Math.random()*15);
        switch(valor){
            case 10:
                valor="a";
            break;
            case 11:
                valor="b";
            break;
            case 12:
                valor="c";
            break;
            case 13:
                valor="d";
            break;
            case 14:
                valor="e";
            break;
            case 15:
                valor="f";
            break;
        }
        numero=numero+valor;
    }
    return numero;
}
