//supported translations
var language = {
    "us":{
        "nav about": "ABOUT",
        "nav collection": "COLLECTION",
        "nav shop": "SHOP",
        "nav service" : "SERVICE",
        "nav login": "LOGIN",
        "nav bag" : "BAG",
        "see full collection" : "SEE FULL COLLECTION"
    },
    "kr":{
        "nav about": "소개",
        "nav collection": "컬렉션",
        "nav shop": "제품",
        "nav service" : "고객센터",
        "nav login": "로그인",
        "nav bag" : "쇼핑백",
        "see full collection" : "컬렉션 보기"
    }
}

//change language button
var langButton = document.getElementById('change-language');
langButton.addEventListener('click', changeLang);

function changeLang() {
    var textToTranslate = document.querySelectorAll(".translatable")
    var koreanCategory = [];
    var key = Object.keys(language.us);
    var englishCategory = [];
    // var englishKey = Object.keys(language.us);

    if (langButton.classList.contains('current-lang-english')) {
        for (var i = 0; i < key.length; i++) {
            koreanCategory.push(language.kr[key[i]]);
            console.log(koreanCategory);
            textToTranslate[i].innerHTML = koreanCategory[i];
        }
        langButton.className = 'current-lang-korean';
        langButton.innerHTML = 'KR &nbsp;<span class="flag-icon flag-icon-kr"></span>';
    } else if (langButton.classList.contains('current-lang-korean')) {
        for (var i = 0; i < key.length; i++) {
            englishCategory.push(language.us[key[i]]);
            console.log(englishCategory);
            textToTranslate[i].innerHTML = englishCategory[i];
        }
        langButton.className = 'current-lang-english';
        langButton.innerHTML = 'EN &nbsp;<span class="flag-icon flag-icon-us"></span>';
    }
}