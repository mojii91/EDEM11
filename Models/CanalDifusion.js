const mongoose = require('mongoose');
const ObjectId = mongoose.SchemaTypes.ObjectId;
const CanalDifSchema = new mongoose.Schema({
   name: {
        type: String,
        required: true,
    },
    description: {
        type: String
    },
    events:[{
        type:ObjectId,
        ref:'Event'
    }],
    participantes:[{
        type:ObjectId,
        ref:'User'
    }]
});

const CanalDifusion = mongoose.model('CanalDifusion', CanalDifSchema);

module.exports = CanalDifusion;