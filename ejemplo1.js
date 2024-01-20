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

// Definimos una función llamada getData que simplemente devuelve el array de datos de manera síncrona
function getData(){
    // Devolvemos el array de datos
    return data;
}

// Llamamos a la función getData y mostramos los datos en la consola
console.log('Datos obtenidos de manera síncrona:', getData());

// Nota: Estos datos son obtenidos de manera síncrona, lo que significa que la ejecución del programa espera a que getData() devuelva los datos antes de continuar.

// Aquí no hay operaciones asíncronas ni retrasos, por lo que la impresión de los datos ocurre inmediatamente después de la llamada a getData().
