// Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
let personAccount = {
    firstName: "John",
    lastName: "Doe",
    incomes: [
        { description: "salary", amount: 3000 },
        { description: "freelance", amount: 1000 }
    ],
    expenses: [
        { description: "rent", amount: 1000 },
        { description: "transport", amount: 500 }
    ],
    totalIncome: function () {
        let total = 0;
        for (let income of this.incomes) {
            total += income.amount;
        }
        return total;
    }
    ,
    totalExpense: function () {
        let total = 0;
        for (let expense of this.expenses) {
            total += expense.amount;
        }
        return total;
    }
    ,
    accountInfo: function () {
        return `Total Income: ${this.totalIncome()} \nTotal Expense: ${this.totalExpense()}`;
    }
    ,
    addIncome: function (description, amount) {
        this.incomes.push({ description, amount });
    }
    ,
    addExpense: function (description, amount) {
        this.expenses.push({ description, amount });
    }
    ,
    accountBalance: function () {
        return this.totalIncome() - this.totalExpense();
    }
};

console.log(personAccount.accountBalance());
personAccount.addIncome("freelance", 2000);
console.log(personAccount.accountBalance());
personAccount.addExpense("food", 500);
console.log(personAccount.accountBalance());
console.log(personAccount.accountInfo());

const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

    const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
];

// Imagine you are getting the above users collection from a MongoDB database.
// a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
function signUp(username) {
    let user = users.find(user => user.username === username);
    if (user) {
        return "User already exists";
    }
    else {
        let newUser = {
            _id: Math.random().toString(36).substr(2, 9),
            username,
            email: prompt("Enter your email"),
            password: prompt("Enter your password"),
            createdAt: new Date().toLocaleString(),
            isLoggedIn: false
        };
        users.push(newUser);
        return "User created successfully";
    }
} 
console.log(signUp("Alex"));
console.log(signUp("Alex"));
console.log(users);

// b. Create a function called signIn which allows user to sign in to the application
function signIn(username, password) {
    let user = users.find(user => user.username === username);
    if (user) {
        if (user.password === password) {
            user.isLoggedIn = true;
            return "User logged in successfully";
        }
        else {
            return "Incorrect password";
        }
    }
    else {
        return "User doesn't exist";
    }
}
signIn("Alex", "123123");

// The products array has three elements and each of them has six properties.
// a. Create a function called rateProduct which rates the product
function rateProduct(productName, userId, rate) {
    let product = products.find(product => product.name === productName);
    if (product) {
        product.ratings.push({ userId, rate });
    }
    else {
        return "Product not found";
    }
}

rateProduct("mobile phone", "eefamr", 5);
rateProduct("TV", "eefamr", 4);

// b. Create a function called averageRating which calculate the average rating of a product
function averageRating(productName) {
    let product = products.find(product => product.name === productName);
    if (product) {
        let total = 0;
        for (let rating of product.ratings) {
            total += rating.rate;
        }
        return total / product.ratings.length;
    }
    else {
        return "Product not found";
    }
}

console.log(averageRating("mobile phone"));
console.log(averageRating("TV"));

// c. Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.
function likeProduct(productName, userId) {
    let product = products.find(product => product.name === productName);
    if (product) {
        let user = product.likes.find(like => like === userId);
        if (user) {
            product.likes.splice(product.likes.indexOf(user), 1);
        }
        else {
            product.likes.push(userId);
        }
    }
    else {
        return "Product not found";
    }
}

likeProduct("mobile phone", "eefamr");
likeProduct("TV", "eefamr");
likeProduct("TV", "eefamr");
console.log(products);