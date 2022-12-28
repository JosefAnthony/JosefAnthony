const products = [
    {
        productId: "jdhdUUUUUUUnhhh",
        cost: 1500,
        productName: "orange"
    },
    {
        productId: "QwaasYYggg",
        cost: 1600,
        productName: "mango"
    },
    {
        productId: "oLKJffffBBnn",
        cost: 3500,
        productName: "Brush"
    },
    {
        productId: "KIIDLKDDDDD",
        cost: 3000,
        productName: "Paper"
    }, 
    {
        productId: "HBBBSFffffff",
        cost: 1500,
        productName: "Block"
    }
]

// a) print the length of the products
// b) print the productName only
// c. find the total cost 

const showsLength = products.length;
console.log('the product length are: ',showsLength);


const names = products.forEach(name => { 
    console.log('product names: ',name.productName)
});




