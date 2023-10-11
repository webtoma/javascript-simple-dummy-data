// Display Posts from DummyJSON
class Footer extends HTMLElement {
    constructor() {
        super();            // Always call super first in constructor to access functions of the parent Object
        this.innerHTML = `
        <footer>    
            <div class="container">
                footer 2023
            </div>
        </footer>`;
    }
}
customElements.define("custom-footer", Footer);