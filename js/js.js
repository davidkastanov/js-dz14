const users = [

    {

        id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',

        name: 'Moore Hensley',

        email: 'moorehensley@indexia.com',

        eyeColor: 'blue',

        friends: ['Sharron Pace'],

        isActive: false,

        balance: 2811,

        skills: ['ipsum', 'lorem'],

        gender: 'male',

        age: 37,

    },

    {

        id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',

        name: 'Sharlene Bush',

        email: 'sharlenebush@tubesys.com',

        eyeColor: 'blue',

        friends: ['Briana Decker', 'Sharron Pace'],

        isActive: true,

        balance: 3821,

        skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],

        gender: 'female',

        age: 34,

    },

    {

        id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',

        name: 'Ross Vazquez',

        email: 'rossvazquez@xinware.com',

        eyeColor: 'green',

        friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],

        isActive: false,

        balance: 3793,

        skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],

        gender: 'male',

        age: 24,

    },

    {

        id: '249b6175-5c30-44c6-b154-f120923736f5',

        name: 'Elma Head',

        email: 'elmahead@omatom.com',

        eyeColor: 'green',

        friends: ['Goldie Gentry', 'Aisha Tran'],

        isActive: true,

        balance: 2278,

        skills: ['adipisicing', 'irure', 'velit'],

        gender: 'female',

        age: 21,

    },

    {

        id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',

        name: 'Carey Barr',

        email: 'careybarr@nurali.com',

        eyeColor: 'blue',

        friends: ['Jordan Sampson', 'Eddie Strong'],

        isActive: true,

        balance: 3951,

        skills: ['ex', 'culpa', 'nostrud'],

        gender: 'male',

        age: 27,

    },

    {

        id: '150b00fb-dd82-427d-9faf-2879ea87c695',

        name: 'Blackburn Dotson',

        email: 'blackburndotson@furnigeer.com',

        eyeColor: 'brown',

        friends: ['Jacklyn Lucas', 'Linda Chapman'],

        isActive: false,

        balance: 1498,

        skills: ['non', 'amet', 'ipsum'],

        gender: 'male',

        age: 38,

    },

    {

        id: 'e1bf46ab-7168-491e-925e-f01e21394812',

        name: 'Sheree Anthony',

        email: 'shereeanthony@kog.com',

        eyeColor: 'brown',

        friends: ['Goldie Gentry', 'Briana Decker'],

        isActive: true,

        balance: 2764,

        skills: ['lorem', 'veniam', 'culpa'],

        gender: 'female',

        age: 39,

    },

];





// Завдання 1 Отримати масив імен всіх користувачів (поле name).


const gotUserName = users => users.map(user =>  user.name)
console.log(gotUserName (users ))
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]



// Завдання 2 Отримати масив об'єктів користувачів за кольором очей (поле eyeColor).


const gotUsersWithEyeCol = (users,color) => users.filter(user =>  user.eyeColor ===  color)
console.log(gotUsersWithEyeCol(users, 'blue')) 
// [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Carey Barr]


// Завдання 3 Отримати масив імен користувачів за статтю (поле gender)


const gotUsersWithGender = (users, gender) => users.filter(user => user.gender === gender)
console.log(gotUsersWithGender(users, 'male'))
// [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]




// Завдання 4 Отримати масив тільки неактивних користувачів (поле isActive).


const gotInactiveUser =  users => users.filter(item => !item.isActive )
console.log(gotInactiveUser(users) ) 
// [об'єкт Moore Hensley, об'єкт Ross Vazquez, об'єкт Blackburn Dotson]




// Завдання 5 Отримати користувача (не масив) по email (поле email, він унікальний).


const gotUserWithEmail = (user, email) =>  user.find((item) => item.email === email)
console.log(gotUserWithEmail(users, 'shereeanthony@kog.com'));     // {об'єкт користувача Sheree Anthony}
console.log(gotUserWithEmail(users, 'elmahead@omatom.com'));       // {об'єкт користувача Elma Head}






