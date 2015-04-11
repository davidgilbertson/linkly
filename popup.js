function getCurrentTab(cb) {

}

function init() {
    console.log('  --  >  popup.js:3 > init()');
    var el = document.getElementById('extension-test');
    el.innerHTML = 'popup.js is in da house';
}

document.addEventListener('DOMContentLoaded', init);
