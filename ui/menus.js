
document.getElementById('goHome').onclick = () => {
    window.location.href = 'index.html';

}
document.getElementById('returnToKeys').onclick = () => {
    window.location.href = 'keybinds.html';

}
document.getElementById('menu_m').onclick = () => {
    window.location.href = 'm-menu.html';

}
document.getElementById('menu_f6').onclick = () => {
    window.location.href = 'f6-menu.html';

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
