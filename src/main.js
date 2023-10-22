import home from "./js/views/home.js";
import products from "./js/views/products.js";
import blog from "./js/views/blog.js";
import users from "./js/views/users.js";


const routes = {
    "/": { title: "Home", render: home },
    "/products": { title: "Products", render: products },
    "/users": {title: "Users", render: users},
    "/blog": { title: "Contact", render: blog },
    "/404" : {title: "404", render: () => `<h1>404</h1>`}
    
};

function router() {
    let view = routes[location.pathname];

    if (view) {
        document.title = view.title;
        app.innerHTML = view.render();
    } else {
        history.replaceState("", "", "/404");
        router();
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