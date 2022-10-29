let skills = {};

const capitalize = (str) => {
    return str[0].toUpperCase() + str.slice(1);
}

const getSkills = () => {
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

const renderSkills = () => {
    let list = document.getElementsByClassName('skill-list')[0];

    let s, i, n;

    // skills I am not familiar with enough to add them to the list
    const exceptions = ["Lua", "Bash", "Next.Js"];
    // need to re-learn Next, now that v13 is out 🥲

    for (field in skills) {
        if (exceptions.includes(field)) continue;

        let skill = skills[field];
    
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