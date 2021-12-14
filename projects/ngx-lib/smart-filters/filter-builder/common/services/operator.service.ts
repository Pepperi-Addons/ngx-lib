import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class PepOperatorService {
    private _operators: Map<string, string>;

    constructor() {
        this.loadOperators();
    }

    loadOperators() {
        this._operators = new Map<string, string>();
        this._operators.set('AND', 'And');
        this._operators.set('OR', 'Or');
    }

    getAll() {
        console.log('get all', this._operators.keys());
        return [...this._operators.values()];
    }

    get(id: string) {
        return this._operators.get(id);
    }
}