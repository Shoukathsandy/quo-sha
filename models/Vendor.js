
import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const vendorSchema = new Schema({
    name: {
        type: String
    },
    product: {
        type: String
    },
    city: {
        type: String
    },
    contact: {
        type: String
    }
})
// module.exports = mongoose.model('Vendor', vendorSchema)
const Vendor = mongoose.model('Vendor', vendorSchema);
export default Vendor