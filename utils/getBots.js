const axios = require('axios');
exports.getAllBots = async () => {
    const data = (await axios.get('https://api.twitchinsights.net/v1/bots/all')).data;
    let returnValue = [];
    data.bots.forEach(bot => {
        returnValue.push(bot[0]);
    });
    return returnValue;
}