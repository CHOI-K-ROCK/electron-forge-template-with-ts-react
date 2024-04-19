import { app, BrowserWindow, ipcMain, Menu, shell } from 'electron';
import { setBrowserMenu } from './menu';

declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;

process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true' // 보안 경고 숨김


if (require('electron-squirrel-startup')) {
    app.quit();
}

let mainWindow: BrowserWindow;

const createWindow = (): void => {
    // 브라우저 창 생성
    mainWindow = new BrowserWindow({
        height: 600,
        width: 800,
        autoHideMenuBar: true,
        webPreferences: {
            preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
            nodeIntegration: true,
        },
    });

    //? 메뉴 세팅
    setBrowserMenu(mainWindow);

    //? ================================================================
    // preload 에서 설정한 invoke 이벤트 작성

    ipcMain.handle("toggleFullscreen", () => {
        return mainWindow.setFullScreen(!mainWindow.isFullScreen());
    });

    //? ================================================================

    // URL 로드
    mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

    // 개발 환경인 경우 개발자 도구 열기
    (process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true') && mainWindow.webContents.openDevTools();
};


app.on('ready', () => {
    createWindow();
});

// 맥의 경우 창이 닫혀도 해당 프로세스가 유지됨
// 따라서 맥이 아닌 경우 앱을 완전히 닫는다.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    //OSX 에서 독 아이콘을 클릭했을 때, 만약 다른 창이 열려 있지 않은 경우에는 앱에서 새 창을 생성 (출처 : GPT)
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
