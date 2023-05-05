import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ProductStatSchema = new Schema({
    productId:{type:Schema.Types.ObjectId, ref:'Product'},
    yearlySalesTotal:Number,
    yearlyTotalSoldUnits:Number,
    year:Number,
    monthlyData:[
        {
            month:String,
            totalSales:Number,
            totalUnits:Number,
        }
    ],
    dailyData:[{
        date:String,
        totalSales:Number,
        totalSoldUnits:Number,
    }]
}, { timestamps: true });

const ProductStat = mongoose.model('ProductStat', ProductStatSchema);
export default ProductStat;