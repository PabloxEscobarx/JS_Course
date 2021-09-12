function padString(Str, StrLength, StrChar, StrR = true) {
    let result = '';
    let resChar = '';
    let resLength = StrLength - Str.length;
    if (Str === undefined) {
        return 'не указано слово '
    } else if (StrLength === undefined) {
        return 'не указана длина'
    } else if (StrChar === undefined) {
        return 'не указан символ'
    } else if (StrR === undefined) {
        return 'не указана сторона'
    } else if (StrLength <= Str.length) {
        return Str.substr(0, StrLength)
    } else if (Str.length < StrLength) {
        for (let i = 1; i <= resLength; i++) {
            resChar += StrChar
        }
    }
    if (StrR) {
        result = Str + resChar;
    } else {
        result = resChar + Str;
    }

    return result
};
console.log(padString("hello", 8, '*', false));