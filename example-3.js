import {cleanConsole, createAll} from './data';
import {fixUndefinedUsers} from './example-1';

function validateUpperCase(companies) {
  for (let i = 0; i < companies.length; i++) {
    const company = companies[i];

    if (!isUpperCase(company.name)) {
      return false;
    }

    for (let j = 0; j < company.users.length; j++) {
      const user = company.users[j];
      if (!isUpperCase(user.firstName) || !isUpperCase(user.lastName)) {
        return false;
      }
    }
  }

  return true;
}

function isUpperCase(str) {
  return str === str.toUpperCase();
}

const companies = createAll();
const companiesTransform = fixUndefinedUsers(companies);
const isAllUpperCase = validateUpperCase(companiesTransform);

cleanConsole(3, companies);
console.log('---- EXAMPLE 3 --- ', isAllUpperCase);

// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

/* Cree una función tomando la variable 'companies' como parámetro y devolviendo
 un booleano que valida que todos los nombres de las empresas y los atributos
 'firstName' y 'lastName' de 'users' están en mayúsculas.
 Debes probar la operación de esta función importando la función creada
 en el 'example-1.js'. */

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Create a function taking the "companies" variable as a parameter and returning
// a boolean validating that all the names of the companies and the attributes "firstName"
// and "lastName" of "users" are capitalized. You must test the operation
// of this function by importing the function created for "example-1.js"
