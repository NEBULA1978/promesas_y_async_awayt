// Definimos un array de objetos que representa información sobre libros
// const data = [
//   {
//     title: 'Aprendiendo JavaScript',
//     year: '2021',
//     isbn: '979-8700179263',
//     author: 'Carlos Azaustre'
//   },
//   {
//     title: 'React.is Practico',
//     year: '2022',
//     isbn: 'TBD',
//     author: 'Carlos Azaustre'
//   },
//   {
//     title: 'Clean JavaScript',
//     year: '2020',
//     isbn: '979-8567583319',
//     author: 'Miguel A.Gomez'
//   }
// ];

// Definimos una función llamada getData que devuelve una promesa

const data = [];

function getData() {
    return new Promise((resolve, reject) => {
        // Verificamos si el array de datos está vacío
        if (data.length === 0) {
            // Si está vacío, rechazamos la promesa con un error
            reject(new Error('Data is empty'));
        }

        // Esperamos 2000 milisegundos (2 segundos) antes de resolver la promesa
        setTimeout(() => {
            // Resolvemos la promesa con los datos
            resolve(data);
        }, 2000);
    });
}

// Llamamos a la función getData
getData()
    .then((response) => {
        // En caso de éxito, imprimimos los datos
        console.log('Datos obtenidos:', response);
    })
    .catch((err) => {
        // En caso de error, imprimimos el mensaje de error
        console.log('Error:', err.message);
    });

//Efecto promise