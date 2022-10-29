function getContacts() {
    fetch("/content/contacts.json")
        .then(res => res.json())
        .then(json => {
            let contacts = document.getElementsByClassName('contacts')[0];

            let item, a, img;
            json.forEach(c => {
                item = document.createElement('li');
                item.className = 'contact'

                img = document.createElement('img');
                a = document.createElement('a');

                a.href = c.href;
                
                img.src = c.icon;
                img.alt = c.alt;
                img.width = 80;

                a.appendChild(img);
                item.appendChild(a);

                contacts.appendChild(item);
            });
        })
        .catch(err => {
            console.log(err);
        })
}

getContacts();