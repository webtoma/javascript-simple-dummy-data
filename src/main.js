import home from "./js/views/home.js";
import users from "./js/views/users.js";
import products from "./js/views/products.js";
import blog from "./js/views/blog.js";

import users from "./js/views/users.js";


import postsByUser from "./js/views/postsByUserId.js";


const routes = {
    "/": { title: "Home", render: home },
    "/products": { title: "Products", render: products },

    "/users": {title: "Users", render: users},
    "/blog": { title: "Contact", render: blog },
    "/404" : {title: "404", render: () => `<h1>404</h1>`}
    

    "/blog": { title: "Blog", render: blog },
    "/users": { title: "Users", render: users },
    "/404": { title: "404", render: () => /*html*/`<h1>404</h1>` },
    "/posts/user/:id": { title: "Posts by User", render: (id) => postsByUser(id) },

};

function router() {
    let view = routes[location.pathname];


    if (view) {
        document.title = view.title;
        app.innerHTML = view.render();
    } else {
        history.replaceState("", "", "/404");
        router();

    let param = window.location.href.split('/posts/user/')[1]
    if(param){
        view = routes['/posts/user/:id']
        param = param.split('/')[0]
        if (view) {
            document.title = view.title;
            app.innerHTML = view.render(param);
        } else {
            history.replaceState("", "", "/404");
            router();
        }
    }else{
        if (view) {
            document.title = view.title;
            app.innerHTML = view.render();
        } else {
            history.replaceState("", "", "/404");
            router();
        }

    }
};

// Handle navigation
window.addEventListener("click", e => {
    if (e.target.matches("[data-link]")) {
        e.preventDefault();
        history.pushState("", "", e.target.href);
        router();
    }
});

// Update router
window.addEventListener("popstate", router);
window.addEventListener("DOMContentLoaded", router);