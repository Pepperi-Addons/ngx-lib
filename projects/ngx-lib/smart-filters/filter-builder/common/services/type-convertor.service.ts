import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class PepTypeConvertorService {

    private _value: string;
    public get value(): string {
        return this._value;
    }
    public set value(v: string) {
        this._value = v;
    }

}