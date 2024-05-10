import { expirationDuration } from "../Util";

export class RedisDataWriter {

    public static write(redisClient: any, key: string, data: any, expirationDurationInSeconds?: number) {
        if (redisClient?.isOpen) {
            try {
                const value = JSON.stringify(data);
                const expDuration = expirationDurationInSeconds ?? expirationDuration.seconds;
                redisClient.set(key, value, { EX: expDuration });
            } catch (error) {
                throw error;
            }
        }
    }
}
