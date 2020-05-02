

export function FormatingKeywords(text, tags, fileName, index) {
    tags = tags ? tags.toLowerCase() : '';
    text = text.toLowerCase();
    text = ElementRemoval(text, "<br>");
    let i = fileName.indexOf('.');
    fileName = fileName.toLowerCase().substr(0, i);

    return `${ToLatin(text)} ${ToLatin(tags)} ${ToLatin(fileName)} ${index + 1}`;
}
export function ToLatin(text) {
    let needsRemoval = ['ą', 'č', 'ę', 'ė', 'į', 'š', 'ų', 'ū', 'ž'];
    needsRemoval.forEach(letter => {
        text = ElementRemoval(text, letter);
    });
    return text;
}
export function ElementRemoval(text, element) {
    let replacement;
    switch (element) {
        case '<br>': {
            replacement = ' ';
            break;
        }
        case 'ą': {
            replacement = 'a';
            break;
        }
        case 'č': {
            replacement = 'c';
            break;
        }
        case 'ė':
        case 'e': {
            replacement = 'e';
            break;
        }
        case 'į': {
            replacement = 'i';
            break;
        }
        case 'š': {
            replacement = 's';
            break;
        }
        case 'ų':
        case 'ū': {
            replacement = 'u';
            break;
        }
        case 'ž':
            replacement = 'z';
    }

    let i = text.indexOf(element);
    while (i !== -1) {
        text = text.slice(0, i) + replacement + text.slice(i + element.length);
        i = text.indexOf(element);
    }
    return text;
}