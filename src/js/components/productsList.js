
// Display Products from DummyJSON
class ProductsList extends HTMLElement {
    constructor() {
        super();            // Always call super first in constructor to access functions of the parent Object
        
        async function getProducts() {
            let response = await fetch('https://dummyjson.com/products?limit=10');
            let data = await response.json();
            return data;
        }

        getProducts().then(data => {
            let products = data.products;
            let htmlToDisplay = '';
            products.forEach(product => {
                htmlToDisplay += `
                    <div class="card">
                        <img src="${product.images[0]}" alt="${product.title}">
                        <h3>${product.title}</h3>
                        <p>${product.description}</p>
                    </div>
                `;
            });
            this.innerHTML = htmlToDisplay;
        });
        
    }
}
customElements.define("products-list", ProductsList);