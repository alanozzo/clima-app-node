const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// lugar.getLugarLatLng(argv.direccion)
//     .then(response => {
//         console.log(response);
//     });

// clima.getClima(40.750000, -74.000000)
//     .then(response => {
//         console.log(response);
//     })
//     .catch(error => {
//         console.log(error);
//     });

const getInfo = async(direccion) => {
    try {
        const place = await lugar.getLugarLatLng(direccion);
        const wheater = await clima.getClima(place.lat, place.lng);
        return `El clima de ${ place.direccion } es de ${ wheater }`;
    } catch (error) {
        return `No se pudo determinar el clima de ${ error }`;
    }
}

getInfo(argv.direccion)
    .then(response => console.log(response))
    .catch(error => console.log(error));