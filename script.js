/*
    Función que recibe la hora en formato AM/PM y devuelve una representacion 
    a 24 horas
*/
function converTime ( str_date ) {
    const [ time, ampm] = [str_date.slice(0, -2), str_date.slice(-2)];
    const units = time.split(':');
    const [, minutes, seconds] = units;
    let [ hours ] = units;

    if ( hours === '12') hours = '00';
    if ( ampm === 'PM') hours = Number(hours) + 12

    return [ hours, minutes, seconds ].join(':');

}

let response = converTime("03:40:45 PM"); // 15:40:45
console.log("🚀 ~ file: script.js:19 ~ response:", response)
