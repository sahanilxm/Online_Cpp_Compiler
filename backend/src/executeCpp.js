const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const outputPath = path.join(__dirname, 'outputs');


if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath, { recursive: true });
}

const executeCpp = ([filepath, inputFilePath]) => {

    const codeId = path.basename(filepath).split(".")[0];
    const outPath = path.join(outputPath, `${codeId}.out`);

    return new Promise((resolve, reject) => {
        exec(
            `g++ -std=c++2b -DLOCAL_MACHINE ${filepath} -o ${outPath} && cd ${outputPath} && ./${codeId}.out < ${inputFilePath}`,
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