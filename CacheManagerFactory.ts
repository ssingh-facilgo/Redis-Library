import { ICacheManager, CacheUtil } from "./index";
import { RedisManager } from "./Redis/index";

export class CacheManagerFactory {
  public static getcacheManager(type: string): ICacheManager | null {
    switch (type) {
      case CacheUtil.REDIS:
        return new RedisManager();
      default:
        return null;
    }
  }
}
