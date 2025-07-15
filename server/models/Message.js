// Importing mongoose library
import mongoose from "mongoose";

// Creating a schema for storing messages
const messageSchema = new mongoose.Schema({
    
    // Reference to the sender's User ID (ObjectId from User collection)
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",   // Refers to the "User" model
        required: true // Required field
    },

    // Reference to the receiver's User ID (ObjectId from User collection)
    receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",   // Refers to the "User" model
        required: true // Required field
    },

    // Optional text message
    text: {
        type: String
    },

    // Optional image (could be a URL or filename)
    image: {
        type: String
    },

    // Indicates if the message has been seen by the receiver
    seen: {
        type: Boolean,
        default: false // By default, the message is not seen
    }

}, {
    timestamps: true // Automatically adds createdAt and updatedAt fields
});

// Creating a model named "Message" using the defined schema
const Message = mongoose.model("Message", messageSchema);

// Exporting the Message model for use in other files
export default Message;
