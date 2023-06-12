import {cleanConsole, createAll} from './data';
import {mergeUsers} from './example-4';
const companies = createAll();

cleanConsole(5, companies);

function calculateStatistics(companies) {
  const mergedUsers = mergeUsers(companies);

  const size = mergedUsers.length;
  const totalAge = mergedUsers.reduce((sum, user) => sum + user.age, 0);
  const average = totalAge / size;

  const hasCar = mergedUsers.filter((user) => user.car).length;
  const totalAgeWithCar = mergedUsers.filter((user) => user.car).reduce((sum, user) => sum + user.age, 0);
  const averageWithCar = totalAgeWithCar / hasCar;

  return {
    size,
    average,
    hasCar,
    averageWithCar,
  };
}

const statistics = calculateStatistics(companies);

cleanConsole(5, companies);
console.log('---- EXAMPLE 5 --- ', statistics);


// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

/* Use la función creada en el ejemplo 4 para crear una nueva función tomando
como parámetro la variable "companies" y devuelve un nuevo objeto con los
siguientes atributos:
    'size' => total de "users"
    'average' => edad promedio de "users"
    'hasCar' => total de "users" propietarios de un carro
    'averageWithCar' => edad promedio de los "users" con un carro */

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Use the function created in example 4 to create a
// new function taking as parameter the "companies" variable and returning
// a new object with the following attributes:
//     'size' => number of "users"
//     'average' => average age of "users"
//     'hasCar' => number of "users" owning a car
//     'averageWithCar' => average age of users with a car.
