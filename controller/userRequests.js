const UserRequests = require("../model/userRequests");
const Users = require("../model/users");

let userRequests = new UserRequests();
let user = new Users();

const submitRequest = async (req, res, next) => {
    /**
     * @dev the payload will contain following properties:
     * - `title`,
     * - `message`,
     * - `json`,
     */

    try {
        const { userId } = req.data.data1
        // let payload = req.body;
        // payload['userId'] = userId
        // await userRequests.submitRequest(payload);
        await user.updateProfile({ "userType": "creator" }, userId);
        const [result] = await user.userProfileById(userId);
        if (result.length > 0) {
            let uAddress = result[0]['userAddresses']
            let data = result[0]
            data['userAddresses'] = (uAddress && uAddress != '') ? JSON.parse(uAddress) : []
            if (data.userType != 'user') delete (data['userAddresses'])
            delete (data['password'])
            delete (data['otp'])
            return res.status(200).json({ "data": data, "message": "Request submitted!" });
        } else {
            return res.status(401).json({ "message": "no user profile found!" });
        }
        // return res.status(200).json({ "message": "Request submitted!" });
    } catch (error) {
        return res.status(401).json({ "message": "Session expired!", "error": error + "" });
    }
};

module.exports = {
    "submitRequest": submitRequest,
};
