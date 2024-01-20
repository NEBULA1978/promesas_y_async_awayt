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

// Definimos una función llamada getData que utiliza setTimeout para simular una operación asíncrona
function getData(){
    setTimeout(() => {
        // Dentro de setTimeout, imprimimos los datos en la consola
        console.log('Datos obtenidos:', data);
    }, 2000);
}

// Llamamos a la función getData
console.log(getData()); // Agregamos esta línea para imprimir los datos en la consola

// Nota: Aquí hay un detalle importante. La función setTimeout en getData no bloquea la ejecución del programa.
// Esto significa que la llamada a getData() regresa inmediatamente y no espera los 2000 milisegundos.

// La línea anterior imprimirá 'undefined' en la consola, ya que getData() no devuelve explícitamente ningún valor.
// La impresión de 'Datos obtenidos' ocurrirá después de 2000 milisegundos, pero la llamada console.log(getData()) no espera a que eso suceda.

// Si queremos manejar la asincronía, necesitaríamos modificar getData para devolver una promesa, y usar then para manejar los datos una vez que estén disponibles.
