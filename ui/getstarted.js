
document.getElementById('goHome').onclick = () => {
    window.location.href = 'index.html';
}
document.getElementById('characters').onclick = () => {
    window.location.href = 'characters.html';
}
document.getElementById('vehicles').onclick = () => {
    window.location.href = 'vehicles.html';
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
