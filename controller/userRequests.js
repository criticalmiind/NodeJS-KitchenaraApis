const UserRequests = require("../model/userRequests");

let userRequests = new UserRequests();

const submitRequest = async (req, res, next) => {
    /**
     * @dev the payload will contain following properties:
     * - `title`,
     * - `message`,
     * - `json`,
     */
    try {
        const { userId } = req.data.data1
        let payload = req.body;
        payload['userId'] = userId
        await userRequests.submitRequest(payload);
        return res.status(200).json({ "message": "Request submitted!" });
    } catch (error) {
        return next({ code: 401, "message": "Session expired!" });
    }
};

module.exports = {
    "submitRequest": submitRequest,
};
