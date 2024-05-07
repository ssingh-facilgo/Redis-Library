export class RedisEventCreate {

    public static create(redisClient: any, key: string, data: any, expirationDurationInSeconds: number) {
        if (redisClient?.isOpen) {
            try {
                const stringKey = String(key);
                const serializedData = JSON.stringify(data);
                redisClient.set(stringKey, serializedData, {EX: expirationDurationInSeconds});
            } catch (error) {
                throw error;
            }
        }
    }
}
