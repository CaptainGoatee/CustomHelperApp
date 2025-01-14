
document.getElementById('goHome').onclick = () => {
    window.location.href = 'index.html';

}
document.getElementById('returnToTerms').onclick = () => {
    window.location.href = 'terminology.html';

}
document.getElementById('cat_vdm-rdm').onclick = () => {
    window.location.href = 'vdm-rdm.html';

}
document.getElementById('cat_roleplay').onclick = () => {
    window.location.href = 'roleplay.html';

}
document.getElementById('cat_prioTerms').onclick = () => {
    window.location.href = 'priorities.html';

}


// DONT DELETE BELOW

onSettingsChange((settings) => {
    let theme = settings.display.theme;
    document.getElementsByClassName('app')[0].dataset.theme = theme;
});

getSettings().then((settings) => {
    let theme = settings.display.theme;
    document.getElementsByClassName('app')[0].dataset.theme = theme;
});
