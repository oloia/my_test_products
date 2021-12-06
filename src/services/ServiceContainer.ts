import {DiContainer} from "../utils/di";
import {ServiceContainerInterface} from "./types";
import ListProductsService from "./listProducts/ListProductService";
import {ListProductsServiceInterface} from "./listProducts/types";
import {HttpClientInterface} from "./http/types";
import CmsClient from "./http/CmsClient";
import {HttpClient} from "./http";
import {SessionInterface} from "../utils/services/types";
import LocalStorageSession from "../utils/services/LocalStorageSession";

class ServiceContainer extends DiContainer implements ServiceContainerInterface {

    get session(): SessionInterface {
        return this.getInstance('session', () => new LocalStorageSession());
    }

    private get httpClient(): HttpClientInterface {
        return this.getInstance('httpClient', () => new HttpClient());
    }

    private get cmsClient(): HttpClientInterface {
        return this.getInstance('cmsClient', () => new CmsClient());
    }

    get listProductsService(): ListProductsServiceInterface {
        return this.getInstance('ListProductsService', () => new ListProductsService(this.httpClient));
    }
}

export default ServiceContainer;
