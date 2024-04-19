import { BrowserWindow, Menu } from 'electron';

export const setBrowserMenu = (mainWindow: BrowserWindow) => {
    // 아래의 내용을 수정하여 상단 메뉴바 메뉴 수정
    const MENU_TEMPLATE = [
        {
            label: '파일',
            submenu: [
                {
                    label: '창 닫기',
                    accelerator: 'Ctrl+W',
                    click: () => {
                        mainWindow.close();
                    },
                },
            ],
        },
        {
            label: '보기',
            submenu:
                process.env.NODE_ENV === 'development' ||
                    process.env.DEBUG_PROD === 'true'
                    ? [
                        {
                            label: '새로고침',
                            accelerator: 'Ctrl+R',
                            click: () => {
                                mainWindow.webContents.reload();
                            },
                        },
                        {
                            label: '전체화면 토글',
                            accelerator: 'F11',
                            click: () => {
                                mainWindow.setFullScreen(
                                    !mainWindow.isFullScreen(),
                                );
                            },
                        },
                        {
                            label: '개발자 모드',
                            accelerator: 'Alt+Ctrl+I',
                            click: () => {
                                mainWindow.webContents.toggleDevTools();
                            },
                        },
                    ]
                    : [
                        {
                            label: '전체화면 토글',
                            accelerator: 'F11',
                            click: () => {
                                mainWindow.setFullScreen(
                                    !mainWindow.isFullScreen(),
                                );
                            },
                        },
                    ],
        },
        {
            label: '보기',
            submenu:
                process.env.NODE_ENV === 'development' ||
                    process.env.DEBUG_PROD === 'true'
                    ? [
                        {
                            label: '새로고침',
                            accelerator: 'Ctrl+R',
                            click: () => {
                                mainWindow.webContents.reload();
                            },
                        },
                        {
                            label: '전체화면 토글',
                            accelerator: 'F11',
                            click: () => {
                                mainWindow.setFullScreen(
                                    !mainWindow.isFullScreen(),
                                );
                            },
                        },
                        {
                            label: '개발자 모드',
                            accelerator: 'Alt+Ctrl+I',
                            click: () => {
                                mainWindow.webContents.toggleDevTools();
                            },
                        },
                    ]
                    : [
                        {
                            label: '전체화면 토글',
                            accelerator: 'F11',
                            click: () => {
                                mainWindow.setFullScreen(
                                    !mainWindow.isFullScreen(),
                                );
                            },
                        },
                    ],
        }
    ];

    const menu = Menu.buildFromTemplate(MENU_TEMPLATE);
    Menu.setApplicationMenu(menu);
};