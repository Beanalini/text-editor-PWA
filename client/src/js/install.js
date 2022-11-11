const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
//Event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    //store the triggered events
    window.deferredPrompt = event;
    butInstall.classList.toggle('hidden', false);
});

//Click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
     return;
    }  
    // Show prompt
    promptEvent.prompt();
    
    // Reset the deferred prompt variable.
    window.deferredPrompt = null;
    
    butInstall.classList.toggle('hidden', true);

});

//handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    // Clear prompt
  window.deferredPrompt = null;
});
