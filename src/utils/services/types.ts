export interface SessionInterface {
    set(name: string, value: string): void;

    get(name: string): string;

    has(name: string): boolean;

    remove(name: string): void;

    clear(): void;

    write(rootKey: string, key: string, data: any): void;
}
