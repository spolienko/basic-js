class VigenereCipheringMachine {
    constructor(direct) {
        if (direct === undefined || direct === true) {
            this.direct = true;
        }
        else {
            this.direct = false;
        }
    }
    encrypt(message, key) {
        if (message === undefined || key === undefined) {
            throw new CustomError('Error');
        }
        let result = "";
        const alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
        const newStr = this.onlyLetterString(message).toLowerCase();
        key = this.changesKey(message, key);
        for (let i = 0; i < newStr.length; i++) {
            let index = ((alphabet.indexOf(newStr[i]) + alphabet.indexOf(key[i])) % 26);
            result += alphabet[index];
        }
        result = this.restoreString(message, result);
        return result.toUpperCase();
    }

    decrypt(message, key) {
        if (message === undefined || key === undefined) {
            throw new CustomError('Error');
        }
        let result = "";
        const alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
        const newStr = this.onlyLetterString(message).toLowerCase();
        key = this.changesKey(message, key);
        //console.log(key);

        for (let i = 0; i < newStr.length; i++) {
            let index = ((alphabet.indexOf(newStr[i]) + 26 - alphabet.indexOf(key[i])) % 26);
            result += alphabet[index];
        }
        result = this.restoreString(message, result);
        return result.toUpperCase();
    }

    changesKey(message, key) {
        key = key.toLowerCase();
        message = this.onlyLetterString(message);
        let result = "";
        for (let i = 0; i < message.length; i++) {
            result += key[i % key.length]
        }
        return result;
    }

    onlyLetterString(message) {
        let result = "";
        for (let i = 0; i < message.length; i++) {
            if (message[i].toUpperCase() != message[i].toLowerCase())
                result += message[i];
        }
        return result;
    }

    restoreString(message, result) {
        for (let i = 0; i < message.length; i++) {
            if (!(message[i].match(/[a-z]/i))) {
                result = this.insertString(result, i, message[i]);
            }
            else
                continue;
        }
        if (this.direct === false)
            result = this.reverseString(result);
        return result;
    }

    reverseString(str) {
        return str.split('').reverse().join('');
    }

    insertString(str, index, value) {
        return str.substr(0, index) + value + str.substr(index);
    }
}

module.exports = VigenereCipheringMachine;

// v = new VigenereCipheringMachine();

// console.log(v.decrypt('AEIHQX SX DLLU!', 'alphonse'))
// console.log('-----');
//console.log(encrypt('attack at dawn!', 'alphonse'));
// console.log('-----');
//console.log(encrypt('attackatdawn!', 'alphonse'));
