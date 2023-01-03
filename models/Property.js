const mongoose=require('mongoose')

const PropertySchema= new mongoose.Schema({
    PPDID:{type:String, unique:true},
    propertyType:{
        type:String,
        enum:['Home','Plot','Flat']
    },
    Views:Number,
    Days:Number,
    negotiable:{
        type:String,
        enum: ['Yes', 'No']
    },
    price: Number,
    ownership:{
        type:String,
        enum:['Individual', 'Joint']
    },
    propertyAge:{
        type:String,
        enum:['Below 25 years', 'Above 25 years']
    },
    propertyApproved:{
        type:String,
        enum: ['Yes', 'No']
    },
    propertDescription:String,
    bankLoan:{
        type:String,
        enum: ['Yes', 'No']
    },
    length:Number,
    breadth:Number,
    totalArea:Number,
    areaUnit:{
        type:String,
        enum: ['square meter', 'square foot']
    },
    noOfBhk:Number,
    noOfFloor:{
        type:String,
        enum: ['Ground', '1', '2', '3', '4', 'more than 4']
    },
    attached:{
        type:String,
        enum: ['Yes', 'No']
    },
    westernToilet:{
        type:String,
        enum: ['Yes', 'No']
    },
    furnished:{
        type:String,
        enum:["Fully Furnished","Semi Furnished", "None"]
    },
    carParking:{
        type:String,
        enum: ['Yes', 'No']
    },
    lift:{
        type:String,
        enum: ['Yes', 'No']
    },
    electricity:{
        type:String,
        enum: ['1 phase', '2 phase', '3 phase']
    },
    facing:{
        type:String,
        enum: ['East', 'West', 'South', 'North']
    },
    name:String,
    mobile:Number,
    postedBy:{
        type:String,
        enum: ['Owner', 'Agent']
    },
    saleType:{
        type:String,
       // enum: ['Sold', 'Unsold']
    },
    featuredPackage:{
        type:String
    },
    PPDPackage:{
        type:String
    },
    photo:String,
    email:String,
    city:String,
    area:String,
    pinCode:Number,
    address:String,
    landmark:String,
    latitude:Number,
    longitude:Number


    
})
const Property= mongoose.model('property',PropertySchema)
module.exports = Property