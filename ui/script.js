document.getElementById('btn_aboutUs').onclick = () => {
    window.location.href = 'aboutus.html';
}
document.getElementById('btn_chatCommands').onclick = () => {
    window.location.href = 'commands.html';
}
document.getElementById('btn_voicechat').onclick = () => {
    window.location.href = 'voicechat.html';
}
document.getElementById('btn_terminology').onclick = () => {
    window.location.href = 'terminology.html';
}
document.getElementById('btn_commonKeybinds').onclick = () => {
    window.location.href = 'keybinds.html';
}
document.getElementById('btn_newmember').onclick = () => {
    window.location.href = 'getstarted.html';
}


onSettingsChange((settings) => {
    let theme = settings.display.theme;
    document.getElementsByClassName('app')[0].dataset.theme = theme;
});

getSettings().then((settings) => {
    let theme = settings.display.theme;
    document.getElementsByClassName('app')[0].dataset.theme = theme;
});
