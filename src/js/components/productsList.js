
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
            let htmlToDisplay = '<div class="row">';
            products.forEach(product => {
                htmlToDisplay += `
                    <div class="col-md-4">
                        <div class="card">
                            <img src="${product.images[0]}" alt="${product.title}">
                            <h3>${product.title}</h3>
                            <p>${product.description}</p>
                        </div>
                    </div>
                `;
            });
            htmlToDisplay += '</div>';
            this.innerHTML = htmlToDisplay;
        });
        

        
    }
}
customElements.define("products-list", ProductsList);