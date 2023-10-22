class PostsByUserId extends HTMLElement {
    static get observedAttributes() {
        return ['id'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'id') {
            console.log(newValue);
            this.fetchPosts(newValue);
        }
    }

    async fetchPosts(id) {
        console.log(id)
        let response = await fetch(`https://dummyjson.com/posts/user/${id}?limit=40`);
        let data = await response.json();
        this.renderPosts(data.posts);
    }

    renderPosts(posts) {
        let htmlToDisplay = '<div class="row">';
        posts.forEach(post => {
            htmlToDisplay += `
                <div class="col-md-4">
                    <div class="card">
                        <h3>${post.title}</h3>
                        <p>${post.body}</p>
                    </div>
                </div>
            `;
        });
        htmlToDisplay += '</div>';
        this.innerHTML = htmlToDisplay;
    }
}
customElements.define("posts-by-user-id", PostsByUserId);