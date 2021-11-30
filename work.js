let tabs = document.getElementsByClassName('tab');
let free = document.getElementById('eCommerce');
let wd = document.getElementById('Web-Development');

for (i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', function (e) {
        for (let tab of tabs) {
            tab.classList.remove('tab-active');
        }
        this.classList.add('tab-active');
        removeActive(e.currentTarget);
    });
}

function removeActive(el) {
    free.classList.remove("active");
    wd.classList.remove("active");
    document.getElementById(el.textContent).classList.add('active');
}