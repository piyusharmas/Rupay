const { Schema }= require('mongoose');

const HoldingsSchema = new Schema({
    name:{ type:String },
    qty:{ type:Number, default: 1 },
    avg: { type:Number, default: 0 },
    price: { type:Number, default: 0 },
    net: { type:String, default: "0.00%" },
    day: { type:String, default: "0.00%" }
});

module.exports = { HoldingsSchema };