import {cleanConsole, createAll} from './data';

function filterUsersByCar(companies, hasCar) {
  const updatedCompanies = [...companies];

  for (let i = 0; i < updatedCompanies.length; i++) {
    const company = updatedCompanies[i];
    const filteredUsers = company.users.filter((user) => user.car === hasCar);
    company.users = filteredUsers;
    company.usersLength = filteredUsers.length;
  }

  return updatedCompanies;
}

const companies = createAll();
const hasCar = true;
const filteredCompanies = filterUsersByCar(companies, hasCar);

cleanConsole(2, companies);
console.log('---- EXAMPLE 2 --- ', filteredCompanies);

// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

/* 1. Crear una función tomando como parámetro la variable "companies" y el
2. booleano "hasCar". Para cada "company" debe conservar solo
3. "users" cuyo valor de atributo "car" es igual al parámetro del
4. función "hasCar" y el atributo "usersLength" deben indicar el total de
5. "users" correspondientes al parámetro "hasCar". */

// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Create a function taking as parameter the variable "companies" and the
// boolean "hasCar". For each "company" you must keep only the
// "users" whose attribute value "car" is equal to the parameter of the
// "hasCar" function and the "usersLength" attribute must indicate the number of
// "users" corresponding to the "hasCar" parameter
