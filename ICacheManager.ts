export type ICacheManager = {
    read(key: string): Promise<any>,
    write(key: string, value: any, expirationDurationInSeconds?: number): Promise<boolean>
}
