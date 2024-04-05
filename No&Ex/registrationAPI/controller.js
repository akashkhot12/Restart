const userModel = require('./model');
const bcrypt = require('bcrypt');

let registrations = async (req, res) => {
    // user is exist 
    // hashed password 
    // create account 
    // genrate token 

    const { email, password, gender } = req.body;
    try {
        const userExist = await userModel.findOne({ email: email });

        if (userExist) {
            return res.status(400).json({ message: "user already exist" })
        }

        const hashedPassword = await bcrypt.hash(password,10);

        const result = await userModel.create({
            email:email,
            password:hashedPassword,
            gender:gender
        });


    } catch (error) {
        return res.status(400).json({message:error})
    }

}

module.exports = registrations;