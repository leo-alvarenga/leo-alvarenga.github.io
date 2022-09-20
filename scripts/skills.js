var skills = {
    Go: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg',
    Js: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg',
    Ts: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg',
    Node: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg',
};


var projects = [
    {
        title: 'bah meu',
        repo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg',
        tech: ['Go', 'Js', 'Ts'],
    },
];

function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
}

function renderSkills() {
    var list = document.getElementsByClassName('skill-list')[0];

    var s, i, n;

    for (field in skills) {
        var skill = skills[field];
    
        s = document.createElement('li');
        i = document.createElement('img');
        n = document.createElement('span');
    
        i.src = skill;
        i.alt = capitalize(field) + '_image';
        i.className = 'skill-img'
    
        n.innerHTML = capitalize(field);
        n.className = 'skill-name';
    
        s.className = 'skill';
        s.appendChild(i);
        s.appendChild(n);
    
        list.appendChild(s);
    }
}

function renderProjects() {
    var list = document.getElementsByClassName('project-list')[0];

    var title, repo, techlist;
    projects.forEach(proj => {
        var item = document.createElement('li');
        item.className = 'project';

        repo = document.createElement('a');
        repo.target = '_blank';
        repo.href = proj.repo;

        title = document.createElement('h5');
        title.innerText = capitalize(proj.title);

        techlist = document.createElement('ul');
        proj.tech.forEach(t => {
            var i = document.createElement('li')
            
            var img = document.createElement('img');
            img.src = skills[t];

            i.appendChild(img);

            techlist.appendChild(i);
        });

        repo.appendChild(title);
        repo.appendChild(techlist);

        item.appendChild(repo);
        list.appendChild(item);
    });
}

renderSkills();
renderProjects();