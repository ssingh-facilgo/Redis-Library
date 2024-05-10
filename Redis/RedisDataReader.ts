export class RedisDataReader {

    public static async read(redisClient: any, key: string): Promise<any>{
        if (redisClient?.isOpen) {
            const serializedData = await redisClient.get(key);
            return serializedData;
        }
        return null;
    }
}
