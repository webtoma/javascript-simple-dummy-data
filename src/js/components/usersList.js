class UsersList extends HTMLElement {
    constructor() {
        super();            // Always call super first in constructor to access functions of the parent Object
        
        async function getUsers() {
            let response = await fetch('https://dummyjson.com/users?limit=50');
            let data = await response.json();
            return data;
        }
       
        getUsers()
        .then(data => {
            let users = data.users;
            let htmlToDisplay = '<div class="row">';
            users.forEach(users => {
                htmlToDisplay += `

                <div class="card">
                <img src="${users.images[0]}" alt="${users.title}">
                <h3>${users.firsName}</h3>
                <p>${users.lastName}</p>
            </div> `;
            
            });
            htmlToDisplay += '</div>';
            this.innerHTML = htmlToDisplay;
        });
        
    }
}

customElements.definie("card-users", UsersList)