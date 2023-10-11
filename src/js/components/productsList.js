
// Display Products from DummyJSON
class ProductsList extends HTMLElement {
    constructor() {
        super();            // Always call super first in constructor to access functions of the parent Object
        
        async function getProducts() {
            let response = await fetch('https://dummyjson.com/products?limit=12');
            let data = await response.json();
            return data;
        }

        getProducts().then(data => {
            let products = data.products;
            let htmlToDisplay = '';
            products.forEach(product => {
                htmlToDisplay += `
                    <div class="col-md-4 mb-3">
                        <div class="card p-2">
                            <img src="${product.images[0]}" alt="${product.title}">
                            <h3>${product.title}</h3>
                            <p>${product.description}</p>
                        </div>
                    </div>
                `;
            });
            this.innerHTML = htmlToDisplay;
        });
        

        
    }
}
customElements.define("products-list", ProductsList);