// Исходные данные
const addressLat = 100;
const addressLong = 200;
const positionLat = 10;
const positionLong = 20;

//Расчет расстояния

let distanceLat = addressLat - positionLat;
let distanceLong = addressLong - positionLong;
let _distance = (distanceLat ** 2 + distanceLong ** 2) ** 0.5;

console.log(`Расстояние до точки назначения равно: ${_distance.toFixed(2)}`);