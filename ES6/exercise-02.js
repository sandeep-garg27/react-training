/**
 * 1. Write a simple destructuring expression to find the value of title, author firstname and publisher web url from
 * the given object
 * 2. Change the variable name title to doc, firstname to name, and url to web
 * 
 * 
    const meta = {
        title: 'Destructuring Assignment',
        authors: [ { firstname: 'Craig', lastname: 'Buckler' },{ firstname: 'Craig-1', lastname: 'Buckler-2' } ],
        publisher: {
            name: 'SitePoint',
            url: 'http://www.sitepoint.com/'
        }
    };
 */

 // author = [{firstname : 'Craig'}, {firstname: 'Craig-1'}];
 const meta = {
    title: 'Destructuring Assignment',
    authors: [ { firstname: 'Craig', lastname: 'Buckler' } ],
    publisher: {
        name: 'SitePoint',
        url: 'http://www.sitepoint.com/'
    }
};


const { title, authors:[{firstname}], publisher:{url} } =  meta;

const { title:doc,  authors:[{firstname: name}], publisher:{url : web}} = meta;

//Considering that authors can have any number of objects and we need to create a variable named authors containing array of objects storing only firstnames:

const authors = meta.authors.map((author)=> { const {firstname} = author; return {firstname} });

console.log(title, firstname, url);
console.log(doc, name, web);
console.log(authors);
