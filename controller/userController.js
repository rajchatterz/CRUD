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
        console.error("Error found while fetching the data",error);
    }
}
module.exports={
    create
}