const ACCESS_TOKEN =
    "ya29.a0Aa4xrXPvrY1oMKlVO0JOrxEt022XgNW65Ehra38AyPoi782ctna-p7hkGFKqsGzZ5a2T-Ji9j1O4QUAKhAck65a4pZu6s8QulCcgQV0VcQkdVQOeRFBv86It8yktJvn7PC_bCymDko1cvbEgSOp7H_g9nGq74AaCgYKATASARASFQEjDvL976q-NupiVLevCIQ67CX12g0165";

const SHEET_ID = '1yqsG8wOfGvcfrAMRPVS-p51A8SF9Q3aeGQZcRycHtK8';

//Inicializamos la fecha a la fecha de hoy
document.getElementById('fecha').valueAsDate = new Date();


function onRegistrarGasto() {

    //Obtenemos los datos del formulario
    const medioPago = document.getElementById('medio-pago').value;
    const concepto = document.getElementById('concepto').value;
    const fecha = document.getElementById('fecha').value;
    const monto = document.getElementById('monto').value;

    //Creamos el JSON que espera nuestra API
    let data = {};

    let values = [];

    let fila = [medioPago, concepto, fecha, monto];

    values.push(fila);

    //Verificar que coincida con el nombre de la hoja de nuestro sheet
    data.range = "hojaGastos";

    data.majorDimension = "ROWS";
    data.values = values;

    //Invocamos al método POST de la API
    fetch(
        `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/hojaGastos:append?valueInputOption=USER_ENTERED`,
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${ACCESS_TOKEN}`,
            },
            body: JSON.stringify(data)
        }
    ).then(function (response) {
        response.json().then(function (data) {

        });
    });

    //Limpiamos los campos del formulario para permitir cargar un nuevo gasto
    document.getElementById('concepto').value = "";
    document.getElementById('fecha').valueAsDate = new Date();
    document.getElementById('monto').value = "";
};
