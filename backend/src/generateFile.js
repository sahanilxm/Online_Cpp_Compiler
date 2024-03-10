const fs = require('fs');
const path = require('path');
const { v4: uuid } = require('uuid');

const dirCodes = path.join(__dirname, 'codes');
const inputFiles = path.join(__dirname, 'inputs');

if (!fs.existsSync(dirCodes)) {
    fs.mkdirSync(dirCodes, { recursive: true });
}
if (!fs.existsSync(inputFiles)) {
    fs.mkdirSync(inputFiles, { recursive: true });
}

const languageFileExtension = {
    cpp: 'cpp'
};

const generateFile = async (language, code, input) => {
    const codeID = uuid();

    const codeFileName = `${codeID}.${languageFileExtension[language]}`;
    const codeFilePath = path.join(dirCodes, codeFileName);
    await fs.writeFileSync(codeFilePath, code);

    const inputFileName = `${codeID}.txt`;
    const inputFilePath = path.join(inputFiles, inputFileName);
    await fs.writeFileSync(inputFilePath, input);

    return [codeFilePath, inputFilePath];
};

module.exports = {
    generateFile
};