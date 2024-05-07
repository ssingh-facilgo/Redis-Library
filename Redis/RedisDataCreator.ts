export class RedisDataCreator {

    public static create(redisClient: any, key: string, data: any, expirationDurationInSeconds: number) {
        if (redisClient?.isOpen) {
            try {
                const value = JSON.stringify(data);
                redisClient.set(key, value, {EX: expirationDurationInSeconds});
            } catch (error) {
                throw error;
            }
        }
    }
}
