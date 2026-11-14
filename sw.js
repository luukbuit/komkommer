// Alleen voor systeemmeldingen: Android en iPhone tonen die via een service worker.
// Een tik op de melding haalt de timer weer naar voren.
self.addEventListener('notificationclick', (e) => {
  e.notification.close();
  e.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true })
      .then((vensters) => vensters.length ? vensters[0].focus() : self.clients.openWindow('./'))
  );
});
