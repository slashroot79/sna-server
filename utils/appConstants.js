

const db = {
    OPEN:'open',
    CONNECTED:'connected',
    DISCONNECTED:'disconnected',
    RECONNECTED:'reconnected',
    ERROR:'error',
    DOWN:'down'
}

const newsAPIPaths = {
    NEWS:{cat:"news", defaultQuery:"news",queryTerm:"usa politics"},
    HEALTH:{cat:"health",defaultQuery:"health", queryTerm:"latest health news"},
    TECH:{cat:"tech",defaultQuery:"tech", queryTerm:"startup and technology news"},
    SCIENCE:{cat:"science",defaultQuery:"science", queryTerm:"science and space news"},
    ENTERTAINMENT:{cat:"entertainment", defaultQuery:"entertainment", queryTerm:"entertainment and celebrities"},
    SPORTS:{cat:"sports", defaultQuery:"sports", queryTerm:"usa sports"},
    BUSINESS:{cat:"business", defaultQuery:"business", queryTerm:"usa business and stocks"}
}

module.exports = {db,newsAPIPaths}