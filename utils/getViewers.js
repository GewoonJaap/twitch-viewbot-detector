const axios = require('axios');
const getBots = require('./getBots');
exports.getAllViewers = async (user) => {
    const data = (await axios.get(`https://tmi.twitch.tv/group/user/${user}/chatters`)).data;
    console.log(user)
    const bots = await getBots.getAllBots();
    let returnValue = {
        "chatter_count": data.chatter_count,
        "anonViewers": 0,
        "bots": 0,
        "viewers": []

    }

    let chatterTypes = ['broadcaster', 'vips', 'moderators', 'viewers', 'staff', 'admins', 'global_mods']

    chatterTypes.forEach(type => {

        data.chatters[type].forEach(moderator => {
            returnValue.viewers.push({
                name: moderator,
                bot: bots.indexOf(moderator) != -1
            })
            if (bots.indexOf(moderator) != -1) {
                returnValue.bots++
            }
        })
    });
    returnValue.anonViewers = returnValue.viewers.length - returnValue.chatter_count;
    return returnValue;



}