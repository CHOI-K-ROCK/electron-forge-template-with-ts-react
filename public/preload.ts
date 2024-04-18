import { contextBridge, ipcRenderer } from 'electron';

console.log("preload")

contextBridge.exposeInMainWorld("bridge", {
    invoke: ipcRenderer.invoke,
});

contextBridge.exposeInMainWorld("versions", {
    node: process.versions.node,
    chrome: process.versions.chrome,
    electron: process.versions.electron,
});

// 여기에서 expose 된 내용은 window.${name} 으로 접근가능.

// ex) 
// contextBridge.exposeInMainWorld("something", {
//   data : "something"
// });
// -> window.something.data === "something";