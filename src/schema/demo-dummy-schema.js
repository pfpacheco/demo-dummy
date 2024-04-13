import mongoose, {Schema} from "mongoose";

// Define the Mongoose schema
const DemoDummySchema = new mongoose.Schema({
    _id: {type: Schema.Types.UUID},
    name: {type: String},
    cnu: {type: String, unique: true},
    demo_field: {type: String},
    createdAt: {type: Date, default: Date.now},
    lastUpdateAt: {type: Date, default: null},
});

export default mongoose.model('DemoDummySchema', DemoDummySchema);