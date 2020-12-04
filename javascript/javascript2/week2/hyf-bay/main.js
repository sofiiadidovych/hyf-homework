console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);

let filteredProducts = products;

function renderProducts(products) {
    const ul_tag = document.querySelector('#products_list');
    ul_tag.innerHTML = "";
    for (let i = 0; i < products.length; i ++) {
        const li_tag = document.createElement('li');
        const h2_tag = document.createElement('h2');
        const p_price_tag = document.createElement('p');
        const p_rating_tag = document.createElement('p');
        h2_tag.innerHTML = products[i].name;
        p_price_tag.innerHTML = `price: ${products[i].price}`;
        p_rating_tag.innerHTML = `Rating: ${products[i].rating}`;
        li_tag.appendChild(h2_tag);
        li_tag.appendChild(p_price_tag);
        li_tag.appendChild(p_rating_tag);
        ul_tag.appendChild(li_tag);
    }
}

renderProducts(products);

// Filter products
const search = document.querySelector('#search_field');

search.addEventListener('input', searchProduct => {
    filteredProducts = products.filter(product => product.name.toLowerCase().includes(search.value.toLowerCase()));
    sortProducts(filteredProducts);
    renderProducts(filteredProducts);
});

// Filter products based on max price

const maxPrice = document.querySelector('#max_price');

maxPrice.addEventListener('input', findCheapProducts => {
    filteredProducts = products.filter(product => product.price < maxPrice.value || maxPrice.value === '');
    sortProducts(filteredProducts);
    renderProducts(filteredProducts);
})

// Extra feature
// I added sort function to all options: while we are searching for a product by title or price,
// we can sort them (by rating, price and title).

// Sort the products
const sort = document.querySelector('#sort');
sort.addEventListener('click', function () {
    sortProducts(filteredProducts);
    renderProducts(filteredProducts);
})

function sortProducts(productsToSort) {
    if (sort.value === 'price') {
        productsToSort.sort((a,b) => a.price - b.price);
    } else if (sort.value === 'rating') {
        productsToSort.sort((a,b) => a.rating - b.rating);
    } else if (sort.value === 'name') {
        productsToSort.sort((a,b) => {
            if (a.name < b.name) {
                return -1;
            } else if (a.name > b.name) {
                return 1;
            } else {
                return 0;
            }
        }) ;
    }
}