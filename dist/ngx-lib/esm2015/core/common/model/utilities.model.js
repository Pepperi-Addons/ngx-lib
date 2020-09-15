export class Guid {
    static pad4(num) {
        let ret = num.toString(16);
        while (ret.length < 4) {
            ret = '0' + ret;
        }
        return ret;
    }
    static random4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    static newGuid() {
        // This is not build for -prod
        // return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        //     const r = Math.random() * 16 | 0;
        //     const v = c === 'x' ? r : (r & 0x3 | 0x8);
        //     return v.toString(16);
        // });
        // If we have a cryptographically secure PRNG, use that
        if (typeof (window) !== 'undefined' &&
            typeof (window.crypto) !== 'undefined' &&
            typeof (window.crypto.getRandomValues) !== 'undefined') {
            const buf = new Uint16Array(8);
            window.crypto.getRandomValues(buf);
            return (this.pad4(buf[0]) + this.pad4(buf[1]) + '-' + this.pad4(buf[2]) + '-' + this.pad4(buf[3]) + '-' +
                this.pad4(buf[4]) + '-' + this.pad4(buf[5]) + this.pad4(buf[6]) + this.pad4(buf[7]));
        }
        else { // Otherwise, just use Math.random
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbGl0aWVzLm1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWxpYi9zcmMvY29yZS9jb21tb24vbW9kZWwvdXRpbGl0aWVzLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE1BQU0sT0FBTyxJQUFJO0lBQ0wsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFXO1FBQzNCLElBQUksR0FBRyxHQUFXLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbkMsT0FBTyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNuQixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztTQUNuQjtRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQztJQUVPLE1BQU0sQ0FBQyxPQUFPO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUM7YUFDM0MsUUFBUSxDQUFDLEVBQUUsQ0FBQzthQUNaLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBRU0sTUFBTSxDQUFDLE9BQU87UUFDakIsOEJBQThCO1FBQzlCLDBFQUEwRTtRQUMxRSx3Q0FBd0M7UUFDeEMsaURBQWlEO1FBQ2pELDZCQUE2QjtRQUM3QixNQUFNO1FBRU4sdURBQXVEO1FBQ3ZELElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLFdBQVc7WUFDL0IsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxXQUFXO1lBQ3RDLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxLQUFLLFdBQVcsRUFDeEQ7WUFDRSxNQUFNLEdBQUcsR0FBZ0IsSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbkMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHO2dCQUNuRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzVGO2FBQU0sRUFBRSxrQ0FBa0M7WUFDdkMsT0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxHQUFHO2dCQUN0RixJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQy9FO0lBQ0wsQ0FBQztDQUNKO0FBR0QseUNBQXlDO0FBQ3pDLGtDQUFrQztBQUNsQyx5Q0FBeUM7QUFDekMsdUJBQXVCO0FBQ3ZCLDRCQUE0QjtBQUM1Qix3QkFBd0I7QUFDeEIsOEJBQThCO0FBQzlCLG1CQUFtQjtBQUNuQixxQkFBcUI7QUFDckIsSUFBSTtBQUVKLG1FQUFtRTtBQUNuRSxrREFBa0Q7QUFDbEQsaUNBQWlDO0FBRWpDLG9EQUFvRDtBQUNwRCwyQkFBMkI7QUFDM0IsMEJBQTBCO0FBQzFCLDJCQUEyQjtBQUUzQixpREFBaUQ7QUFDakQsMkRBQTJEO0FBQzNELDBEQUEwRDtBQUMxRCxnQkFBZ0I7QUFDaEIsWUFBWTtBQUNaLFFBQVE7QUFFUixpREFBaUQ7QUFDakQsaURBQWlEO0FBQ2pELFFBQVE7QUFFUiwrQkFBK0I7QUFDL0IsNkJBQTZCO0FBQzdCLFFBQVE7QUFFUiwwQ0FBMEM7QUFDMUMsd0NBQXdDO0FBQ3hDLDRCQUE0QjtBQUM1QixZQUFZO0FBRVosbUNBQW1DO0FBQ25DLFFBQVE7QUFFUixzQ0FBc0M7QUFDdEMscUNBQXFDO0FBRXJDLHVDQUF1QztBQUN2QyxzQ0FBc0M7QUFDdEMsNEJBQTRCO0FBQzVCLFlBQVk7QUFFWixzQkFBc0I7QUFDdEIsUUFBUTtBQUVSLDJCQUEyQjtBQUMzQiwyQkFBMkI7QUFDM0IsMEJBQTBCO0FBQzFCLFFBQVE7QUFFUixvQ0FBb0M7QUFDcEMsa0NBQWtDO0FBQ2xDLFFBQVE7QUFFUixnQ0FBZ0M7QUFDaEMscUNBQXFDO0FBRXJDLHlDQUF5QztBQUN6QyxxREFBcUQ7QUFDckQscUNBQXFDO0FBQ3JDLGdCQUFnQjtBQUNoQixZQUFZO0FBRVoseUJBQXlCO0FBQ3pCLFFBQVE7QUFFUiw2QkFBNkI7QUFDN0IsZ0NBQWdDO0FBRWhDLHlDQUF5QztBQUN6QyxxREFBcUQ7QUFDckQsaURBQWlEO0FBQ2pELGdCQUFnQjtBQUNoQixZQUFZO0FBRVoseUJBQXlCO0FBQ3pCLFFBQVE7QUFDUixJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmV4cG9ydCBjbGFzcyBHdWlkIHtcclxuICAgIHByaXZhdGUgc3RhdGljIHBhZDQobnVtOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCByZXQ6IHN0cmluZyA9IG51bS50b1N0cmluZygxNik7XHJcbiAgICAgICAgd2hpbGUgKHJldC5sZW5ndGggPCA0KSB7XHJcbiAgICAgICAgICAgIHJldCA9ICcwJyArIHJldDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyByYW5kb200KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoKDEgKyBNYXRoLnJhbmRvbSgpKSAqIDB4MTAwMDApXHJcbiAgICAgICAgICAgIC50b1N0cmluZygxNilcclxuICAgICAgICAgICAgLnN1YnN0cmluZygxKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIG5ld0d1aWQoKTogc3RyaW5nIHtcclxuICAgICAgICAvLyBUaGlzIGlzIG5vdCBidWlsZCBmb3IgLXByb2RcclxuICAgICAgICAvLyByZXR1cm4gJ3h4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eCcucmVwbGFjZSgvW3h5XS9nLCAoYykgPT4ge1xyXG4gICAgICAgIC8vICAgICBjb25zdCByID0gTWF0aC5yYW5kb20oKSAqIDE2IHwgMDtcclxuICAgICAgICAvLyAgICAgY29uc3QgdiA9IGMgPT09ICd4JyA/IHIgOiAociAmIDB4MyB8IDB4OCk7XHJcbiAgICAgICAgLy8gICAgIHJldHVybiB2LnRvU3RyaW5nKDE2KTtcclxuICAgICAgICAvLyB9KTtcclxuXHJcbiAgICAgICAgLy8gSWYgd2UgaGF2ZSBhIGNyeXB0b2dyYXBoaWNhbGx5IHNlY3VyZSBQUk5HLCB1c2UgdGhhdFxyXG4gICAgICAgIGlmICh0eXBlb2YgKHdpbmRvdykgIT09ICd1bmRlZmluZWQnICYmXHJcbiAgICAgICAgICAgIHR5cGVvZiAod2luZG93LmNyeXB0bykgIT09ICd1bmRlZmluZWQnICYmXHJcbiAgICAgICAgICAgIHR5cGVvZiAod2luZG93LmNyeXB0by5nZXRSYW5kb21WYWx1ZXMpICE9PSAndW5kZWZpbmVkJ1xyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBjb25zdCBidWY6IFVpbnQxNkFycmF5ID0gbmV3IFVpbnQxNkFycmF5KDgpO1xyXG4gICAgICAgICAgICB3aW5kb3cuY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhidWYpO1xyXG4gICAgICAgICAgICByZXR1cm4gKHRoaXMucGFkNChidWZbMF0pICsgdGhpcy5wYWQ0KGJ1ZlsxXSkgKyAnLScgKyB0aGlzLnBhZDQoYnVmWzJdKSArICctJyArIHRoaXMucGFkNChidWZbM10pICsgJy0nICtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFkNChidWZbNF0pICsgJy0nICsgdGhpcy5wYWQ0KGJ1Zls1XSkgKyB0aGlzLnBhZDQoYnVmWzZdKSArIHRoaXMucGFkNChidWZbN10pKTtcclxuICAgICAgICB9IGVsc2UgeyAvLyBPdGhlcndpc2UsIGp1c3QgdXNlIE1hdGgucmFuZG9tXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJhbmRvbTQoKSArIHRoaXMucmFuZG9tNCgpICsgJy0nICsgdGhpcy5yYW5kb200KCkgKyAnLScgKyB0aGlzLnJhbmRvbTQoKSArICctJyArXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJhbmRvbTQoKSArICctJyArIHRoaXMucmFuZG9tNCgpICsgdGhpcy5yYW5kb200KCkgKyB0aGlzLnJhbmRvbTQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vLyBleHBvcnQgaW50ZXJmYWNlIElLZXllZENvbGxlY3Rpb248VD4ge1xyXG4vLyAgICAgQWRkKGtleTogc3RyaW5nLCB2YWx1ZTogVCk7XHJcbi8vICAgICBDb250YWluc0tleShrZXk6IHN0cmluZyk6IGJvb2xlYW47XHJcbi8vICAgICBDb3VudCgpOiBudW1iZXI7XHJcbi8vICAgICBJdGVtKGtleTogc3RyaW5nKTogVDtcclxuLy8gICAgIEtleXMoKTogc3RyaW5nW107XHJcbi8vICAgICBSZW1vdmUoa2V5OiBzdHJpbmcpOiBUO1xyXG4vLyAgICAgUmVtb3ZlQWxsKCk7XHJcbi8vICAgICBWYWx1ZXMoKTogVFtdO1xyXG4vLyB9XHJcblxyXG4vLyBleHBvcnQgY2xhc3MgS2V5ZWRDb2xsZWN0aW9uPFQ+IGltcGxlbWVudHMgSUtleWVkQ29sbGVjdGlvbjxUPiB7XHJcbi8vICAgICBwcml2YXRlIGl0ZW1zOiB7IFtpbmRleDogc3RyaW5nXTogVCB9ID0ge307XHJcbi8vICAgICBwcml2YXRlIGNvdW50OiBudW1iZXIgPSAwO1xyXG5cclxuLy8gICAgIGluaXRGcm9tT2JqKGNvbGxlY3Rpb246IEtleWVkQ29sbGVjdGlvbjxUPikge1xyXG4vLyAgICAgICAgIHRoaXMuaXRlbXMgPSB7fTtcclxuLy8gICAgICAgICB0aGlzLmNvdW50ID0gMDtcclxuLy8gICAgICAgICBjb25zdCBrZXlzID0gW107XHJcblxyXG4vLyAgICAgICAgIGZvciAoY29uc3QgcHJvcCBpbiBjb2xsZWN0aW9uLml0ZW1zKSB7XHJcbi8vICAgICAgICAgICAgIGlmIChjb2xsZWN0aW9uLml0ZW1zLmhhc093blByb3BlcnR5KHByb3ApKSB7XHJcbi8vICAgICAgICAgICAgICAgICB0aGlzLkFkZChwcm9wLCBjb2xsZWN0aW9uLml0ZW1zW3Byb3BdKTtcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuXHJcbi8vICAgICBwdWJsaWMgQ29udGFpbnNLZXkoa2V5OiBzdHJpbmcpOiBib29sZWFuIHtcclxuLy8gICAgICAgICByZXR1cm4gdGhpcy5pdGVtcy5oYXNPd25Qcm9wZXJ0eShrZXkpO1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIHB1YmxpYyBDb3VudCgpOiBudW1iZXIge1xyXG4vLyAgICAgICAgIHJldHVybiB0aGlzLmNvdW50O1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIHB1YmxpYyBBZGQoa2V5OiBzdHJpbmcsIHZhbHVlOiBUKSB7XHJcbi8vICAgICAgICAgaWYgKCF0aGlzLkNvbnRhaW5zS2V5KGtleSkpIHtcclxuLy8gICAgICAgICAgICAgdGhpcy5jb3VudCsrO1xyXG4vLyAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgdGhpcy5pdGVtc1trZXldID0gdmFsdWU7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgcHVibGljIFJlbW92ZShrZXk6IHN0cmluZyk6IFQge1xyXG4vLyAgICAgICAgIHZhciB2YWwgPSB0aGlzLml0ZW1zW2tleV07XHJcblxyXG4vLyAgICAgICAgIGlmICh0aGlzLkNvbnRhaW5zS2V5KGtleSkpIHtcclxuLy8gICAgICAgICAgICAgZGVsZXRlIHRoaXMuaXRlbXNba2V5XTtcclxuLy8gICAgICAgICAgICAgdGhpcy5jb3VudC0tO1xyXG4vLyAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgcmV0dXJuIHZhbDtcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICBwdWJsaWMgUmVtb3ZlQWxsKCkge1xyXG4vLyAgICAgICAgIHRoaXMuaXRlbXMgPSB7fTtcclxuLy8gICAgICAgICB0aGlzLmNvdW50ID0gMDtcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICBwdWJsaWMgSXRlbShrZXk6IHN0cmluZyk6IFQge1xyXG4vLyAgICAgICAgIHJldHVybiB0aGlzLml0ZW1zW2tleV07XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgcHVibGljIEtleXMoKTogc3RyaW5nW10ge1xyXG4vLyAgICAgICAgIHZhciBrZXlTZXQ6IHN0cmluZ1tdID0gW107XHJcblxyXG4vLyAgICAgICAgIGZvciAodmFyIHByb3AgaW4gdGhpcy5pdGVtcykge1xyXG4vLyAgICAgICAgICAgICBpZiAodGhpcy5pdGVtcy5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xyXG4vLyAgICAgICAgICAgICAgICAga2V5U2V0LnB1c2gocHJvcCk7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgIHJldHVybiBrZXlTZXQ7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgcHVibGljIFZhbHVlcygpOiBUW10ge1xyXG4vLyAgICAgICAgIHZhciB2YWx1ZXM6IFRbXSA9IFtdO1xyXG5cclxuLy8gICAgICAgICBmb3IgKHZhciBwcm9wIGluIHRoaXMuaXRlbXMpIHtcclxuLy8gICAgICAgICAgICAgaWYgKHRoaXMuaXRlbXMuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcclxuLy8gICAgICAgICAgICAgICAgIHZhbHVlcy5wdXNoKHRoaXMuaXRlbXNbcHJvcF0pO1xyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICByZXR1cm4gdmFsdWVzO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcbiJdfQ==