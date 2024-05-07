import { ICacheManager } from "../index";
import { createClient } from "redis";
import dotenv from "dotenv";
import { RedisDataCreator, RedisDataFetcher } from "./index";

dotenv.config();

export class RedisManager implements ICacheManager {

    private redisClient: any;

    constructor() {
        const redisURL = process.env.REDIS_URI;
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

    async create(key: string, value: any, expirationDurationInSeconds: number): Promise<boolean> {
        return new Promise((resolve, reject) => {
            try {
                RedisDataCreator.create(this.redisClient, key, value, expirationDurationInSeconds);
                resolve(true);
            } catch (err) {
                reject(err);
            }
        });
    }

    async fetch(key: string): Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                const result =  RedisDataFetcher.fetch(this.redisClient, key);
                resolve(result);
            } catch (err) {
                reject(err);
            }
        });
    }
}
