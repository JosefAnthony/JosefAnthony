// const tvShows = ['dstv', "Gotv"]

const person = {
    firstName: "Joe",
    lastName: "Bulius",
    age: 19,
    phoneNumber: "08156376373",
    address: "Apo, Resettlement Area",
    office: "No.34, Asokoro",
    color: "dark",
    tvShows: [
        {
            sn: 01,
            tvName: "dstv"
        },
        {
            sn: 02,
            tvName: "Gotv"
        }
    ]
}

// a) print person details
// b) print only the firstName and color
// c) print lastName and office
// d) what is the length of the tvShows

console.log(person);
console.log(person.firstName);
console.log(person.color);
console.log(person.lastName);
console.log(person.office);
// const [firstName, lastName] = person; 
// string, object, arrays methods

const showsLength = person.tvShows.length;
console.log('tv shows length is',showsLength);

// b
const firstNameColor = `${person.firstName} ${person.color}`;
