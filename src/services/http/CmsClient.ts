import {HttpClient} from "./index";
import {HttpClientInterface} from "./types";
import {createApiBaseUrl} from "../../config/api";


class CmsClient extends HttpClient implements HttpClientInterface {
    createEndpoint(url: string): string {
        return `${createApiBaseUrl()}${url}`;
    }
}

export default CmsClient;
