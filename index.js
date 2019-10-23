const { windowManager } = require('node-window-manager');

(function listValidWindows() {
  windowManager
    .getWindows()
    .filter(
      window =>
        window.path &&
        window.path.includes('/Applications') &&
        window.getBounds().y > 0 &&
        window.getTitle() !== '' &&
        window.isWindow(),
    )
    .forEach(window => {
      console.log(window.getInfo());
      window.setBounds({ x: 0, y: 0, width: 1000, height: 1000 });
    });
})();

// (async () => {
//   while (true) {
//     await sleep(100);
//   }
// })();
