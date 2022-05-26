function toggleTheme() {
    
    var theme = document.getElementsByTagName('link')[0];

    if (theme.getAttribute('href') == 'home.css') {
        theme.setAttribute('href', 'other.css');
        localStorage.setItem("theme", 'other.css');
    } else {
        theme.setAttribute('href', 'home.css');
        localStorage.setItem("theme", 'home.css');
    }   
}

function setdefcss(){
    var el = document.getElementById('theme');
    var theme = localStorage.getItem('theme');

    if (theme) {
        el.href = theme;
    }
}

function change(file){
    var theme = document.getElementsByTagName('link')[0];

    if(theme.getAttribute('href') == theme.getItem('theme')){
        // do nothing
    }
    else {
        theme.setAttribute('href', localStorage.getItem('theme'));
    }
}

window.onload = function(){
    
    setdefcss();
    change(localStorage.getItem('theme'));
}