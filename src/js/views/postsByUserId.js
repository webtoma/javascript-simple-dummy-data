import "../components/header.js";
import "../components/footer.js";
import "../components/postsListByUserId.js";

export default (id) => `
<cutom-header></cutom-header>
    <div class="row">
        <posts-by-user-id id="${id}"></posts-by-user-id>
    </div>
    <custom-footer></custom-footer>
`;