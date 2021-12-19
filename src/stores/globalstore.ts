import { writable } from "svelte/store";
export const pageBackground = writable("");
export const setBackground = (path: string) : void => {
    pageBackground.set(path);
};
setBackground("images/background.jpeg");