
var language = {
    "us":{
        "nav about": "ABOUT",
        "nav collection": "COLLECTION",
        "nav shop": "SHOP",
        "nav lang": "EN",
        "nav login": "LOGIN",
    },
    "kr":{
        "nav about": "소개",
        "nav collection": "컬렉션",
        "nav shop": "제품",
        "nav lang": "KR",
        "nav login": "로그인",
    }
}

document.getElementById('change-language').addEventListener('click', getLang);

function getLang() {
    console.log(language.us["nav about"]);
}