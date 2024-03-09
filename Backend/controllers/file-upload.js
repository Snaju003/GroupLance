export const uploadFile = async (req, res, next) => {
    try {
        if (!req.file) {
            return res.status(404).json({
                success: false,
                message: 'file not found'
            });
        }

        const imageUrl = `${url}/file/${req.file.filename}`;

        return res.status(201).json({
            success: true,
            message: 'file uploaded successfully',
            imageUrl
        });

    } catch (error) {
        console.log(`${error.message}`);
        res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        })
    }
}