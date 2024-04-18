//preload 로 window 객체에 내용을 추가할 경우 아래 타입 수정

export interface CustomWindow extends Window {
    bridge: any;
    version: { [key: string]: string }
}