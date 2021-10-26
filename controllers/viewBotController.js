const getViewers = require('../utils/getViewers');
exports.getViewBotStatus = async (req, res, next) => {
    try {
        const bots = await getViewers.getAllViewers(req.params.user);

        res.status(200).json({
            status: 'success',
            data: bots
        });


    } catch (error) {
        next(error);
    }
};