import {
    Injectable,
    Inject,
    PLATFORM_ID,
    InjectionToken,
    Optional,
} from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

@Injectable({
    providedIn: 'root',
})
export class PepCookieService {
    private readonly documentIsAccessible: boolean;

    constructor(
        @Optional() @Inject(DOCUMENT) private document: any,
        @Inject(PLATFORM_ID) private platformId: InjectionToken<object>
    ) {
        this.documentIsAccessible = isPlatformBrowser(this.platformId);
    }

    /**
     * @param name Cookie name
     * @returns boolean - whether cookie with specified name exists
     */
    check(name: string): boolean {
        if (!this.documentIsAccessible) {
            return false;
        }

        name = encodeURIComponent(name);

        const regExp: RegExp = this.getCookieRegExp(name);
        const exists: boolean = regExp.test(this.document.cookie);

        return exists;
    }

    /**
     * @param name Cookie name
     * @returns property value
     */
    get(name: string): string {
        if (this.documentIsAccessible && this.check(name)) {
            name = encodeURIComponent(name);

            const regExp: RegExp = this.getCookieRegExp(name);
            const result: RegExpExecArray = regExp.exec(this.document.cookie);

            return this.safeDecodeURIComponent(result[1]);
        } else {
            return '';
        }
    }

    /**
     * @returns all the cookies in json
     */
    getAll(): { [key: string]: string } {
        if (!this.documentIsAccessible) {
            return {};
        }

        const cookies: { [key: string]: string } = {};
        const document: any = this.document;

        if (document.cookie && document.cookie !== '') {
            document.cookie.split(';').forEach((currentCookie) => {
                const [cookieName, cookieValue] = currentCookie.split('=');
                cookies[
                    this.safeDecodeURIComponent(cookieName.replace(/^ /, ''))
                ] = this.safeDecodeURIComponent(cookieValue);
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
    set(
        name: string,
        value: string,
        expires?: number | Date,
        path?: string,
        domain?: string,
        secure?: boolean,
        sameSite: 'Lax' | 'None' | 'Strict' = 'Lax'
    ): void {
        if (!this.documentIsAccessible) {
            return;
        }

        let cookieString: string =
            encodeURIComponent(name) + '=' + encodeURIComponent(value) + ';';

        if (expires) {
            if (typeof expires === 'number') {
                const dateExpires: Date = new Date(
                    new Date().getTime() + expires * 1000 * 60 * 60 * 24
                );

                cookieString += 'expires=' + dateExpires.toUTCString() + ';';
            } else {
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
    delete(
        name: string,
        path?: string,
        domain?: string,
        secure?: boolean,
        sameSite: 'Lax' | 'None' | 'Strict' = 'Lax'
    ): void {
        if (!this.documentIsAccessible) {
            return;
        }

        this.set(
            name,
            '',
            new Date('Thu, 01 Jan 1970 00:00:01 GMT'),
            path,
            domain,
            secure,
            sameSite
        );
    }

    /**
     * @param path   Cookie path
     * @param domain Cookie domain
     */
    deleteAll(
        path?: string,
        domain?: string,
        secure?: boolean,
        sameSite: 'Lax' | 'None' | 'Strict' = 'Lax'
    ): void {
        if (!this.documentIsAccessible) {
            return;
        }

        const cookies: any = this.getAll();

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
    private getCookieRegExp(name: string): RegExp {
        const escapedName: string = name.replace(
            /([\[\]\{\}\(\)\|\=\;\+\?\,\.\*\^\$])/gi,
            '\\$1'
        );

        return new RegExp(
            '(?:^' + escapedName + '|;\\s*' + escapedName + ')=(.*?)(?:;|$)',
            'g'
        );
    }

    private safeDecodeURIComponent(encodedURIComponent: string): string {
        try {
            return decodeURIComponent(encodedURIComponent);
        } catch {
            // probably it is not uri encoded. return as is
            return encodedURIComponent;
        }
    }
}
