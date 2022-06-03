if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js')
    .then(reg => console.log('Registered correctly', reg))
    .catch(err => console.warn('Error while registering ServiceWorker', err))
}