import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./session.service";
import * as i2 from "../../http/services/http.service";
/*
    This service is the webapp api for addon usege.
*/
export class AddonService {
    constructor(sessionService, httpService) {
        this.sessionService = sessionService;
        this.httpService = httpService;
        this.ADDON_ASSETS_PATH_KEY = 'AddonAssetsPath';
    }
    getAddonStaticFolder() {
        // return this.assetsPath;
        return this.sessionService.getObject(this.ADDON_ASSETS_PATH_KEY) || '';
    }
    setAddonStaticFolder(path) {
        // this.assetsPath = path;
        return this.sessionService.setObject(this.ADDON_ASSETS_PATH_KEY, path);
    }
    getAddonApiCall(addonUUID, fileName, functionName, httpOptions = {}) {
        return this.httpService.getPapiApiCall(`/addons/api/${addonUUID}/${fileName}/${functionName}`, httpOptions);
    }
    postAddonApiCall(addonUUID, fileName, functionName, body = {}, httpOptions = {}) {
        return this.httpService.postPapiApiCall(`/addons/api/${addonUUID}/${fileName}/${functionName}`, body, httpOptions);
    }
}
AddonService.ɵfac = function AddonService_Factory(t) { return new (t || AddonService)(i0.ɵɵinject(i1.SessionService), i0.ɵɵinject(i2.HttpService)); };
AddonService.ɵprov = i0.ɵɵdefineInjectable({ token: AddonService, factory: AddonService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AddonService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: i1.SessionService }, { type: i2.HttpService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1saWIvc3JjL2NvcmUvY29tbW9uL3NlcnZpY2VzL2FkZG9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQUszQzs7RUFFRTtBQUlGLE1BQU0sT0FBTyxZQUFZO0lBR3JCLFlBQ1ksY0FBOEIsRUFDOUIsV0FBd0I7UUFEeEIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBSm5CLDBCQUFxQixHQUFHLGlCQUFpQixDQUFDO0lBS3hELENBQUM7SUFFSixvQkFBb0I7UUFDaEIsMEJBQTBCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQzNFLENBQUM7SUFFRCxvQkFBb0IsQ0FBQyxJQUFZO1FBQzdCLDBCQUEwQjtRQUMxQixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMzRSxDQUFDO0lBRUQsZUFBZSxDQUNYLFNBQWlCLEVBQ2pCLFFBQWdCLEVBQ2hCLFlBQW9CLEVBQ3BCLFdBQVcsR0FBRyxFQUFFO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsZUFBZSxTQUFTLElBQUksUUFBUSxJQUFJLFlBQVksRUFBRSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ2hILENBQUM7SUFFRCxnQkFBZ0IsQ0FDWixTQUFpQixFQUNqQixRQUFnQixFQUNoQixZQUFvQixFQUNwQixJQUFJLEdBQUcsRUFBRSxFQUNULFdBQVcsR0FBRyxFQUFFO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsZUFBZSxTQUFTLElBQUksUUFBUSxJQUFJLFlBQVksRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQztJQUN2SCxDQUFDOzt3RUFqQ1EsWUFBWTtvREFBWixZQUFZLFdBQVosWUFBWSxtQkFGVCxNQUFNO2tEQUVULFlBQVk7Y0FIeEIsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTZXNzaW9uU2VydmljZSB9IGZyb20gJy4vc2Vzc2lvbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSHR0cFNlcnZpY2UgfSBmcm9tICcuLi8uLi9odHRwL3NlcnZpY2VzL2h0dHAuc2VydmljZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbi8qXHJcbiAgICBUaGlzIHNlcnZpY2UgaXMgdGhlIHdlYmFwcCBhcGkgZm9yIGFkZG9uIHVzZWdlLlxyXG4qL1xyXG5ASW5qZWN0YWJsZSh7XHJcbiAgICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEFkZG9uU2VydmljZSB7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IEFERE9OX0FTU0VUU19QQVRIX0tFWSA9ICdBZGRvbkFzc2V0c1BhdGgnO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgc2Vzc2lvblNlcnZpY2U6IFNlc3Npb25TZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgaHR0cFNlcnZpY2U6IEh0dHBTZXJ2aWNlXHJcbiAgICApIHt9XHJcblxyXG4gICAgZ2V0QWRkb25TdGF0aWNGb2xkZXIoKTogc3RyaW5nIHtcclxuICAgICAgICAvLyByZXR1cm4gdGhpcy5hc3NldHNQYXRoO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNlc3Npb25TZXJ2aWNlLmdldE9iamVjdCh0aGlzLkFERE9OX0FTU0VUU19QQVRIX0tFWSkgfHwgJyc7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QWRkb25TdGF0aWNGb2xkZXIocGF0aDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgLy8gdGhpcy5hc3NldHNQYXRoID0gcGF0aDtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZXNzaW9uU2VydmljZS5zZXRPYmplY3QodGhpcy5BRERPTl9BU1NFVFNfUEFUSF9LRVksIHBhdGgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFkZG9uQXBpQ2FsbChcclxuICAgICAgICBhZGRvblVVSUQ6IHN0cmluZyxcclxuICAgICAgICBmaWxlTmFtZTogc3RyaW5nLFxyXG4gICAgICAgIGZ1bmN0aW9uTmFtZTogc3RyaW5nLFxyXG4gICAgICAgIGh0dHBPcHRpb25zID0ge30pOiBPYnNlcnZhYmxlPGFueT57XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UuZ2V0UGFwaUFwaUNhbGwoYC9hZGRvbnMvYXBpLyR7YWRkb25VVUlEfS8ke2ZpbGVOYW1lfS8ke2Z1bmN0aW9uTmFtZX1gLCBodHRwT3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgcG9zdEFkZG9uQXBpQ2FsbChcclxuICAgICAgICBhZGRvblVVSUQ6IHN0cmluZyxcclxuICAgICAgICBmaWxlTmFtZTogc3RyaW5nLFxyXG4gICAgICAgIGZ1bmN0aW9uTmFtZTogc3RyaW5nLFxyXG4gICAgICAgIGJvZHkgPSB7fSxcclxuICAgICAgICBodHRwT3B0aW9ucyA9IHt9KTogT2JzZXJ2YWJsZTxhbnk+ICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFNlcnZpY2UucG9zdFBhcGlBcGlDYWxsKGAvYWRkb25zL2FwaS8ke2FkZG9uVVVJRH0vJHtmaWxlTmFtZX0vJHtmdW5jdGlvbk5hbWV9YCwgYm9keSwgaHR0cE9wdGlvbnMpO1xyXG4gICAgfVxyXG59Il19