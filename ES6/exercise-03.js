/**
 * Write a function using destructuring syntax to extract the value of title, author for each book element in a books array
 * 
 const books = [
    { title: 'Full Stack JavaScript', author: 'Colin Ihrig and Adam Bretz', url: 'http://www.sitepoint.com/store/full-stack-javascript/' },
    { title: 'JavaScript: Novice to Ninja', author: 'Darren Jones', url: 'http://www.sitepoint.com/store/leaern-javascript/' },
    { title: 'Jump Start CSS', author: 'Louis Lazaris', url: 'http://www.sitepoint.com/store/jump-start-css/' },
];
 */

 const books = [
    { title: 'Full Stack JavaScript', author: 'Colin Ihrig and Adam Bretz', url: 'http://www.sitepoint.com/store/full-stack-javascript/' },
    { title: 'JavaScript: Novice to Ninja', author: 'Darren Jones', url: 'http://www.sitepoint.com/store/leaern-javascript/' },
    { title: 'Jump Start CSS', author: 'Louis Lazaris', url: 'http://www.sitepoint.com/store/jump-start-css/' },
];

// Using console.log in map function and extracting individual properties of book object into variables using destructuring.
books.map((book) => {
    const {title, author} = book;
    console.log(title, author); 
});

let booksWithoutUrls = books.map((book) => { const {title, author} = book; return {title, author} });
console.log(booksWithoutUrls);

//using array destructuring

let booksWithoutUrlsArray = books.map((book) => {
    return [book.title, book.author];
});

console.log(booksWithoutUrlsArray);