import { IPepOption } from '@pepperi-addons/ngx-lib';

export enum PepOperatorTypes {
    And = 'AND',
    Or = 'OR'
}

export class PepOperatorMapper {
    static _operators: IPepOption[] = [];

    private static loadOperators = (() => {
        PepOperatorMapper._operators.push(
            {
                key: 'AND',
                value: 'And'
            });
        PepOperatorMapper._operators.push(
            {
                key: 'OR',
                value: 'Or'
            });
    })();

    static getAll() {
        return this._operators;
    }

    static get(key) {
        return this._operators.find(operator => operator.key === key);
    }
}



