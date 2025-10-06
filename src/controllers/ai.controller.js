const generateContent = require('../services/ai.service')
module.exports.getresponse = async  (req,res)=>{
    const prompt = req.body.prompt
    if (!prompt) {
        return res.status(400).send("Prompt is required")
    }
    const response = await generateContent(prompt)
    res.send(response)
}

