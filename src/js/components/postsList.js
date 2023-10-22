
// Display Posts from DummyJSON

class PostsList extends HTMLElement {
    constructor() {
        super();            // Always call super first in constructor to access functions of the parent Object
        
        async function getPosts() {

            let response = await fetch('https://dummyjson.com/posts?limit=12');
            let data = await response.json();
            return data;
        }
       
        getPosts()
        .then(data => {
            let posts = data.posts;
            let htmlToDisplay = '<div class="row">';
            posts.forEach(posts => {
                htmlToDisplay += `
                    <div class="col-md-4">
                        <div class="card">
                            <h3>${posts.title}</h3>
                            <p>${posts.body}</p>

            let response = await fetch('https://dummyjson.com/posts?limit=40');
            let data = await response.json();
            return data;
        }

        getPosts().then(data => {
            let posts = data.posts;
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
        });
        

        
    }
}

                                                
customElements.define("card-post", PostsList);

customElements.define("posts-list", PostsList);

