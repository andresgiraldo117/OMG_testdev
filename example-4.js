import {cleanConsole, createAll} from './data';
const companies = createAll();

export function mergeUsers(companies) {
  const mergedUsers = [];

  for (let i = 0; i < companies.length; i++) {
    const company = companies[i];

    for (let j = 0; j < company.users.length; j++) {
      const user = company.users[j];
      user.company = company.name;
      mergedUsers.push(user);
    }
  }

  mergedUsers.sort((a, b) => b.age - a.age);

  return mergedUsers;
}

const mergedUsers = mergeUsers(companies);

cleanConsole(4, companies);
console.log('---- EXAMPLE 4 --- ', mergedUsers);

// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

// Crear una función tomando como parámetro la variable "companies" y agrupando
// todos los "users" de todas las "companies" en una sola tabla. Cada "user"
// debe tener un nuevo atributo "company" que tenga como valor el nombre de la
// dicha "company". Los "users" deben ordenarse de acuerdo con sus edad
// (de mayor a menor).

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Create a function taking as parameter the "companies" variable and grouping
// all "users" of all "companies" in a single table. Each "user"
// must have a new attribute "company" having for value the name of the "company"
// to which it belongs. The "users" must be sorted according to their
// age (from oldest to youngest)
