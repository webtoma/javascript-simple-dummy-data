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
            

            let response = await fetch('https://dummyjson.com/users?limit=100');
            let data = await response.json();
            return data;
        }

        getUsers().then(data => {
            let users = data.users;
            let htmlToDisplay = '<div class="row">';
            users.forEach(user => {
                htmlToDisplay += `
                    <div class="col-md-2 mb-3">
                        <div class="card p-1 text-center">
                            <img src="${user.image}" alt="${user.firstName}" class="border-bottom border" style="height:100px">
                            <h5><a href="posts/user/${user.id}" data-link>${user.firstName}<br>${user.lastName}</a></h5>
                            <p><small>${user.address.city}</small></p>
                        </div>
                    </div>
                `;

            });
            htmlToDisplay += '</div>';
            this.innerHTML = htmlToDisplay;
        });

        
    }
}

customElements.definie("card-users", UsersList);
    }
}
customElements.define("users-list", UsersList);

