const Queue = require('bull');

const Code = require('./models/code.js');
const { executeCpp } = require('./executeCpp');


const codeQueue = new Queue('code-queue');
const WORKERS = 4;

codeQueue.process(WORKERS, async ({ data }) => {

    const { id: codeId } = data;
    const code = await Code.findById(codeId);

    if(code === undefined){
        throw Error("Code not found");
    } 
    else{
        let output;
        try{
            code["startedAt"] = new Date();
            code["status"] = "Running";
            if(code.language === "cpp"){
                output = await executeCpp([code.filepath, code.inputFilePath]);
            }

            code["completedAt"] = new Date();
            code["status"] = "Success";
            code["output"] = output;

            await code.save();
        } 
        catch(err){
            code["completedAt"] = new Date();
            code["status"] = "Error";
            code["output"] = JSON.stringify(err);
            await code.save();
        }
        return true;
    }
});

codeQueue.on("failed", (error) => {
    console.log(error.data.id, "failed", error.failedReason);
});

const addCodeToQueue = async (codeId) => {
    await codeQueue.add({ id: codeId });
};

module.exports = {
    addCodeToQueue
};