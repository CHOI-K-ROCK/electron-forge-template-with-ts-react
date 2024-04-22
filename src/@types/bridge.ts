export type InvokeChannels =
    "TOGGLE_FULL_SCREEN" |
    "CLOSE_APP";

export type InvokeHandleDataType = {
    channel: InvokeChannels,
    listener: () => void
};

