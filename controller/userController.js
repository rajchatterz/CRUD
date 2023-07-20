const productSchema = require('../model/modelSchema')

const create = async(req,res,next)=>{
    try {
        const userdata = productSchema(req.body)
    const userInfo = await userdata.save()
    return res.status(200).json({
        success:true,
        data:userInfo
    })
    } catch (error) {
        res.status(400).json({
            success:false,
            message:"Bad message"
        })
    }
}
const read = async(req,res,next)=>{
    try {
        const userdata = await productSchema.find({name:"YASH"});
        res.status(200).json({
            success:true,
            message:userdata
        })
        return 
    } catch (error) {
        return res.status(400).json({
            message:false
        })
    }
}
module.exports={
    create,
    read
}