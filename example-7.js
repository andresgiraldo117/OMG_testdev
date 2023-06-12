/* eslint-disable no-unused-vars */
import {cleanConsole, createAll} from './data';

const companies = createAll();

cleanConsole(7, companies);

// Parte 1
function getCompanyNameById(id) {
  const company = companies.find((c) => c.id === id);
  return company ? company.name : null;
}

// Parte 2
function removeCompanyById(id) {
  const index = companies.findIndex((c) => c.id === id);
  if (index !== -1) {
    companies.splice(index, 1);
  }
}

// Parte 3
function updateCompanyAttributesById(id, updatedAttributes) {
  const company = companies.find((c) => c.id === id);
  if (company) {
    // eslint-disable-next-line prefer-const
    for (let key in updatedAttributes) {
      if (key !== 'users') {
        company[key] = updatedAttributes[key];
      }
    }
  }
}

// Parte 4
function addUserToCompanyById(id, newUser) {
  const company = companies.find((c) => c.id === id);
  if (company) {
    newUser.id = company.users.length;
    company.users.push(newUser);
    company.usersLength = company.users.length;
  }
}

// Parte 5
function updateCompanyById(id, updatedCompany) {
  const company = companies.find((c) => c.id === id);
  if (company) {
    // eslint-disable-next-line prefer-const
    for (let key in updatedCompany) {
      if (key !== 'users') {
        company[key] = updatedCompany[key];
      }
    }
  }
}

// Parte 6
function removeUserFromCompanyById(companyId, userId) {
  const company = companies.find((c) => c.id === companyId);
  if (company) {
    const index = company.users.findIndex((u) => u.id === userId);
    if (index !== -1) {
      company.users.splice(index, 1);
      company.usersLength = company.users.length;
    }
  }
}

// Parte 7
function updateUserAttributesById(companyId, userId, updatedAttributes) {
  const company = companies.find((c) => c.id === companyId);
  if (company) {
    const user = company.users.find((u) => u.id === userId);
    if (user) {
      // eslint-disable-next-line guard-for-in, prefer-const
      for (let key in updatedAttributes) {
        user[key] = updatedAttributes[key];
      }
    }
  }
}

// Parte 8
function updateUserById(companyId, userId, updatedUser) {
  const company = companies.find((c) => c.id === companyId);
  if (company) {
    const user = company.users.find((u) => u.id === userId);
    if (user) {
      // eslint-disable-next-line guard-for-in, prefer-const
      for (let key in updatedUser) {
        user[key] = updatedUser[key];
      }
    }
  }
}

// Parte 9
function transferUserToCompany(fromCompanyId, toCompanyId, userId) {
  const fromCompany = companies.find((c) => c.id === fromCompanyId);
  const toCompany = companies.find((c) => c.id === toCompanyId);
  if (fromCompany && toCompany) {
    const userIndex = fromCompany.users.findIndex((u) => u.id === userId);
    if (userIndex !== -1) {
      const user = fromCompany.users[userIndex];
      fromCompany.users.splice(userIndex, 1);
      fromCompany.usersLength = fromCompany.users.length;
      user.id = toCompany.users.length;
      toCompany.users.push(user);
      toCompany.usersLength = toCompany.users.length;
    }
  }
}


console.log('---- EXAMPLE 7 part 1 --- ', companies);
console.log('---- EXAMPLE 7 part 2 --- ', companies);
console.log('---- EXAMPLE 7 part 3 --- ', companies);
console.log('---- EXAMPLE 7 part 4 --- ', companies);
console.log('---- EXAMPLE 7 part 5 --- ', companies);
console.log('---- EXAMPLE 7 part 6 --- ', companies);
console.log('---- EXAMPLE 7 part 7 --- ', companies);
console.log('---- EXAMPLE 7 part 8 --- ', companies);
console.log('---- EXAMPLE 7 part 9 --- ', companies);

// -----------------------------------------------------------------------------
// INSTRUCCIONES EN ESPAÑOL

/* Parte 1: Crear una función tomando como parámetro un "id" de "company" y
devolviendo el nombre de esta "company".

Parte 2: Crear una función tomando como parámetro un "id" de "company" y
quitando la "company" de la lista.

Parte 3: Crear una función tomando como parámetro un "id" de "company" y
permitiendo hacer un PATCH (como con una llamada HTTP) en todos los
atributos de esta "company" excepto en el atributo "users".

Parte 4: Crear una función tomando como parámetro un "id" de "company" y un
nuevo "user" cuyo el apelido es "Delgado", el nombre "Juan", de 35 años y
dueño de un carro. El nuevo "user" debe agregarse a la lista de "users" de este
"company" y tener un "id" generado automáticamente. La función también debe modificar
el atributo "usersLength" de "company".

Parte 5: Crear una función tomando como parámetro un "id" de "company" y
permitiendo hacer un PUT (como con una llamada HTTP) en esta "company" excepto
en el atributo "users".

Parte 6: Crear una función tomando como parámetro un "id" de "company" y un
"id" de "user". La función debe quitar este "user" de la lista de "users"
de "company" y cambiar el atributo "usersLength" de "company".

Parte 7: Crear una función tomando como parámetro un "id" de "company" y un
"id" de "user" que permite hacer un PATCH (como con una llamada HTTP) en este
"user".

Parte 8: Crear una función tomando como parámetro un "id" de "company" y un
"id" de "user" que permite hacer un PUT (como con una llamada HTTP) en este
"user".

Parte 9: Crear una función tomando como parámetro dos "id" de "company" y
un "id" de "user". La función debe permitir que el user sea transferido de la
primera "company" a la segunda "company". El atributo "usersLength" de cada
"company" debe actualizarse. */
// -----------------------------------------------------------------------------
// INSTRUCTIONS IN ENGLISH

// Part 1: Create a function taking as parameter an "id" of "company" and
// returning the name of this "company".

// Part 2: Create a function taking as parameter an "id" of "company" and
// removing the "company" from the list.

// Part 3: Create a function taking as a parameter an "id" of "company" and
// allowing to make a PATCH (as with an HTTP call) on all
// attributes of this "company" except on the "users" attribute.

// Part 4: Create a function taking as parameter an "id" of "company" and a
// new "user" whose name is "Delgado", the first name "Juan", aged 35 and
// a car. The new "user" must be added to the "users" list of this
// "company" and have an automatically generated "id". The function must also modify
// the "usersLength" attribute of "company".

// Part 5: Create a function taking as parameter an "id" of "company" and
// allowing to make a PUT (as with an HTTP call) on this "company" except
// on the "users" attribute.

// Part 6: Create a function taking as a parameter an "id" of "company" and a
// "id" of "user". The function must remove this "user" from the list of "users"
// from "company" and change the attribute "usersLength" from "company".

// Part 7: Create a function taking as a parameter an "id" of "company" and a
// "id" of "user" allowing to make a PATCH (as with an HTTP call) on this
// "user".

// Part 8: Create a function taking as a parameter an "id" of "company" and a
// "id" of "user" allowing to make a PUT (as with an HTTP call) on this
// "user".

// Part 9: Create a function taking as parameter two "id" of "company" and
// an "id" of "user". The function must allow the user to be transferred as a parameter
// from the 1st "company" to the 2nd "company". The "usersLength" attribute of each
// "company" must be updated
