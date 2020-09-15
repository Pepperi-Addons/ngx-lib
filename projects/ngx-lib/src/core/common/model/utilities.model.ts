
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
