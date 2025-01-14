
document.getElementById('goHome').onclick = () => {
    window.location.href = 'index.html';

}
document.getElementById('returnToKeys').onclick = () => {
    window.location.href = 'keybinds.html';

}
document.getElementById('cat_Fkeys').onclick = () => {
    window.location.href = 'f-keys.html';

}
document.getElementById('cat_otherKeys').onclick = () => {
    window.location.href = 'otherKeybinds.html';

}
document.getElementById('cat_menus').onclick = () => {
    window.location.href = 'menus.html';

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
