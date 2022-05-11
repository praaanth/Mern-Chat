const mongoose = require("mongoose")

const chatModel= mongoose.Schema({
    chatName: {type: "string", required: true}, // chat name
    isGroupChat: {type: "boolean", default: false}, // is group chat
    users: [{type: mongoose.Schema.Types.ObjectId, ref:"User"}], // users in chat
    latestMessage: {type: mongoose.Schema.Types.ObjectId, ref:"Message"}, // latest message
    groupAdmin: {type: mongoose.Schema.Types.ObjectId, ref:"User"}, // group admin
}, 
{timeStamps: true}
);
const Chat = mongoose.model("Chat", chatModel);

module.exports = Chat;