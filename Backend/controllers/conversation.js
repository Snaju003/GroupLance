const ConversationModel = require("../models/Conversation");
const MessageModel = require("../models/Message");
const mongoose = require('mongoose');

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
        const conversationId = mongoose.Types.ObjectId(chatId);
        const existingConversation = await ConversationModel.findById(conversationId);
        if (!existingConversation) {
            return res.status(400).json({
                success: false,
                message: `Conversation doesn't exists`
            });
        }

        const updatedConversation = await ConversationModel.findByIdAndUpdate(conversationId, {
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

const fetchAllMessages = async (req, res) => {
    try {
        const chatId = req.params.id;
        const user = req.user;
        if (!req.user) {
            return res.status(400).json({
                message: `Not accessed`
            });
        }

        const existsChat = await ConversationModel.findOne({
            _id: chatId,
            userIds: user.id
        });

        if (!existsChat) {
            return res.status(400).json({
                success: false,
                message: `No chat exists`
            });
        }

        const allMessages = await MessageModel.find({ conversationId: chatId });
        if (!allMessages) {
            return res.status(400).json({
                message: `No messages yet`
            });
        }

        return res.status(200).json({
            success: true,
            message: `All messages fetched`,
            allMessages,
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: `Internal server error`
        });
    }
}

const getAllConversations = async (req, res) => {
    const userId = req.user;
    if (!userId) {
        return res.status(400).json({
            message: `Not accessed`
        });
    }

    try {
        const fetchConversations = await ConversationModel.find({
            // userIds: userId
        }).populate({
            path: 'group',
            select: 'gName'
        });
        const conversations = fetchConversations.filter((conv) => conv.userIds.includes(userId));
        return res.status(200).json({
            message: `Fetched`,
            conversations
        });
    } catch (err) {
        return res.status(500).json({
            message: `Error retrieving conversations: ${err.message}`
        });
    }
};

module.exports = {
    sendMessage,
    deleteMessage,
    fetchAllMessages,
    getAllConversations,
}