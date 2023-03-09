const db = require("../config/database");

module.exports = class UserRequests {
    constructor() { }

    getUserRequests(userId, status='all') {
        if(status == 'all') return db.execute(`SELECT * FROM  userRequests WHERE userId = '${userId}'`);
        return db.execute(`SELECT * FROM  userRequests WHERE userId = '${userId}' AND status = '${status}'`);
    }

    submitRequest({ userId, title=null, message=null, json=null }) {
        return db.execute(`INSERT INTO userRequests SET userId = '${userId}', title = '${title}', message = '${message}', json = '${json}'`);
    }
};
