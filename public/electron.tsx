const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const isDev = require("electron-is-dev");
const width = 1920;

const height = 1080;
let mainWindow;

function createWindow() {
	mainWindow = new BrowserWindow({
		width: width,
		height: height,
		fullscreenable: true,
		//backgroundColor: "#000000",
	});
	mainWindow.loadURL("http://localhost:3000");

	mainWindow.on("closed", () => (mainWindow = null));
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
	if (process.platform !== "darwin") {
		app.quit();
	}
});

app.on("activate", () => {
	if (mainWindow === null) {
		createWindow();
	}
});
