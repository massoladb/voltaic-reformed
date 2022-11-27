window.onscroll = function() {
    let nav = document.getElementById("navbar");
    var currentScrollPos = window.pageYOffset;

    if (currentScrollPos < 40) {
        nav.style.backgroundColor = "#ffffff00";
    } else {
        nav.style.backgroundColor = "#00031b";
    }
}