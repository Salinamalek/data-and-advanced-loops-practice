// PERSON ARGUMENT DATA:
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

/**
 *
 * listPerson()
 * -------------
 * Independently log every item in an object. Make sure your solution
 * is dynamic and does not just serve the given object.
 * 
 * OUTPUT SHOULD BE:
   Carol
   Woods
   red
   blue
   green
   223 Constitution Rd
   Bochum
   33944-3394
 
 * @param {Object} person
 */

function listPerson(person) {
  for(p in person){
    if(typeof person[p] === `object`){
      for(let v in person[p]){
        console.log(person[p][v])
      }
    }
    else{
      console.log(person[p])
    }
  }
}

listPerson(user);
