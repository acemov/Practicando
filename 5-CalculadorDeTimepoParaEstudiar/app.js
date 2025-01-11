let ahora = new Date();
// console.log(ahora);
let horaActual = ahora.getHours();
// console.log(horaActual);
let minutosActuales = ahora.getMinutes();
// console.log(minutosActuales);
// let segundosActuales = ahora.getSeconds()
// console.log(segundosActuales);


// - - - - - - - - - - - - - - - - - - - - - 
let MostrarHora = `0 - La hora es: ${horaActual}:${minutosActuales}`;
console.log(MostrarHora);

for (let i = 1; i <= 9; i++) { // 9 incrementos de 2 horas
    let dosHorasDespues = (horaActual + i * 2) % 24; // Asegura que no supere 23 horas
    
//    console.log(`${i} - La hora será: ${dosHorasDespues}:${minutosActuales}`);
}
// - - - - - - - - - - - - - - - - - - - - - 



let minutosAcumulador = 0;
// Convertir la hora actual a minutos acumulados
for (let i = 0; i < horaActual; i++) {
    minutosAcumulador += 60;
}
minutosAcumulador += minutosActuales;

// Minutos restantes hasta las 22:30 (1350 minutos)
let minutosAntesDeDormir = 1350 - minutosAcumulador;

// Número de divisiones
let divisiones = 6; // Cambia este valor según tus necesidades
let minutosPorDivision = minutosAntesDeDormir / divisiones;

console.log(`Minutos restantes: ${minutosAntesDeDormir}`);
console.log(`Minutos por división: ${minutosPorDivision.toFixed(2)}`);

// Mostrar la hora para cada división
for (let i = 1; i <= divisiones; i++) {
    let minutosTotales = minutosAcumulador + minutosPorDivision * i;
    let nuevaHora = Math.floor(minutosTotales / 60); // Calcular la nueva hora
    let nuevosMinutos = Math.round(minutosTotales % 60); // Calcular los minutos restantes

    // Formatear la hora y los minutos para mostrar como "HH:MM"
    let horaFormateada = `${String(nuevaHora).padStart(2, '0')}:${String(nuevosMinutos).padStart(2, '0')}`;
    console.log(`La hora sería: ${horaFormateada}`);
}