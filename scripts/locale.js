const changeLanguage = (lang) => {
    try {
        if (lang === 'en-us') {
            localStorage.setItem('lang', lang);
        } else {
            localStorage.setItem('lang', 'pt-br');
        }

        location.reload();
    } catch (err) {
        console.error(err);
    }
}

const getLanguage = () => {
    let lang;

    try {
        lang = localStorage.getItem('lang');

        if (lang === null)
            throw new Error('Empty key!');
    } catch (err) {
        lang = 'pt-br';
        changeLanguage(lang);
    }

    return lang;
}

const usePt = () => {
    return getLanguage() === 'pt-br';
}

const loadContent = () => {
    let desc = document.getElementsByClassName('desc')[0];
    let changelang = document.getElementsByClassName('change-language')[0];
    let titles = document.getElementsByClassName('title');

    const lang = getLanguage();

    changelang.onclick = () => usePt() ? changeLanguage('en-us') : changeLanguage('pt-br');

    fetch('/content/profile.json')
        .then(res => res.json())
        .then(json => {
            desc.innerHTML += json.description[lang]; 
            changelang.innerHTML += json["locale-button"][lang]

            let t = json.titles;
            t.forEach((title, i) => {
                titles[i].innerHTML += title[lang];
            });
        })
        .catch(err => {
            console.error(err)
            location.reload();
        });
}

loadContent();