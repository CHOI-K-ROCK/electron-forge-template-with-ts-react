
import { InvokeChannels } from "../@types/bridge";
import { CustomWindow } from "../@types/window";

declare let window: CustomWindow; // window 객체 타입 오류 수정

export const invoke = async (key: InvokeChannels) => {
    return await window.bridge.invoke(key);
};