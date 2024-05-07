export interface ICacheManager {
    fetch(key: string): Promise<any>,
    create(key: string, value: any, expirationDurationInSeconds: number): Promise<any>
}
