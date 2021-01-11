import { Injectable } from '@angular/core';
import { PepJwtHelperService } from './jwt-helper.service';

@Injectable({
    providedIn: 'root',
})
export class PepSessionService {
    private readonly IDP_TOKEN_KEY = 'idp_token';
    private readonly PAPI_BASE_URL_KEY = 'pepperi.baseurl';
    // private readonly WAPI_TOKEN_KEY = 'auth_token';
    private readonly WAPI_BASE_URL_KEY = 'serverHostURL'; // pepperi.webapibaseurl
    // private readonly PEPPERI_CONSUMER_TOKEN: 'YY2pAwx6Exo2LWXrUllF9xzSfWF53wqc';

    constructor(private jwtHelper: PepJwtHelperService) {}

    // TODO: Maybe need to move this parse into the c'tor.
    private getParseToken(): any {
        // debugger;
        // const tokenTest = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjRiYTFjNzJmMTI3NThjYzEzMzg3ZWQ3YTBiZjNlODg3IiwidHlwIjoiSldUIn0.eyJuYmYiOjE1OTY3MjU5NjksImV4cCI6MTU5NjcyNjI2OSwiaXNzIjoiaHR0cHM6Ly9pZHAuc2FuZGJveC5wZXBwZXJpLmNvbSIsImF1ZCI6InBlcHBlcmkud2ViYXBwLmFwcC5zYW5kYm94LnBlcHBlcmkuY29tIiwiaWF0IjoxNTk2NzI1OTY5LCJhdF9oYXNoIjoiSGtmRXJ0Q2JzQ3NzOTVKUm05VmJTdyIsInNpZCI6IjJkNzFiM2JiNWUyNjRiNDk2Y2JmZDkzNmYyNTNhNWIzIiwic3ViIjoiZTJkZmQ0MDYtZDM4Yy00ZmYwLThhZGItMWRlMjI3ODIzYWEyIiwiYXV0aF90aW1lIjoxNTk2NzE4ODA5LCJpZHAiOiJsb2NhbCIsIm5hbWUiOiJkYW5pZWwgZGF2aWRvZmYiLCJlbWFpbCI6ImRhbmllbC5kQHBlcHBlcml0ZXN0LmNvbSIsInBlcHBlcmkuaWQiOjg2OTAzMDQsInBlcHBlcmkudXNlcnV1aWQiOiJlMmRmZDQwNi1kMzhjLTRmZjAtOGFkYi0xZGUyMjc4MjNhYTIiLCJwZXBwZXJpLmRpc3RyaWJ1dG9yaWQiOjMwMDEyMzUxLCJwZXBwZXJpLmRpc3RyaWJ1dG9ydXVpZCI6IjBiZDBlZDc5LThlOWUtNDRmYi05NmY0LThlNTNlZDljZTgyYiIsInBlcHBlcmkuZGF0YWNlbnRlciI6InNhbmRib3giLCJwZXBwZXJpLmtlZXBsb2dpbiI6ZmFsc2UsInBlcHBlcmkuaWRsZXRpbWV3ZWIiOjEyMCwidXBkYXRlZF9hdCI6MTU5NjcwMjgwMCwiZ2l2ZW5fbmFtZSI6ImRhbmllbCIsImZhbWlseV9uYW1lIjoiZGF2aWRvZmYiLCJwZXBwZXJpLmFwaW50YmFzZXVybCI6Imh0dHBzOi8vcmVzdGFwaS5zYW5kYm94LnBlcHBlcmkuY29tIiwicGVwcGVyaS53ZWJhcGliYXNldXJsIjoiaHR0cHM6Ly93ZWJhcGkuc2FuZGJveC5wZXBwZXJpLmNvbS9WMTZfNTAvV2ViQXBwXzYiLCJwZXBwZXJpLnB1YmxpY2FwaWJhc2V1cmwiOiJodHRwczovL2FwaS1zYW5kYm94LnBlcHBlcmkuY29tIiwicGVwcGVyaS5iYXNldXJsIjoiaHR0cHM6Ly9wYXBpLnNhbmRib3gucGVwcGVyaS5jb20vVjEuMCIsInBlcHBlcmkuZW1wbG95ZWV0eXBlIjoxLCJhbXIiOlsicHdkIl19.tNtZT3Cl4dMmTQftoaO2KP5BvHOlWGIP-5GpHrAhZoymBkxBSxpKprQGqr0ATtQlNHjX3gDV1W6k_avaSkyJgDiB2hcwr1tNRilasNuMzNV93gxLC9Oh_HdkIN4cZ0hahIcJvf_17PHpS8zD_MRwvGG_i45wRYJAtiGXChxCMzooethRsLOq5TEwuNbE3MxdjZOpImGYyytmsfdsdJRWQn1LQwQBt95ssuypcUzBsVB34P5XuFttjAe9dhTwHIfgsPG-VdfAWH_r-hVe834wKpKrplSWlC_MucgS0X4XP_tN4CtLnHO2wXKPsojqSTH2NQycfqh6YvT6rzRDBEdQIQ";
        const token = this.getIdpToken();
        // token = token || tokenTest;

        const decodedToken = this.jwtHelper.decodeToken(token);
        // const expirationDate = this.jwtHelper.getTokenExpirationDate(token);
        // const isExpired = this.jwtHelper.isTokenExpired(token);

        return decodedToken;
    }

    setObject<T>(key: string, object: T): void {
        const stringifiedObject =
            typeof object === 'string' || object instanceof String
                ? object
                : JSON.stringify(object);

        sessionStorage.setItem(key, stringifiedObject.toString());
    }

    getObject<T = any>(key: string): T {
        let result = null;
        const item = sessionStorage.getItem(key);

        try {
            result = item ? (JSON.parse(item) as T) : item;
        } catch {
            result = item;
        }

        return result;
    }

    // setObject(key: string, value: string): void {
    //     sessionStorage.setItem(key, value);
    // }

    // getObject(key: string): string | null {
    //     return sessionStorage.getItem(key);
    // }

    removeObject(key: string): void {
        sessionStorage.removeItem(key);
    }

    // getWapiToken(): string {
    //     return this.getObject(this.WAPI_TOKEN_KEY);
    // }

    getWapiBaseUrl(): string {
        return this.getObject(this.WAPI_BASE_URL_KEY);
    }

    getIdpToken(): string {
        return this.getObject(this.IDP_TOKEN_KEY);
    }

    getPapiBaseUrl(): string {
        const tokenObj = this.getParseToken();
        return tokenObj ? tokenObj[this.PAPI_BASE_URL_KEY] : null;
    }
}
