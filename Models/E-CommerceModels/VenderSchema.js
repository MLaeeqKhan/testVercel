const mongoose = require('mongoose');

const venderShema = new mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    shopeName: {
        type: String,
        required: true
    },
    shopDescription: {
        type: String,
        required: true
    },
    shopLocation: {
        type: String,
        required: true
    },
    verificationStatus: {
        type: Boolean,

    }
});

const Vender = mongoose.model("VENDER",venderShema);
module.exports = Vender;