// Исходные данные
const adressLat = 100;
const adressLong = 200;
const positionLat = 10;
const positionLong = 20;

//Расчет расстояния

let distanceLat = adressLat - positionLat;
let distanceLong = adressLong - positionLong;
let _distance = (distanceLat ** 2 + distanceLong ** 2) ** 0.5;

console.log(`Расстояние до точки назначения равно: ${_distance.toFixed(2)}`);