//INSTRUCTION: Log every item in object

/**
 * OUTPUT SHOULD BE:
 Carol
 Woods
 red
 blue
 green
 223 Constitution Rd
 Bochum
 33944-3394
 */

const user = {
  firstName: 'Carol',
  lastName: 'Woods',
  favColors: ['red', 'blue', 'green'],
  address: {
    street: '223 Constitution Rd',
    city: 'Bochum',
    zip: '33944-3394'
  }
};

function listPerson(person) {}

listPerson(user);
