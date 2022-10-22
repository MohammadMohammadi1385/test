let $ = document;
let scrollBar = $.querySelector('#scroll');

window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY;
    let documentHeight = $.body.clientHeight;
    let windowHeight = window.innerHeight;
    let scroll = scrollTop / (documentHeight - windowHeight);
    let result = Math.round(scroll * 100);
    scrollBar.style.width = `${result}%`;
})