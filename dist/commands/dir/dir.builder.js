export class DirBuilder {
    constructor() {
        this.options = new Map();
    }
    detailedOutput() {
        this.options.set('-l', '');
        return this;
    }
    output() {
        const args = [];
        this.options.forEach((value, key) => {
            args.push(key);
            args.push(value);
        });
        return args;
    }
}
