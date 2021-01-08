const productsList = document.querySelector('#productsList');
const searchField = document.querySelector('#search_field');

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    convertToCurrency(currency) {
       const currencyRate = {
            'krone' : 1,
            'dollar' : 0.16,
            'euro' : 0.13,
            'hryvnia' : 4.66
        }
        return this.price * currencyRate[currency];
    }
}

const plant = new Product("plant", 50);
console.log(plant.convertToCurrency('dollar') + " this");

class ShoppingCart {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
    }

    removeProduct(product) {
        const removedProductArray = this.products.filter(el => el.name !== product.name);
        this.products = removedProductArray;
    }

    searchProduct(productName) {
        const searchedProduct = this.products.filter(el => el.name === productName);
        return searchedProduct;
    }

    getTotal() {
        let total = 0;
        for (let i = 0; i < this.products.length; i++) {
            total += this.products[i].price;
        }
        return total;
    }

    renderProducts() {
        for (let i = 0; i < this.products.length; i++) {
            const productName = document.createElement('h1');
            productName.innerText = this.products[i].name;
            productsList.appendChild(productName);
            const productPrice = document.createElement('span');
            productPrice.innerText = this.products[i].price;
            productsList.appendChild(productPrice);
        }
    }

    getUser() {
        return fetch('https://jsonplaceholder.typicode.com/users/1');
    }
}

const shoppingCart = new ShoppingCart();
const flatscreen = new Product("flat-screen", 5000);
shoppingCart.addProduct(flatscreen);

const product1 = new Product('toothpaste', 40);
const product2 = new Product('bacon', 20);
const product3 = new Product('sparkling water', 15);

shoppingCart.addProduct(product1);
shoppingCart.addProduct(product2);
shoppingCart.addProduct(product3);
console.log(shoppingCart);

shoppingCart.removeProduct(product2);
console.log(shoppingCart);

console.log(shoppingCart.getUser());
console.log(shoppingCart.getTotal());
shoppingCart.renderProducts();
console.log(shoppingCart.searchProduct('toothpaste'));