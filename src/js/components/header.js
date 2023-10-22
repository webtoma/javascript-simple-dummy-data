
class Header extends HTMLElement {
    constructor() {
        super();            // Always call super first in constructor to access functions of the parent Object
        this.innerHTML =`
        <nav>
        <a href="/" data-link>Home</a>
        <a href="/products" data-link>Products</a>
        <a href="/blog" data-link>Blog</a>
        <a href="/users" data-link>Users</a>
    </nav>
        `
        }
    }
    customElements.definie("card-header", Header)
=======
// Display Posts from DummyJSON
class Header extends HTMLElement {
    constructor() {
        super();            // Always call super first in constructor to access functions of the parent Object
        this.innerHTML = `
        <header>  
            <div class="container">
                <nav>
                    <a href="/" data-link>Home</a>
                    <a href="/products" data-link>Products</a>
                    <a href="/blog" data-link>Blog</a>
                    <a href="/users" data-link>Users</a>
                </nav>
            </div>
        </header>
        `;
    }
}
customElements.define("custom-header", Header);

