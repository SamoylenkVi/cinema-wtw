export const createAltText = (text, reg) => text.match(reg)[0].replaceAll('-', ' ');
