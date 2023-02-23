const butInstall = document.getElementById('buttonInstall');

window.addEventListener('beforeinstallprompt', (event) => {});

butInstall.addEventListener('click', async () => {});
const promptEvent = window.deferredPrompt;

if (!promptEvent) {
 return;
}

window.addEventListener('appinstalled', (event) => {});
window.deferredPrompt = null;
