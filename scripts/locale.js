function changeLanguage(lang) {
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

function getLanguage() {
    var lang;

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

function usePt () {
    return getLanguage() === 'pt-br';
}

function loadContent() {
    var desc = document.getElementsByClassName('desc')[0];
    var changelang = document.getElementsByClassName('change-language')[0];
    var lang = getLanguage();

    changelang.onclick = () => usePt() ? changeLanguage('en-us') : changeLanguage('pt-br');

    fetch('/content/profile.json')
        .then(res => res.json())
        .then(json => {
            desc.innerText = json.description[lang]; 
            changelang.innerHTML += json["locale-button"][lang]
        })
        .catch(err => {
            console.error(err)
            location.reload();
        });
}

loadContent();