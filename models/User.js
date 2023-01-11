const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        email: { type: String, required: true, unique: true },
        password: { type: String },
        isAdmin: {
            type: Boolean,
            default: false,
        },
        googleId: { type: String },
        balance: {
            type: Number,
            default: 0,
        },
        active: {
            type: String,
            default: false,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);