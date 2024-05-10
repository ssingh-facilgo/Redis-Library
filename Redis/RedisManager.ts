import { ICacheManager } from "../index";
import { createClient } from "redis";
import { RedisDataWriter, RedisDataReader } from "./index";

export class RedisManager implements ICacheManager {

    private redisClient: any;

    constructor(redisURL: any) {
        if (redisURL) {
            this.redisClient = createClient({ url: redisURL });
            this.redisClient.on("error", (error: any) => {
                throw error;
            });

            try {
                this.redisClient.connect();
                console.log(`Connected to Redis successfully!`);
            } catch (error) {
                throw error;
            }
        }
    }

    async write(key: string, value: any, expirationDurationInSeconds?: number): Promise<boolean> {
        return new Promise((resolve, reject) => {
            try {
                RedisDataWriter.write(this.redisClient, key, value, expirationDurationInSeconds);
                resolve(true);
            } catch (err) {
                reject(err);
            }
        });
    }

    async read(key: string): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                const result = RedisDataReader.read(this.redisClient, key);
                resolve(result);
            } catch (err) {
                reject(err);
            }
        });
    }
}
