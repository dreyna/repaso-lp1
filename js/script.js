var nom = document.getElementById("nombre");
var telef = document.getElementById("telefono");
var email = document.getElementById("correo");
var i = 0;
var filita = "";
var estado = 0;
function registrar(){  
    if(estado==0){
        alert("save");
    var table = document.getElementById("table");
    var tbody = document.getElementById("tbd");
    var fila = document.createElement("tr");
    //celda del nombre
    var celda_nombre = document.createElement("td");
    celda_nombre.innerHTML=nom.value;
    //celda del telefono
    var celda_telefono = document.createElement("td");
    celda_telefono.innerHTML=telef.value;
    //celda del correo
    var celda_correo = document.createElement("td");
    celda_correo.innerHTML=email.value;
    //celda accion
    var celda_accion = document.createElement("td");
    celda_accion.classList.add("accion");
    celda_accion.innerHTML=
    "<a href='#' class='icono2' onclick='editar(this)'><i class='fa fa-pencil-square-o' aria-hidden='true'></i></a>"
    +"<a href='#' class='icono1' onclick='eliminar(this)'><i class='fa fa-trash' aria-hidden='true'></i></a>";

    fila.appendChild(celda_nombre);
    fila.appendChild(celda_telefono);
    fila.appendChild(celda_correo);
    fila.appendChild(celda_accion);
    //Agregar fila al tbody
    tbody.appendChild(fila);
    //agregar tbody a la tabla
    table.appendChild(tbody);
    limpiar();
    i+=1;
    }else{
        alert("editar");
        filita.cells[0].innerHTML = nom.value;
        filita.cells[1].innerHTML = telef.value;
        filita.cells[2].innerHTML = email.value;
        filita = "";
        limpiar();
        estado = 0;
    }
}
function limpiar(){
    nom.value="";
    telef.value="";
    email.value="";
    nom.focus();
}
function editar(row){
    filita = row.parentNode.parentNode;  
    nom.value = filita.cells[0].innerHTML;
    telef.value = filita.cells[1].innerHTML;
    email.value = filita.cells[2].innerHTML;
    estado = 1;
}
function eliminar(row){
    var fil = row.parentNode.parentNode;
    fil.parentNode.removeChild(fil);
}