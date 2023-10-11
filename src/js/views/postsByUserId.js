import "../components/postsListByUserId.js";

export default (id) => `
    <div class="row">
        <posts-by-user-id id="${id}"></posts-by-user-id>
    </div>
`;