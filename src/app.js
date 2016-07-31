const { app, BrowserWindow } = require('electron')
require('electron-debug') // ({ showDevTools: true })

let mainWindow

function createWindow() {
  mainWindow = new BrowserWindow({ width: 1200, height: 800 })
  mainWindow.loadURL(`file://${__dirname}/view/index.html`)
  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  app.quit()
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})
