const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const outputPath = path.join(__dirname, 'outputs');


if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath, { recursive: true });
}

const executeCpp = ([filePath, inputFilePath]) => {
    const codeId = path.basename(filePath).split(".")[0];
    const outPath = path.join(outputPath, `${codeId}.out`);

    const command = `g++ -std=c++2b -DLOCAL_MACHINE "${filePath}" -o "${outPath}" && cd "${outputPath}" && "./${codeId}.out" < "${inputFilePath}"`;
    return new Promise((resolve, reject) => {
        
        exec(
            command,
            (error, stdout, stderr) => {
                if (error) reject({ error, stderr });
                if (stderr) reject({ stderr });
                resolve(stdout);
            }
        );
    });
};

module.exports = {
    executeCpp
};