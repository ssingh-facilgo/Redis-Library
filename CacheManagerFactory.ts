import { ICacheManager, CacheManager } from "./index";
import { RedisManager } from "./Redis/index";

export class CacheManagerFactory {
  public static getcacheManager(type: string, url: any): ICacheManager | null {
    switch (type) {
      case CacheManager.REDIS:
        return new RedisManager(url);
      default:
        return null;
    }
  }
}
