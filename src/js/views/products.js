import '../components/header.js';
import '../components/footer.js';

import "../components/productsList.js";

export default () => /*html*/`
    <custom-header></custom-header>
    <div class="container">
        <products-list class="row"></products-list>
    </div>
    <custom-footer></custom-footer>
`;