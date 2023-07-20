
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
const update =async (req,res,next)=>{
    try {
        const {id} =req.params
        const updateProduct = await productSchema.findByIdAndUpdate(id,req.body)
        if(!updateProduct){
            return res.status(400).json({
                success:false,
                message:"we cant find the product"
            })
        }
        const recentUpdate = await productSchema.findById(id)
        res.status(200).json({
            success:true,
            message:updateProduct
        })
    } catch (error) {
        res.status(400).json({

        })
    }
}
const remove = async(req,res)=>{
    try {
        const {id} = req.params
        const product = productSchema.findByIdAndDelete(id)
        if(!product){
            return res.status(400).json({
                success:false,
                message:"cannot find the data"
            })
        }
        res.status(200).json({
            success:true,
            message:"delete it successfully"
        })
    } catch (error) {
        
    }
}
module.exports={
    create,
    read,
    update,
    remove
}