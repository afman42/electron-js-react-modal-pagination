const { app, BrowserWindow, ipcMain, Notification, } = require('electron');
const path = require('path');
const isDev = !app.isPackaged;

// function createSplashWindow() {
//   const win = new BrowserWindow({
//     width: 400,
//     height: 200,
//     frame: false,
//     transparent: true,
//     webPreferences: {
//       nodeIntegration: false,
//       worldSafeExecuteJavaScript: true,
//       contextIsolation: true,
//     }
//   })

//   win.loadFile('splash.html')
//   return win;
// }

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    backgroundColor: '#fff',
    show: false,
    webPreferences: {
      nodeIntegration: false,
      worldSafeExecuteJavaScript: true,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile('index.html')
  isDev && win.webContents.openDevTools();
  return win;
}

if (isDev) {
  require('electron-reload')(__dirname, {
    electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
  })
}

app.whenReady()
  .then(() => {
    const mainApp = createWindow();

    mainApp.once('ready-to-show', () => {
      // splash.destroy();
      // mainApp.show();
      mainApp.show();
    })
  });

ipcMain.on('notify', (_, message) => {
  new Notification({title: 'Notification', body: message}).show();
})

ipcMain.on('app-quit', () => {
  app.quit();
})


// app.on('window-all-closed', () => {
//   if (process.platform !== 'darwin') {
//     app.quit();
//   }
// })
