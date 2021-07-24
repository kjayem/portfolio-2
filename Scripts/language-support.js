//supported translations
var language = {
    "us":{
        "nav about": "ABOUT",
        "nav collection": "COLLECTION",
        "nav shop": "SHOP",
        "nav login": "LOGIN",
    },
    "kr":{
        "nav about": "소개",
        "nav collection": "컬렉션",
        "nav shop": "제품",
        "nav login": "로그인",
    }
}


//change language button
var langButton = document.getElementById('change-language');
langButton.addEventListener('click', changeLang);

function changeLang() {
    var textToTranslate = document.querySelectorAll(".nav-lang")
    var koreanCategory = [];
    var koreanKey = Object.keys(language.kr);
    var englishCategory = [];
    var englishKey = Object.keys(language.us);

    if (langButton.classList.contains('current-lang-english')) {
        for (var i = 0; i < koreanKey.length; i++) {
            koreanCategory.push(language.kr[koreanKey[i]]);
            textToTranslate[i].innerHTML = koreanCategory[i];
            console.log(koreanCategory);
        }
        langButton.className = 'current-lang-korean';
        langButton.innerHTML = 'KR &nbsp;<span class="flag-icon flag-icon-kr"></span>';
    } else if (langButton.classList.contains('current-lang-korean')) {
        for (var i = 0; i < englishKey.length; i++) {
            englishCategory.push(language.us[englishKey[i]]);
            textToTranslate[i].innerHTML = englishCategory[i];
            console.log(englishCategory);
        }
        langButton.className = 'current-lang-english';
        langButton.innerHTML = 'EN &nbsp;<span class="flag-icon flag-icon-us"></span>';
    }
}