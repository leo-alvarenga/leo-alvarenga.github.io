let projects = [];

const normalizeText = (text, maxLen) => {
    if (!text)
        return '';

    if (text.length >= maxLen - 3)
        return text.slice(0, maxLen - 4) + '...';

    return text;
}

const getProjects = () => {
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

const renderProjects = () => {
    let list = document.getElementsByClassName('project-list')[0];

    let title, desc, repo, techlist;
    projects.forEach(proj => {
        let item = document.createElement('li');
        item.className = 'project';

        repo = document.createElement('a');
        repo.target = '_blank';
        repo.href = proj.repo;

        title = document.createElement('h4');
        title.innerText = capitalize(proj.title);

        desc = document.createElement('p');
        desc.innerText = proj.description[getLanguage()];

        techlist = document.createElement('ul');
        proj.tech.forEach(t => {
            let i = document.createElement('li')
            
            let img = document.createElement('img');
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