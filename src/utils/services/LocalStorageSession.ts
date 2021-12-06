import { SessionInterface } from './types';

class LocalStorageSession implements SessionInterface {
    set(name: string, value: string): void {
        sessionStorage.setItem(name, value);
    }

    get(name: string): string {
        return sessionStorage.getItem(name) || '';
    }

    has(name: string): boolean {
        return !!sessionStorage.getItem(name);
    }

    remove(name: string): void {
        return sessionStorage.removeItem(name);
    }

    clear(): void {
        return sessionStorage.clear();
    }

    read = (rootKey: string, key: string): any => {
        const root = this.has(rootKey) ? JSON.parse(this.get(rootKey)) : {};
        return root[key];
    };

    write = (rootKey: string, key: string, data: any): void => {
        const root = this.has(rootKey) ? JSON.parse(this.get(rootKey)) : {};
        root[key] = data;
        this.set(rootKey, JSON.stringify(root));
    };
}

export default LocalStorageSession;
