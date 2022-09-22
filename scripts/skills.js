var skills = {};

function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
}

function getSkills() {
    fetch('/content/skills.json')
        .then(res => res.json())
        .then(json => {
            skills = json;
            renderSkills();
            getProjects();
        })
        .catch(err => {
            console.error(err)
            location.reload();
        });
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
    
        n.innerHTML = field.toUpperCase();
        n.className = 'skill-name';
    
        s.className = 'skill';
        s.appendChild(i);
        s.appendChild(n);
    
        list.appendChild(s);
    }
}

getSkills();