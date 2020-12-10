
export class Guid {
    private static pad4(num: number): string {
        let ret: string = num.toString(16);
        while (ret.length < 4) {
            ret = '0' + ret;
        }
        return ret;
    }

    private static random4(): string {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }

    public static newGuid(): string {
        // This is not build for -prod
        // return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        //     const r = Math.random() * 16 | 0;
        //     const v = c === 'x' ? r : (r & 0x3 | 0x8);
        //     return v.toString(16);
        // });

        // If we have a cryptographically secure PRNG, use that
        if (typeof (window) !== 'undefined' &&
            typeof (window.crypto) !== 'undefined' &&
            typeof (window.crypto.getRandomValues) !== 'undefined'
        ) {
            const buf: Uint16Array = new Uint16Array(8);
            window.crypto.getRandomValues(buf);
            return (this.pad4(buf[0]) + this.pad4(buf[1]) + '-' + this.pad4(buf[2]) + '-' + this.pad4(buf[3]) + '-' +
                this.pad4(buf[4]) + '-' + this.pad4(buf[5]) + this.pad4(buf[6]) + this.pad4(buf[7]));
        } else { // Otherwise, just use Math.random
            return this.random4() + this.random4() + '-' + this.random4() + '-' + this.random4() + '-' +
                this.random4() + '-' + this.random4() + this.random4() + this.random4();
        }
    }
}

export class JsonFilter {
    ExpressionId: number;
    ComplexId: number;
    ApiName: string;
    Operation: string;
    Values: string[];
    constructor() {
        this.ExpressionId = 1;
        this.ApiName = '';
        this.Operation = '';
        this.Values = [];
    }

    initFromObj(obj: JsonFilter): void {
        if (obj) {
            this.ExpressionId = obj.ExpressionId;
            this.ApiName = obj.ApiName;
            this.Operation = obj.Operation;

            if (this.Values !== obj.Values) {
                this.Values = [];
                if (obj.Values) {
                    obj.Values.forEach((value) => this.Values.push(value));
                }
            }
        }
    }

    Valid(): boolean {
        return this.Operation !== '' && this.ApiName !== '';
    }
}

export class JsonFilters {
    leftNode: string;
    rightNode: string;
    operator: string;
    ComplexId: number;

    constructor(left = '', right = '', operator = 'AND', complexId = 2) {
        this.leftNode = left;
        this.rightNode = right;
        this.operator = operator;
        this.ComplexId = complexId;
    }

    toString(): string {
        let retVal = '';
        if (this.leftNode !== '' && this.rightNode === '') {
            retVal = this.leftNode;
        } else if (this.leftNode === '' && this.rightNode !== '') {
            retVal = this.rightNode;
        } else if (this.leftNode !== '' && this.rightNode !== '') {
            retVal = '{ "ComplexId":' + this.ComplexId + ',';
            retVal += ' "Operation":"' + this.operator + '",';
            retVal += ' "LeftNode": ' + this.leftNode + ',';
            retVal += ' "RightNode": ' + this.rightNode + '}';
        }
        return retVal;
    }
}

export enum DATE_RANGE {
    None = 0,
    InTheLast = 1,
    Today = 2,
    ThisWeek = 3,
    ThisMonth = 4,
    /*Before = 5, After = 6,*/ Between = 5,
    DueIn = 6,
    On = 7,
    NotInTheLast = 8,
    NotDueIn = 9,
    IsEmpty = 10,
    IsNotEmpty = 11,
}

export enum DATE_PERIOD {
    None = 0,
    Days = 1,
    Weeks = 2,
    Months = 3,
    Years = 4,
}

export enum DATE_RANGE_VIEWTYPE {
    None = 0,
    Period = 1,
    OneCalendar = 2,
    TwoCalendars = 3,
    NoCalendars = 4,
}

// export interface IKeyedCollection<T> {
//     Add(key: string, value: T);
//     ContainsKey(key: string): boolean;
//     Count(): number;
//     Item(key: string): T;
//     Keys(): string[];
//     Remove(key: string): T;
//     RemoveAll();
//     Values(): T[];
// }

// export class KeyedCollection<T> implements IKeyedCollection<T> {
//     private items: { [index: string]: T } = {};
//     private count: number = 0;

//     initFromObj(collection: KeyedCollection<T>) {
//         this.items = {};
//         this.count = 0;
//         const keys = [];

//         for (const prop in collection.items) {
//             if (collection.items.hasOwnProperty(prop)) {
//                 this.Add(prop, collection.items[prop]);
//             }
//         }
//     }

//     public ContainsKey(key: string): boolean {
//         return this.items.hasOwnProperty(key);
//     }

//     public Count(): number {
//         return this.count;
//     }

//     public Add(key: string, value: T) {
//         if (!this.ContainsKey(key)) {
//             this.count++;
//         }

//         this.items[key] = value;
//     }

//     public Remove(key: string): T {
//         var val = this.items[key];

//         if (this.ContainsKey(key)) {
//             delete this.items[key];
//             this.count--;
//         }

//         return val;
//     }

//     public RemoveAll() {
//         this.items = {};
//         this.count = 0;
//     }

//     public Item(key: string): T {
//         return this.items[key];
//     }

//     public Keys(): string[] {
//         var keySet: string[] = [];

//         for (var prop in this.items) {
//             if (this.items.hasOwnProperty(prop)) {
//                 keySet.push(prop);
//             }
//         }

//         return keySet;
//     }

//     public Values(): T[] {
//         var values: T[] = [];

//         for (var prop in this.items) {
//             if (this.items.hasOwnProperty(prop)) {
//                 values.push(this.items[prop]);
//             }
//         }

//         return values;
//     }
// }
