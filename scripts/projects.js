var projects = [];

function normalizeText(text, maxLen) {
    if (!text)
        return '';

    if (text.length >= maxLen - 3) {
        return text.slice(0, maxLen - 4) + '...';
    }

    return text;
}

function getProjects() {
    fetch('/content/projects.json')
        .then(res => res.json())
        .then(json => {
            projects = json;
            renderProjects();
        })
        .catch(err => {
            console.error(err)
            location.reload();
        });
}

function renderProjects() {
    var list = document.getElementsByClassName('project-list')[0];

    var maxDescLen = window.innerWidth > 600 ? 80 : 60;

    var title, desc, repo, techlist;
    projects.forEach(proj => {
        var item = document.createElement('li');
        item.className = 'project';

        repo = document.createElement('a');
        repo.target = '_blank';
        repo.href = proj.repo;

        title = document.createElement('h4');
        title.innerText = capitalize(proj.title);

        desc = document.createElement('p');
        desc.innerText = normalizeText(proj.description[getLanguage()], maxDescLen);

        techlist = document.createElement('ul');
        proj.tech.forEach(t => {
            var i = document.createElement('li')
            
            var img = document.createElement('img');
            img.src = skills[t];

            i.appendChild(img);

            techlist.appendChild(i);
        });

        repo.appendChild(title);
        repo.appendChild(desc);
        repo.appendChild(techlist);

        item.appendChild(repo);
        list.appendChild(item);
    });
}