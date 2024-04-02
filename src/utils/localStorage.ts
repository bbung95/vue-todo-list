export const getStorage = <T>(key: string): Array<T> => {
    return JSON.parse(localStorage.getItem(key) ?? "[]");
};

export const setStorage = (key: string, value: unknown) => {
    localStorage.setItem(key, JSON.stringify(value));
};
