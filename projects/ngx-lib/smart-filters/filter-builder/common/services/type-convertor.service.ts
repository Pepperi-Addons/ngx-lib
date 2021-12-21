import { Injectable } from '@angular/core';
import { IPepOption } from '@pepperi-addons/ngx-lib';

@Injectable({
    providedIn: 'root',
})
export class PepTypeConvertorService {
    private readonly _operators: IPepOption[] = [];
    private readonly _booleans: IPepOption[] = [];

    public get operators(): IPepOption[] {
        return this._operators;
    }

    public get booleans(): IPepOption[] {
        return this._booleans;
    }

    constructor() {
        this.initOperators();
        this.initBooleans();
    }

    private initOperators() {
        this._operators.push({
            key: 'AND',
            value: 'And'
        });
        this._operators.push({
            key: 'OR',
            value: 'Or'
        });
    }

    private initBooleans() {
        this._booleans.push({
            key: 'True',
            value: 'True'
        });
        this._booleans.push({
            key: 'False',
            value: 'False'
        });
    }

}