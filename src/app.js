'use strict'

const { app, BrowserWindow } = require('electron')
const windowStateKeeper = require('electron-window-state')
require('electron-debug') // ({ showDevTools: true })

let mainWindow

function createWindow() {
  let mainWindowState = windowStateKeeper({
    defaultWidth: 1200,
    defaultHeight: 700
  })

  mainWindow = new BrowserWindow({
    'width': mainWindowState.width,
    'height': mainWindowState.height
      // 'x': mainWindowState.x,
      // 'y': mainWindowState.y,
  })

  mainWindowState.manage(mainWindow)
  mainWindow.loadURL(`file://${__dirname}/view/index.html`)
  mainWindow.on('closed', () => {
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
