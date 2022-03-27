export class PepSnackBarData {
    title: string;
    content: any;

    constructor(options: {
        title?: string;
        content?: any;
    }) {
        this.title = options.title || '';
        this.content = options.content || '';
    }
}
