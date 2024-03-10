
const { addCodeToQueue } = require('../codeQueue');
const { generateFile } = require('../generateFile');
const Code = require('../models/code.js');

const getStatus = async (req, res) =>{

    const codeID = req.query.id;
    if(codeID === undefined){
        return res.status(400).json({
            success : false,
            error : "Missing ID query param."
        });
    }

    try{
        const code = await Code.findById(codeID);
        if(code === undefined){
            return res.status(404).json({
                success : false,
                error : "Invalid Code ID."
            }); 
        }
        return res.status(200).json({
            success : true,
            code
        });
    }
    catch(err){
        return res.status(400).json({
            success : false,
            error : JSON.stringify(err)
        });
    }
};

const runCode = async (req, res) => {
    const { language = 'cpp', codeBody, input = '' } = req.body;
    if(codeBody === undefined){
        return res.status(404).json({
            success : false,
            error : "Empty Code Body."
        });
    }

    let code;
    try{
        const files = await generateFile(language, codeBody, input);
        const [filepath, inputFilePath] = files;

        code = await new Code({ language, filepath, inputFilePath}).save();

        const codeID = code["_id"];
        addCodeToQueue(codeID);

        return res.status(201).json({
            success : true,
            codeID
        });

    }
    catch(err){
        return res.status(500).json({
            success : false,
            error : JSON.stringify(err)
        });
    }

};


module.exports = {
    getStatus,
    runCode
}