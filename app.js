var fechahoy = moment().format('LL');
var fh= document.getElementById("ahora").innerHTML = fechahoy;

var fecha = new Date();
var anio = fecha.getFullYear();
var dia = fecha.getDate();
var _mes = fecha.getMonth(); //viene con valores de 0 al 11
_mes = _mes + 1; //ahora lo tienes de 1 al 12
if (_mes < 10) //ahora le agregas un 0 para el formato date
{
  var mes = "0" + _mes;
} else {
  var mes = _mes.toString;
}

let fecha_minimo = anio + '-' + mes + '-' + dia; // Nueva variable

document.getElementById("inicio").setAttribute('max',fecha_minimo);


function total(){
    let inicio = document.getElementById("inicio").value
    console.log(inicio);
    let total = document.getElementById("total");
    total.innerHTML = moment().diff(moment(inicio), 'days')+1 + " dia(s)";
}

