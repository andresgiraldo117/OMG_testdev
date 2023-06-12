import {createAll, cleanConsole} from './data';
const companies = createAll();

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function fixUndefinedUsers(companies) {
  const updatedCompanies = [...companies];

  for (let i = 0; i < updatedCompanies.length; i++) {
    const company = updatedCompanies[i];
    for (let j = 0; j < company.users.length; j++) {
      const user = company.users[j];
      if (user.firstName === undefined) {
        user.firstName = '';
      }
      if (user.lastName === undefined) {
        user.lastName = '';
      }
    }
  }
  const capitalizedCompanies = fixCase(updatedCompanies);
  const sortedByUsersCompanies = sortCompaniesByUsers(capitalizedCompanies);
  return sortUsersAlphabetically(sortedByUsersCompanies);
}

function fixCase(companies) {
  const updatedCompanies = [...companies];

  for (let i = 0; i < updatedCompanies.length; i++) {
    const company = updatedCompanies[i];
    company.name = capitalizeFirstLetter(company.name);

    for (let j = 0; j < company.users.length; j++) {
      const user = company.users[j];
      user.firstName = capitalizeFirstLetter(user.firstName);
      user.lastName = capitalizeFirstLetter(user.lastName);
    }
  }
  return updatedCompanies;
}

function sortCompaniesByUsers(companies) {
  const updatedCompanies = [...companies];
  updatedCompanies.sort((a, b) => b.usersLength - a.usersLength);
  return updatedCompanies;
}

function sortUsersAlphabetically(companies) {
  const updatedCompanies = [...companies];

  for (let i = 0; i < updatedCompanies.length; i++) {
    const company = updatedCompanies[i];
    company.users.sort((a, b) => a.firstName.localeCompare(b.firstName));
  }

  return updatedCompanies;
}

const sortedUsersCompanies = fixUndefinedUsers(companies);

cleanConsole(1, companies);
console.log('---- EXAMPLE 1 --- ', sortedUsersCompanies);

// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

/* 1. Crear una función tomando la variable "companies" como parámetro y reemplazando
2. todos los valores "undefined" en "usuarios" por un string vacío.
3. El nombre de cada "company" debe tener una letra mayúscula al principio, así como
4. el apellido y el nombre de cada "user".
5. Las "companies" deben ordenarse por su total de "user" (orden decreciente)
6. y los "users" de cada "company" deben aparecer en orden alfabético. */

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Create a function taking the variable "companies" as a parameter and replacing
// all values "undefined" in "users" by an empty string.
// The name of each "company" must have a capital letter at the beginning as well as
// the last name and first name of each "user".
// The "companies" must be sorted by their number of "user" (decreasing order)
// and the "users" of each "company" must be listed in alphabetical order
