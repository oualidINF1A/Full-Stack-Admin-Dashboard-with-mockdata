import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const AffiliateStatSchema = new Schema({
    userId:{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    affiliateSales:{
        type:[mongoose.Types.ObjectId],
        ref:'Transaction'
    }
    

}, { timestamps: true });

const AffiliateStat = mongoose.model('AffiliateStat', AffiliateStatSchema);
export default AffiliateStat;