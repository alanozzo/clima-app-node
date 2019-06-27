const axios = require('axios');

const getLugarLatLng = async(dir) => {
    const encodedUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodedUrl }`,
        headers: { 'X-RapidAPI-Key': '57b2808cd6msh4087cca59af5b7fp1a659fjsnf78217cf90e2' }
    });

    const response = await instance.get();

    if (response.data.Results.length === 0) {
        throw new Error(`No hay resultados para: ${ dir }`);
    }

    const data = response.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}