import { Directive, HostListener, Input } from '@angular/core';
@Directive({
    selector: "[pepPrint]"
})
export class PepPrintDirective {

    public _printStyle = [];

    /**
     * @memberof PepPrintDirective
     */
    @Input() printSectionId: string;

    /**
     * @memberof PepPrintDirective
     */
    @Input() printTitle: string;

    /**
     * @memberof PepPrintDirective
     */
    @Input() useExistingCss = true;

    /**
     * A delay in milliseconds to force the print dialog to wait before opened. Default: 0
     * 
     * @memberof PepPrintDirective
     */
    @Input() printDelay = 0;

    /**
     * @memberof PepPrintDirective
     */
    @Input()
    set printStyle(values: { [key: string]: { [key: string]: string } }) {
        for (const key in values) {
            if (values.hasOwnProperty(key)) {
                this._printStyle.push((key + JSON.stringify(values[key])).replace(/['"]+/g, ''));
            }
        }
        this.returnStyleValues();
    }

    /**
     *
     *
     * @returns the string that create the stylesheet which will be injected
     * later within <style></style> tag.
     *
     * - join/replace to transform an array objects to css-styled string
     * @memberof PepPrintDirective
     */
    public returnStyleValues() {
        return `<style> ${this._printStyle.join(' ').replace(/,/g, ';')} </style>`;
    }

    /**
     * @returns html for the given tag
     *
     * @memberof PepPrintDirective
     */
    private _styleSheetFile = '';

    /**
     * @memberof PepPrintDirective
     * @param cssList
     */
    @Input()
    set styleSheetFile(cssList: string) {
        const linkTagFn = function (cssFileName) {
            return `<link rel="stylesheet" type="text/css" href="${cssFileName}">`;
        }
        if (cssList.indexOf(',') !== -1) {
            const valueArr = cssList.split(',');
            for (const val of valueArr) {
                this._styleSheetFile = this._styleSheetFile + linkTagFn(val);
            }
        } else {
            this._styleSheetFile = linkTagFn(cssList);
        }
    }

    /**
     * @returns string which contains the link tags containing the css which will
     * be injected later within <head></head> tag.
     *
     */
    private returnStyleSheetLinkTags() {
        return this._styleSheetFile;
    }
    private getElementTag(tag: keyof HTMLElementTagNameMap): string {
        const html: string[] = [];
        const elements = document.getElementsByTagName(tag);
        for (let index = 0; index < elements.length; index++) {
            html.push(elements[index].outerHTML);
        }
        return html.join('\r\n');
    }

    /**
     * 
     * @param data the html element collection to save defaults to
     * 
     */
    private getFormData(data: any) {
        for (let i = 0; i < data.length; i++) {
            data[i].defaultValue = data[i].value;
            if (data[i].checked) {
                data[i].defaultChecked = true;
            }
        }
    }

    /**
     * @returns html section to be printed along with some associated inputs
     * 
     */
    private getHtmlContents() {
        const printContents = document.getElementById(this.printSectionId);
        const innards = printContents.getElementsByTagName('input');
        this.getFormData(innards);

        const txt = printContents.getElementsByTagName('textarea');
        this.getFormData(txt);

        return printContents.innerHTML;
    }

    /**
     * @memberof PepPrintDirective
     */
    @HostListener('click')
    public print(): void {
        let styles = '', links = '';
        const baseTag = this.getElementTag('base');

        if (this.useExistingCss) {
            styles = this.getElementTag('style');
            links = this.getElementTag('link');
        }

        const printContents = this.getHtmlContents();
        const popupWin = window.open("", "_blank", "top=0,left=0,height=auto,width=auto");
        popupWin.document.open();
        popupWin.document.write(`
            <html>
                <head>
                <title>${this.printTitle ? this.printTitle : ""}</title>
                ${baseTag}
                ${this.returnStyleValues()}
                ${this.returnStyleSheetLinkTags()}
                ${styles}
                ${links}
                </head>
                <body>
                ${printContents}
                <script defer>
                    function triggerPrint(event) {
                    window.removeEventListener('load', triggerPrint, false);
                    setTimeout(function() {
                        closeWindow(window.print());
                    }, ${this.printDelay});
                    }
                    function closeWindow(){
                        window.close();
                    }
                    window.addEventListener('load', triggerPrint, false);
                </script>
                </body>
            </html>`
        );
        popupWin.document.close();
    }
}