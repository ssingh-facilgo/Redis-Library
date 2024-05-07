export class RedisEventFetch {

    public static async fetch(redisClient: any, key: string): Promise<any>{
        if (redisClient?.isOpen) {
            const serializedData = await redisClient.get(key);
            return serializedData;
        }
        return null;
    }
}
