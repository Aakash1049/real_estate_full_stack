const express= require("express");
const { isAuthenticated } = require("../auth");
const Property= require("../models/Property");

const router= express.Router();


router.put("/updateProperty/:PPDID", async (req,res)=>{
    try{

        const property = await Property.findOne({PPDID:req.params.PPDID})
            if(property.saleType==="Sold"){   
                return res.json({message:"Property already sold"})
            }
         
        const UpdatedProperty = await Property.updateOne({PPDID:req.params.PPDID},{$set:{saleType:"Sold",Days:0}})
        res.json({

            message:"Property Sold",
            UpdatedProperty
        })


    }catch(e){
        res.json(e.message)
    }
})


router.get("/getAllProperties",async(req,res)=>{
    // console.log("enterned backend")
    try{
        const data = await Property.find();
        res.json(data)

    }catch(e){
        res.json({e});
    }
})


router.get("/search/:search",async(req,res)=>{ 
    let pattern= new RegExp("^"+req.params.search)    
    let property = await Property.find({PPDID:{$regex:pattern}})
    // console.log(property,"search results")
    res.json(property)
})

router.post("/addProperty",isAuthenticated, async(req,res)=>{
    // console.log(req.body, "Before Setting");
    try{
        // const {propertyType,negotiable, price, ownership} = req.body;
        let PPDID
        for(let i=0;;i++){
            PPDID="PPD"+ Math.floor(1000 + Math.random() * 9000)
            let prop = await Property.findOne({PPDID})
            if(prop){
                continue
            }
            else break
        }
        let  property = await Property.create({...req.body.data,PPDID});
        // console.log(req.body, property,  "After Setting")
        res.json({property, message:"Property Added Succesfully"})
        
    }
    catch(e){
        console.log("err is here")
        res.json({error:e.message});
    }
});




module.exports = router;