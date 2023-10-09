import home from "./js/views/home.js";
import products from "./js/views/products.js";
import blog from "./js/views/blog.js";

const routes = {
    "/": { title: "Home", render: home },
    "/products": { title: "Products", render: products },
    "/blog": { title: "Contact", render: blog },
};

function router() {
    let view = routes[location.pathname];

    if (view) {
        document.title = view.title;
        app.innerHTML = view.render();
    } else {
        history.replaceState("", "", "/");
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