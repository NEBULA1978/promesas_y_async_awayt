// Definimos un array de objetos que representa información sobre libros
const data = [
  {
    title: 'Aprendiendo JavaScript',
    year: '2021',
    isbn: '979-8700179263',
    author: 'Carlos Azaustre'
  },
  {
    title: 'React.is Practico',
    year: '2022',
    isbn: 'TBD',
    author: 'Carlos Azaustre'
  },
  {
    title: 'Clean JavaScript',
    year: '2020',
    isbn: '979-8567583319',
    author: 'Miguel A.Gomez'
  }
];

// Definimos una función llamada getData que devuelve una promesa
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

// Definimos una función asincrónica llamada fetchingData para manejar la asincronía de la operación getData
async function fetchingData() {
  // Utilizamos la palabra clave 'await' para esperar a que la promesa se resuelva antes de continuar
  const books = await getData();

  // Imprimimos los datos obtenidos de manera asíncrona
  console.log('Datos obtenidos de manera asíncrona:', books);
}

// Llamamos a la función fetchingData para iniciar la operación asíncrona
fetchingData();

// Comentarios:

    // fetchingData es una función asíncrona que utiliza la palabra clave await para esperar a que la promesa devuelta por getData se resuelva antes de continuar con la ejecución.
    // El uso de async en la declaración de la función fetchingData permite utilizar await dentro de la función, facilitando el manejo de operaciones asíncronas de manera más clara y concisa.
    // Se imprime el resultado después de obtener los datos de manera asíncrona utilizando console.log.
    // La llamada a fetchingData() inicia la operación asíncrona y muestra cómo podemos manejar la asincronía de manera más eficiente con funciones asíncronas y await.