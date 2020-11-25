console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);

function renderProducts(products) {
    const ul_tag = document.querySelector('#products_list');
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