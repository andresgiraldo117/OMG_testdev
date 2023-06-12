// eslint-disable-next-line no-unused-vars
import {cleanConsole, createAll} from './data';
import {mergeUsers} from './example-4';

const companies = createAll();

function generateUserAttributes(companies) {
  const mergedUsers = mergeUsers(companies);

  const userAttributes = {};

  for (let i = 0; i < mergedUsers.length; i++) {
    const user = mergedUsers[i];
    const attributeKey = user.lastName + user.firstName + user.age;
    userAttributes[attributeKey] = user.car;
  }

  return userAttributes;
}

const userAttributes = generateUserAttributes(companies);

cleanConsole(6, companies);
console.log('---- EXAMPLE 6 --- ', userAttributes);


// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

/* Cree una función tomando la variable "companies" como parámetro y devolviendo
un nuevo objeto cuyos atributos son la concatenación del apelido, nombre y
edad de cada "user". Cada atributo debe tener el valor de boolean "car".
Ver ejemplo a continuación.
 */
// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Create a function taking the "companies" variable as a parameter and returning
// a new object whose attributes are the concatenation of the name, first name and
// the age of each user. Each attribute must have the value of boolean "car".
// See example below

const example = {
  johnDoe32: true,
  BernardoMinet45: false,
  alinaChef23: true,
};

console.log(example);
