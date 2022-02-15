"use strict";
window.addEventListener("load", () => {
  document.getElementById("valor").addEventListener("click", mostrarValor),
  document.getElementById("cuentaCompleta").addEventListener("click", mostrarCuenta),
  document.getElementById("dia").addEventListener("click", mostrarDia),
  document.getElementsByTagName("button")[0].addEventListener("click", validar)
  // window.getElementById("codigoPostal").addEventListener("onkeyup", function(){
  //   document.getElementById('localidad').value = Provincia(CP.value)})
});

function mostrarValor() {
  var valor = (document.getElementById("points").value);
  alert("Has valorado con " + valor + " puntos");
}

function mostrarCuenta() {
  var pais = (document.getElementById("pais").value);
  var iban = (document.getElementById("iban").value);
  var entidad = (document.getElementById("entidad").value);
  var sucursal = (document.getElementById("sucursal").value);
  var dc = (document.getElementById("dc").value);
  var cuenta = (document.getElementById("cuenta").value);
  alert("Le informamos que su cuenta bancaria es: " +pais+iban+"-"+entidad+"-"+sucursal+"-"+dc+"-"+cuenta);
}

function mostrarDia() {
  var dia=new Date(document.getElementById("date").value);
  dia.setDate(dia.getDate());

  var diaSemana=new Array(7);
  diaSemana = ["Domingo", "Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];
  var nombre= diaSemana[dia.getDay()];
  document.getElementById("date").innerHTML=nombre;

  alert("La fecha seleccionada en el elemento de fecha es un "+ nombre);
}

// function Provincia(codigoPostal){
//   var provincias = {
//     1: "Alava", 2: "Albacete", 3: "Alicante", 4: "Almeria", 5: "Avila",
//     6: "Badajoz", 7: "Baleares", 08: "Barcelona", 09: "Burgos", 10: "Caceres",
//     11: "Cadiz", 12: "Castellon", 13: "Ciudad Real", 14: "Cordoba", 15: "Coruña",
//     16: "Cuenca", 17: "Gerona", 18: "Granada", 19: "Guadalajara", 20: "Guipuzcoa",
//     21: "Huelva", 22: "Huesca", 23: "Jaen", 24: "Leon", 25: "Lerida",
//     26: "La Rioja", 27: "Lugo", 28: "Madrid", 29: "Malaga", 30: "Murcia",
//     31: "Navarra", 32: "Orense", 33: "Asturias", 34: "Palencia", 35: "Las Palmas",
//     36: "Pontevedra", 37: "Salamanca", 38: "Santa Cruz de Tenerife", 39: "Cantabria", 40: "Segovia",
//     41: "Sevilla", 42: "Soria", 43: "Tarragona", 44: "Teruel", 45: "Toledo",
//     46: "Valencia", 47: "Valladolid", 48: "Vizcaya", 49: "Zamora", 50: "Zaragoza",
//     51: "Ceuta", 52: "Melilla"
//   };
  
//   if(codigoPostal.length == 5 && codigoPostal <= 52999 && codigoPostal >= 1000)
//     return provincias[parseInt(codigoPostal.substring(0,2))];
//   else
//     return "Provincia no encontrada";
// }

// document.getElementById('codigoPostal').onkeyup = function(){
//   document.getElementById('localidad').value = Provincia(document.getElementById('codigoPostal').value);
// }

let validar = (e) => {
  let arrayErr=[];
  arrayErr.push(comprobarInputText(document.getElementsByName("nombre")[0], "errNom"));
  arrayErr.push(comprobarInputText(document.getElementsByName("apellido")[0], "errApe"));
  arrayErr.push(comprobarInputText(document.getElementsByName("direccion")[0], "errDir"));
  arrayErr.push(comprobarInputText(document.getElementsByName("codigoPostal")[0], "errCod"));
  arrayErr.push(comprobarInputText(document.getElementsByName("localidad")[0], "errLoc"));
  arrayErr.push(comprobarProv());
  //comprobar errores. Si no hay errores, manda datos.
  //Si hay errores muestra errores
  let hayErrores=false
  arrayErr.forEach((ele)=>{
      if (ele){
         hayErrores=true
      }
  })
  if (hayErrores){
      e.preventDefault();
  }else{
     alert("Datos enviados")
      // Swal.fire('Datos Enviados')
  }
 
}

let comprobarInputText = (objeto, error) => {
  let errores=false;
  if (objeto.value == "") {
      document.getElementById(error).innerText = "Dato Requerido";
      //añadir la clase
      objeto.classList.remove("correctTexto");
      objeto.classList.add("errorTexto");
      errores=true;
  } else {
      document.getElementById(error).innerText = "";
      objeto.classList.remove("errorTexto");
      objeto.classList.add("correctTexto");
  }
  return errores
}

  function letras(e) {//letras
    var key = e.keyCode || e.which,
      tecla = String.fromCharCode(key).toLowerCase(),
      letras = " áéíóúabcdefghijklmnñopqrstuvwxyz",
      especiales = [8, 37, 39, 46],
      tecla_especial = false;

    for (var i in especiales) {
      if (key == especiales[i]) {
        tecla_especial = true;
        break;
      }
    }

    if (letras.indexOf(tecla) == -1 && !tecla_especial) {
      return false;
    }
  }

  function letrasNumeros(e) {//letras
    var key = e.keyCode || e.which,
      tecla = String.fromCharCode(key).toLowerCase(),
      letrasNumeros = " áéíóúabcdefghijklmnñopqrstuvwxyz1234567890º/",
      especiales = [8, 37, 39, 46],
      tecla_especial = false;

    for (var i in especiales) {
      if (key == especiales[i]) {
        tecla_especial = true;
        break;
      }
    }

    if (letrasNumeros.indexOf(tecla) == -1 && !tecla_especial) {
      return false;
    }
  }

  function numeros(e) {//letras
    var key = e.keyCode || e.which,
      tecla = String.fromCharCode(key).toLowerCase(),
      numeros = " 1234567890",
      especiales = [8, 37, 39, 46],
      tecla_especial = false;

    for (var i in especiales) {
      if (key == especiales[i]) {
        tecla_especial = true;
        break;
      }
    }

    if (numeros.indexOf(tecla) == -1 && !tecla_especial) {
      return false;
    }
  }


