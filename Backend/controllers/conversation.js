export const sendMessage = (req, res) => {
    try {
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: `Internal server error`
        });
    }
}