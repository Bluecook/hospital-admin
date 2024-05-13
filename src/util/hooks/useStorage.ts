type StorageUtils = {
    getItem: <T>(key: string) => T | undefined;
    setItem: <T>(key: string, value: T, expires?: number) => void;
    removeItem: (key: string) => void;
};

// 重新封装 localStorage  
export const useStorage = (): StorageUtils => {
    const getItem = <T>(key: string): T | undefined => {
        const itemStr = localStorage.getItem(key);
        if (!itemStr) return undefined;

        const item = JSON.parse(itemStr);
        const now = new Date();
        if (item.expires && now.getTime() > item.expires) {
            removeItem(key); // 删除过期的项  
            return undefined;
        }
        return item.value;
    };

    const setItem = <T>(key: string, value: T, expires?: number): void => {
        if (expires) {
            const now = new Date();
            const expireTime = new Date(now.getTime() + expires * 1000); // 过期时间戳  
            localStorage.setItem(key, JSON.stringify({
                value,
                expires: expireTime.getTime()
            }));
        } else {
            localStorage.setItem(key, JSON.stringify(value));
        }
    };

    const removeItem = (key: string) => localStorage.removeItem(key);

    return {
        getItem,
        setItem,
        removeItem
    };
};