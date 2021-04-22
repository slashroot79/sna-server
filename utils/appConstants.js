

const db = {
    OPEN:'open',
    CONNECTED:'connected',
    DISCONNECTED:'disconnected',
    ERROR:'error'
}

const newsAPIPaths = {
    NEWS:"usa politics",
    HEALTH:"latest health news",
    TECH:"startup and technology news",
    SCIENCE:"science and space news",
    ENTERTAINMENT:"entertainment and celebrities",
    SPORTS:"usa sports",
    BUSINESS:"usa business and stocks"
}

global.dbStatus = ''

module.exports = {db,newsAPIPaths}