const db = require("../config/database");

module.exports = class OrderDetails {
  constructor() { }

  submitOrder({ userId, storeId, deliveryAddress, deliveryLocation, totalBill, paymentMethod, isPayed, json }){
    return db.execute(`
      INSERT INTO orderdetails (tackingId, userId, storeId, deliveryAddress, deliveryLocation, totalBill, paymentMethod, isPayed, json)
      VALUES (UPPER(REPLACE(SUBSTRING(UUID(), 1, 8), '-', '')), ${userId}, ${storeId}, '${deliveryAddress}', '${deliveryLocation}', ${totalBill}, '${paymentMethod}', ${isPayed}, '${JSON.stringify(json)}');
    `)
  }

  getOrdersByUserId(userId, filter='all'){
    if (filter == 'all') return db.execute(`SELECT * FROM orderdetails WHERE userId = ${userId};`)
    else return db.execute(`SELECT * FROM orderdetails WHERE userId = ${userId} AND status = '${filter}';`)
  }
  
  getOrderById(orderId){
    return db.execute(`SELECT * FROM orderdetails WHERE orderId = ${orderId}`)
  }

};
