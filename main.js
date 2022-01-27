
// Diese Datei ist für die App verantwortlich

// Die dafür gebrauchte Bibliothek wird importiert
const {app, BrowserWindow} = require("electron");
const path = require("path");

// Eine Funktion, die ein Fenster erstellt, welches 1200 breit und 800 hoch ist
// Technische Sachen zum Integrieren der Technologie mit Node.JS etc
function createWindow () {
    const win = new BrowserWindow({
        width: 1200,
        height: 800,
        icon: path.join(__dirname, "src/img/logo.svg"),
        webPreferences: {
            nodeIntegration: true,
            worldSafeExecuteJavaScript: true,
            contextIsolation: true,
        }
    });

    // Standardmenü mit "Datei", "Bearbeiten" usw wird entfernt, weil es schon ein eigenes gibt
    win.setMenu(null);

    // HTML-Datei wird geladen (Skelett der App)
    win.loadFile("index.html");
}

// Wenn die App bereit ist, wird das Fenster geöffnet
app.whenReady().then(createWindow);