import { Injectable, Inject, PLATFORM_ID, Optional } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import * as i0 from "@angular/core";
export class CookieService {
    constructor(document, platformId) {
        this.document = document;
        this.platformId = platformId;
        this.documentIsAccessible = isPlatformBrowser(this.platformId);
    }
    /**
     * @param name Cookie name
     * @returns boolean - whether cookie with specified name exists
     */
    check(name) {
        if (!this.documentIsAccessible) {
            return false;
        }
        name = encodeURIComponent(name);
        const regExp = this.getCookieRegExp(name);
        const exists = regExp.test(this.document.cookie);
        return exists;
    }
    /**
     * @param name Cookie name
     * @returns property value
     */
    get(name) {
        if (this.documentIsAccessible && this.check(name)) {
            name = encodeURIComponent(name);
            const regExp = this.getCookieRegExp(name);
            const result = regExp.exec(this.document.cookie);
            return this.safeDecodeURIComponent(result[1]);
        }
        else {
            return '';
        }
    }
    /**
     * @returns all the cookies in json
     */
    getAll() {
        if (!this.documentIsAccessible) {
            return {};
        }
        const cookies = {};
        const document = this.document;
        if (document.cookie && document.cookie !== '') {
            document.cookie.split(';').forEach((currentCookie) => {
                const [cookieName, cookieValue] = currentCookie.split('=');
                cookies[this.safeDecodeURIComponent(cookieName.replace(/^ /, ''))] = this.safeDecodeURIComponent(cookieValue);
            });
        }
        return cookies;
    }
    /**
     * @param name     Cookie name
     * @param value    Cookie value
     * @param expires  Number of days until the cookies expires or an actual `Date`
     * @param path     Cookie path
     * @param domain   Cookie domain
     * @param secure   Secure flag
     * @param sameSite OWASP samesite token `Lax`, `None`, or `Strict`. Defaults to `Lax`
     */
    set(name, value, expires, path, domain, secure, sameSite = 'Lax') {
        if (!this.documentIsAccessible) {
            return;
        }
        let cookieString = encodeURIComponent(name) + '=' + encodeURIComponent(value) + ';';
        if (expires) {
            if (typeof expires === 'number') {
                const dateExpires = new Date(new Date().getTime() + expires * 1000 * 60 * 60 * 24);
                cookieString += 'expires=' + dateExpires.toUTCString() + ';';
            }
            else {
                cookieString += 'expires=' + expires.toUTCString() + ';';
            }
        }
        if (path) {
            cookieString += 'path=' + path + ';';
        }
        if (domain) {
            cookieString += 'domain=' + domain + ';';
        }
        if (secure === false && sameSite === 'None') {
            secure = true;
        }
        if (secure) {
            cookieString += 'secure;';
        }
        cookieString += 'sameSite=' + sameSite + ';';
        this.document.cookie = cookieString;
    }
    /**
     * @param name   Cookie name
     * @param path   Cookie path
     * @param domain Cookie domain
     */
    delete(name, path, domain, secure, sameSite = 'Lax') {
        if (!this.documentIsAccessible) {
            return;
        }
        this.set(name, '', new Date('Thu, 01 Jan 1970 00:00:01 GMT'), path, domain, secure, sameSite);
    }
    /**
     * @param path   Cookie path
     * @param domain Cookie domain
     */
    deleteAll(path, domain, secure, sameSite = 'Lax') {
        if (!this.documentIsAccessible) {
            return;
        }
        const cookies = this.getAll();
        for (const cookieName in cookies) {
            if (cookies.hasOwnProperty(cookieName)) {
                this.delete(cookieName, path, domain, secure, sameSite);
            }
        }
    }
    /**
     * @param name Cookie name
     * @returns property RegExp
     */
    getCookieRegExp(name) {
        const escapedName = name.replace(/([\[\]\{\}\(\)\|\=\;\+\?\,\.\*\^\$])/gi, '\\$1');
        return new RegExp('(?:^' + escapedName + '|;\\s*' + escapedName + ')=(.*?)(?:;|$)', 'g');
    }
    safeDecodeURIComponent(encodedURIComponent) {
        try {
            return decodeURIComponent(encodedURIComponent);
        }
        catch (_a) {
            // probably it is not uri encoded. return as is
            return encodedURIComponent;
        }
    }
}
CookieService.ɵfac = function CookieService_Factory(t) { return new (t || CookieService)(i0.ɵɵinject(DOCUMENT, 8), i0.ɵɵinject(PLATFORM_ID)); };
CookieService.ɵprov = i0.ɵɵdefineInjectable({ token: CookieService, factory: CookieService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CookieService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: i0.InjectionToken, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29va2llLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbGliL3NyYy9jb3JlL2NvbW1vbi9zZXJ2aWNlcy9jb29raWUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQWtCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxRixPQUFPLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBSzlELE1BQU0sT0FBTyxhQUFhO0lBR3RCLFlBQzBDLFFBQWEsRUFDdEIsVUFBa0M7UUFEekIsYUFBUSxHQUFSLFFBQVEsQ0FBSztRQUN0QixlQUFVLEdBQVYsVUFBVSxDQUF3QjtRQUUvRCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFRDs7O09BR0c7SUFDSCxLQUFLLENBQUMsSUFBWTtRQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUU7WUFDNUIsT0FBTyxLQUFLLENBQUM7U0FDaEI7UUFFRCxJQUFJLEdBQUcsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFaEMsTUFBTSxNQUFNLEdBQVcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsRCxNQUFNLE1BQU0sR0FBWSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFMUQsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUVEOzs7T0FHRztJQUNILEdBQUcsQ0FBQyxJQUFZO1FBQ1osSUFBSSxJQUFJLENBQUMsb0JBQW9CLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUMvQyxJQUFJLEdBQUcsa0JBQWtC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O1lBQ0osK0NBQStDO1lBQy9DLE9BQU8sbUJBQW1CLENBQUM7U0FDOUI7SUFDTCxDQUFDOzswRUF2S1EsYUFBYSxjQUlFLFFBQVEsa0JBQ3BCLFdBQVc7cURBTGQsYUFBYSxXQUFiLGFBQWEsbUJBRlosTUFBTTtrREFFUCxhQUFhO2NBSHpCLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7c0JBS1EsUUFBUTs7c0JBQUksTUFBTTt1QkFBQyxRQUFROztzQkFDM0IsTUFBTTt1QkFBQyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0LCBQTEFURk9STV9JRCwgSW5qZWN0aW9uVG9rZW4sIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERPQ1VNRU5ULCBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29va2llU2VydmljZSB7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGRvY3VtZW50SXNBY2Nlc3NpYmxlOiBib29sZWFuO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIEBPcHRpb25hbCgpIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSxcclxuICAgICAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtSWQ6IEluamVjdGlvblRva2VuPG9iamVjdD5cclxuICAgICkge1xyXG4gICAgICAgIHRoaXMuZG9jdW1lbnRJc0FjY2Vzc2libGUgPSBpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIG5hbWUgQ29va2llIG5hbWVcclxuICAgICAqIEByZXR1cm5zIGJvb2xlYW4gLSB3aGV0aGVyIGNvb2tpZSB3aXRoIHNwZWNpZmllZCBuYW1lIGV4aXN0c1xyXG4gICAgICovXHJcbiAgICBjaGVjayhuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAoIXRoaXMuZG9jdW1lbnRJc0FjY2Vzc2libGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmFtZSA9IGVuY29kZVVSSUNvbXBvbmVudChuYW1lKTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVnRXhwOiBSZWdFeHAgPSB0aGlzLmdldENvb2tpZVJlZ0V4cChuYW1lKTtcclxuICAgICAgICBjb25zdCBleGlzdHM6IGJvb2xlYW4gPSByZWdFeHAudGVzdCh0aGlzLmRvY3VtZW50LmNvb2tpZSk7XHJcblxyXG4gICAgICAgIHJldHVybiBleGlzdHM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBDb29raWUgbmFtZVxyXG4gICAgICogQHJldHVybnMgcHJvcGVydHkgdmFsdWVcclxuICAgICAqL1xyXG4gICAgZ2V0KG5hbWU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKHRoaXMuZG9jdW1lbnRJc0FjY2Vzc2libGUgJiYgdGhpcy5jaGVjayhuYW1lKSkge1xyXG4gICAgICAgICAgICBuYW1lID0gZW5jb2RlVVJJQ29tcG9uZW50KG5hbWUpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcmVnRXhwOiBSZWdFeHAgPSB0aGlzLmdldENvb2tpZVJlZ0V4cChuYW1lKTtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0OiBSZWdFeHBFeGVjQXJyYXkgPSByZWdFeHAuZXhlYyh0aGlzLmRvY3VtZW50LmNvb2tpZSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zYWZlRGVjb2RlVVJJQ29tcG9uZW50KHJlc3VsdFsxXSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEByZXR1cm5zIGFsbCB0aGUgY29va2llcyBpbiBqc29uXHJcbiAgICAgKi9cclxuICAgIGdldEFsbCgpOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHtcclxuICAgICAgICBpZiAoIXRoaXMuZG9jdW1lbnRJc0FjY2Vzc2libGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHt9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgY29va2llczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xyXG4gICAgICAgIGNvbnN0IGRvY3VtZW50OiBhbnkgPSB0aGlzLmRvY3VtZW50O1xyXG5cclxuICAgICAgICBpZiAoZG9jdW1lbnQuY29va2llICYmIGRvY3VtZW50LmNvb2tpZSAhPT0gJycpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuY29va2llLnNwbGl0KCc7JykuZm9yRWFjaCgoY3VycmVudENvb2tpZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgW2Nvb2tpZU5hbWUsIGNvb2tpZVZhbHVlXSA9IGN1cnJlbnRDb29raWUuc3BsaXQoJz0nKTtcclxuICAgICAgICAgICAgICAgIGNvb2tpZXNbdGhpcy5zYWZlRGVjb2RlVVJJQ29tcG9uZW50KGNvb2tpZU5hbWUucmVwbGFjZSgvXiAvLCAnJykpXSA9IHRoaXMuc2FmZURlY29kZVVSSUNvbXBvbmVudChjb29raWVWYWx1ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGNvb2tpZXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0gbmFtZSAgICAgQ29va2llIG5hbWVcclxuICAgICAqIEBwYXJhbSB2YWx1ZSAgICBDb29raWUgdmFsdWVcclxuICAgICAqIEBwYXJhbSBleHBpcmVzICBOdW1iZXIgb2YgZGF5cyB1bnRpbCB0aGUgY29va2llcyBleHBpcmVzIG9yIGFuIGFjdHVhbCBgRGF0ZWBcclxuICAgICAqIEBwYXJhbSBwYXRoICAgICBDb29raWUgcGF0aFxyXG4gICAgICogQHBhcmFtIGRvbWFpbiAgIENvb2tpZSBkb21haW5cclxuICAgICAqIEBwYXJhbSBzZWN1cmUgICBTZWN1cmUgZmxhZ1xyXG4gICAgICogQHBhcmFtIHNhbWVTaXRlIE9XQVNQIHNhbWVzaXRlIHRva2VuIGBMYXhgLCBgTm9uZWAsIG9yIGBTdHJpY3RgLiBEZWZhdWx0cyB0byBgTGF4YFxyXG4gICAgICovXHJcbiAgICBzZXQoXHJcbiAgICAgICAgbmFtZTogc3RyaW5nLFxyXG4gICAgICAgIHZhbHVlOiBzdHJpbmcsXHJcbiAgICAgICAgZXhwaXJlcz86IG51bWJlciB8IERhdGUsXHJcbiAgICAgICAgcGF0aD86IHN0cmluZyxcclxuICAgICAgICBkb21haW4/OiBzdHJpbmcsXHJcbiAgICAgICAgc2VjdXJlPzogYm9vbGVhbixcclxuICAgICAgICBzYW1lU2l0ZTogJ0xheCcgfCAnTm9uZScgfCAnU3RyaWN0JyA9ICdMYXgnXHJcbiAgICApOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuZG9jdW1lbnRJc0FjY2Vzc2libGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGNvb2tpZVN0cmluZzogc3RyaW5nID0gZW5jb2RlVVJJQ29tcG9uZW50KG5hbWUpICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSArICc7JztcclxuXHJcbiAgICAgICAgaWYgKGV4cGlyZXMpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBleHBpcmVzID09PSAnbnVtYmVyJykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0ZUV4cGlyZXM6IERhdGUgPSBuZXcgRGF0ZShuZXcgRGF0ZSgpLmdldFRpbWUoKSArIGV4cGlyZXMgKiAxMDAwICogNjAgKiA2MCAqIDI0KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb29raWVTdHJpbmcgKz0gJ2V4cGlyZXM9JyArIGRhdGVFeHBpcmVzLnRvVVRDU3RyaW5nKCkgKyAnOyc7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb29raWVTdHJpbmcgKz0gJ2V4cGlyZXM9JyArIGV4cGlyZXMudG9VVENTdHJpbmcoKSArICc7JztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHBhdGgpIHtcclxuICAgICAgICAgICAgY29va2llU3RyaW5nICs9ICdwYXRoPScgKyBwYXRoICsgJzsnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGRvbWFpbikge1xyXG4gICAgICAgIGNvb2tpZVN0cmluZyArPSAnZG9tYWluPScgKyBkb21haW4gKyAnOyc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc2VjdXJlID09PSBmYWxzZSAmJiBzYW1lU2l0ZSA9PT0gJ05vbmUnKSB7XHJcbiAgICAgICAgICAgIHNlY3VyZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzZWN1cmUpIHtcclxuICAgICAgICAgICAgY29va2llU3RyaW5nICs9ICdzZWN1cmU7JztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvb2tpZVN0cmluZyArPSAnc2FtZVNpdGU9JyArIHNhbWVTaXRlICsgJzsnO1xyXG5cclxuICAgICAgICB0aGlzLmRvY3VtZW50LmNvb2tpZSA9IGNvb2tpZVN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSBuYW1lICAgQ29va2llIG5hbWVcclxuICAgICAqIEBwYXJhbSBwYXRoICAgQ29va2llIHBhdGhcclxuICAgICAqIEBwYXJhbSBkb21haW4gQ29va2llIGRvbWFpblxyXG4gICAgICovXHJcbiAgICBkZWxldGUobmFtZTogc3RyaW5nLCBwYXRoPzogc3RyaW5nLCBkb21haW4/OiBzdHJpbmcsIHNlY3VyZT86IGJvb2xlYW4sIHNhbWVTaXRlOiAnTGF4JyB8ICdOb25lJyB8ICdTdHJpY3QnID0gJ0xheCcpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuZG9jdW1lbnRJc0FjY2Vzc2libGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZXQobmFtZSwgJycsIG5ldyBEYXRlKCdUaHUsIDAxIEphbiAxOTcwIDAwOjAwOjAxIEdNVCcpLCBwYXRoLCBkb21haW4sIHNlY3VyZSwgc2FtZVNpdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHBhdGggICBDb29raWUgcGF0aFxyXG4gICAgICogQHBhcmFtIGRvbWFpbiBDb29raWUgZG9tYWluXHJcbiAgICAgKi9cclxuICAgIGRlbGV0ZUFsbChwYXRoPzogc3RyaW5nLCBkb21haW4/OiBzdHJpbmcsIHNlY3VyZT86IGJvb2xlYW4sIHNhbWVTaXRlOiAnTGF4JyB8ICdOb25lJyB8ICdTdHJpY3QnID0gJ0xheCcpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMuZG9jdW1lbnRJc0FjY2Vzc2libGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgY29va2llczogYW55ID0gdGhpcy5nZXRBbGwoKTtcclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBjb29raWVOYW1lIGluIGNvb2tpZXMpIHtcclxuICAgICAgICAgICAgaWYgKGNvb2tpZXMuaGFzT3duUHJvcGVydHkoY29va2llTmFtZSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlKGNvb2tpZU5hbWUsIHBhdGgsIGRvbWFpbiwgc2VjdXJlLCBzYW1lU2l0ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBDb29raWUgbmFtZVxyXG4gICAgICogQHJldHVybnMgcHJvcGVydHkgUmVnRXhwXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgZ2V0Q29va2llUmVnRXhwKG5hbWU6IHN0cmluZyk6IFJlZ0V4cCB7XHJcbiAgICAgICAgY29uc3QgZXNjYXBlZE5hbWU6IHN0cmluZyA9IG5hbWUucmVwbGFjZSgvKFtcXFtcXF1cXHtcXH1cXChcXClcXHxcXD1cXDtcXCtcXD9cXCxcXC5cXCpcXF5cXCRdKS9naSwgJ1xcXFwkMScpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cCgnKD86XicgKyBlc2NhcGVkTmFtZSArICd8O1xcXFxzKicgKyBlc2NhcGVkTmFtZSArICcpPSguKj8pKD86O3wkKScsICdnJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzYWZlRGVjb2RlVVJJQ29tcG9uZW50KGVuY29kZWRVUklDb21wb25lbnQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChlbmNvZGVkVVJJQ29tcG9uZW50KTtcclxuICAgICAgICB9IGNhdGNoIHtcclxuICAgICAgICAgICAgLy8gcHJvYmFibHkgaXQgaXMgbm90IHVyaSBlbmNvZGVkLiByZXR1cm4gYXMgaXNcclxuICAgICAgICAgICAgcmV0dXJuIGVuY29kZWRVUklDb21wb25lbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==