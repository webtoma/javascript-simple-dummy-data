import '../components/header.js';
import '../components/footer.js';

import "../components/usersList.js";

export default () => /*html*/`
    <custom-header></custom-header>
    <div class="container">
        <h1>Users</h1>
        <div class="row">
            <users-list></users-list>
        </div>
    </div>
    <custom-footer></custom-footer>
`;