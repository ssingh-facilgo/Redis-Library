import { ICacheManager } from "./ICacheManager";
import { CacheManagerFactory} from "./CacheManagerFactory";

async function main() {
    
    console.log("999")
    const type: ICacheManager | null= CacheManagerFactory.getcacheManager('Redis');

    if(type){

        type.create("unit",  {
            "id": 12,
            "name": "101",
            "vacancy_status": "Vacant",
            "property": {
                "id": 123,
                "name": "550 Ellis Street",
                "code": "550ELLI",
                "source": "Facilgo",
                "address": {
                    "id": 116,
                    "address1": "San Francisco",
                    "address2": "Secondary_Address",
                    "city": "City",
                    "state": "AK",
                    "zip": "9419"
                }
            }
        }, 10);

        const result = await type.fetch('chandan');

        console.log("Value of insert in redis is ", result);

    }
}

main().catch(err => console.error(err));
