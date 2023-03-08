const Users = require("../model/users");
const { OAuth2Client } = require('google-auth-library');
const { CLIENT_ID } = require("../config/constants");
const { generateToken } = require("../helper/other");

const user = new Users()
const client = new OAuth2Client(CLIENT_ID);

const signUp = async (req, res, next) => {
    let idToken = req.body.idToken;
    try {
        const ticket = await client.verifyIdToken({ idToken, audience: CLIENT_ID });
        const [result] = await user.checkEmail(ticket['payload']['email']);
        if (result.length > 0) {
            return res.status(401).json({ message: "User already registered, please login!" });
        }
        let payload = {
            "username": ticket['payload']['given_name'] + ticket['payload']['family_name'],
            "password": ticket['payload']['sub'],
            "email": ticket['payload']['email'],
            "fullName": ticket['payload']['name'],
            "profilePic": ticket['payload']['picture'],
            "status": 1
        }
        const d = await user.singUp(payload);
        if (d) {
            let userId = d.length > 0 ? d[0]['insertId'] : false
            const [result] = await user.userProfileById(userId ? userId : payload.email);
            let data1 = {
                "userId": result[0].userId,
                "username": result[0].username,
                "email": result[0].email,
                "fullName": result[0].fullName,
                "phoneNumber": result[0].phoneNumber,
                "profilePic": result[0].profilePic,
                "bio": result[0].bio,
                "userType": result[0].userType,
                "location": result[0].location,
                "storeAddress": result[0].storeAddress,
                "userAddresses": [],
                "status": result[0].status,
            }

            let { token } = await generateToken(data1)
            return res.status(200).json({ "token": token, "data": data1, "message": `Registered Successfully!` });
        } else {
            return next({ code: 401, message: "Invalid google auth token please try again" });
        }
    } catch (error) {
        return res.status(401).json({ "error": true, "message": "Invalid google auth token please try again!", "debug": error });
    }
};

const signIn = async (req, res, next) => {
    let idToken = req.body.idToken;
    try {
        const ticket = await client.verifyIdToken({ idToken, audience: CLIENT_ID });
        const [d] = await user.checkEmail(ticket['payload']['email']);
        if (d.length < 1) {
            return res.status(401).json({ message: "User not registered, please registered first!" });
        }
        const [result] = await user.userProfileById(ticket['payload']['email']);
        let data1 = {
            "userId": result[0].userId,
            "username": result[0].username,
            "email": result[0].email,
            "fullName": result[0].fullName,
            "phoneNumber": result[0].phoneNumber,
            "profilePic": result[0].profilePic,
            "bio": result[0].bio,
            "userType": result[0].userType,
            "location": result[0].location,
            "storeAddress": result[0].storeAddress,
            "userAddresses": [],
            "status": result[0].status,
        }

        let { token } = await generateToken(data1)
        return res.status(200).json({ "token": token, "data":data1, "message": `Login Successfully!` });
    } catch (error) {
        return res.status(401).json({ "error": true, "message": "Invalid google auth token please try again!", "debug": error });
    }
};

module.exports = {
    "signUp": signUp,
    "signIn": signIn
}