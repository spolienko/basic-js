// const CustomError = require("../extensions/custom-error");

const chainMaker = {
    str: [],
    getLength() {
        return this.str.length;
    },
    addLink(value) {
        if (typeof value === 'undefined') {
            this.str.push('( )');
            return this;
        }
        else {
            value = String(value);
            this.str.push('( ' + value + ' )');
            return this;
        }
    },
    removeLink(position) {
        if (typeof position === 'number' && position <= (this.str.length - 1) && position > 0) {
            this.str.splice(position - 1, 1);
        }
        else {
            this.str = [];
            throw new CustomError('Error');
        }
        return this;
    },
    reverseChain() {
        this.str.reverse();
        return this;
    },
    finishChain() {
        if (this.getLength(this.str) > 1) {
            let result = this.str.join('~~');
            this.str = [];
            return result;
        }
        else {
            let result = this.str.join('');
            this.str = [];
            return result;
        }
    }
};

module.exports = chainMaker;
