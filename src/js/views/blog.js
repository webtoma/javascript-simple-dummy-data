import '../components/header.js';
import '../components/footer.js';
import '../components/postsList.js';

export default () => /*html*/`
    <custom-header></custom-header>
    <div class="row">
        <posts-list></posts-list>
    </div>
    <custom-footer></custom-footer>
`;