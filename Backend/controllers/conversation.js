const ConversationModel = require("../models/Conversation");
const MessageModel = require("../models/Message");

// const createConversation = async (req, res) => {
//     try {
//         const { userIds } = req.body;
//         if (!userIds) {
//             return res.status(400).json({
//                 success: false,
//                 message: `User Ids required`
//             });
//         }
//         const newConversation = await ConversationModel.create({
//             userIds: userIds
//         });

//         return res.status(200).json({
//             success: true,
//             message: `Conversation created`,
//             newConversation,
//         });

//     } catch (error) {
//         return res.status(500).json({
//             success: false,
//             message: `Conversation Created`
//         });
//     }
// }

const sendMessage = async (req, res) => {
    try {
        const { chatId, message, senderId } = req.body;
        const existingConversation = await ConversationModel.findById(chatId);
        if (!existingConversation) {
            return res.status(400).json({
                success: false,
                message: `Conversation doesn't exists`
            });
        }

        const updatedConversation = await ConversationModel.findByIdAndUpdate(chatId, {
            $set: {
                lastmessage: message,
            }
        });

        const newMessage = await MessageModel.create({
            senderId: senderId,
            message: message,
            conversationId: updatedConversation._id,
            isDeleted: false
        });

        return res.status(200).json({
            success: true,
            message: `Message created and conversation updated`,
            newMessage,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: `Internal server error`
        });
    }
}

const deleteMessage = async (req, res) => {
    try {
        const { chatId } = req.body;
        const messageId = req.params.id;
        const updatedMessage = await MessageModel.findByIdAndUpdate(messageId, {
            $set: {
                isDeleted: true
            }
        });

        return res.status(200).json({
            success: true,
            message: 'Message updated',
            updatedMessage
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: `Internal server error`
        });
    }
}

module.exports = {
    sendMessage,
    deleteMessage,
}