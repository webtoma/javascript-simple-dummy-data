
// Display Products from DummyJSON
class ProductsList extends HTMLElement {
    constructor() {
        super();            // Always call super first in constructor to access functions of the parent Object
        
        fetch('https://dummyjson.com/products?limit=10') // récupérer la data
        .then(response => response.json())     // convertir la data en json
        .then(data => {  
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
            this.innerHTML = htmlToDisplay; // utiliser la data
        })                                                   
    }
}
customElements.define("card-product", ProductsList);