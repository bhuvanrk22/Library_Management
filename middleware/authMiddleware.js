const jwt = require("jsonwebtoken");

const authenticateUser = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res.status(401).json({
                success: false,
                message: "Access denied. Token is missing."
            });
        }
        if (!authHeader.startsWith("Bearer ")) {
            return res.status(401).json({
                success: false,
                message: "Invalid Authorization Header."
            });
        }

        const token = authHeader.split(" ")[1];
        const payload = jwt.verify(
            token, 
            process.env.JWT_SECRET
        );

        req.user = decoded;
        next();
    } 
    
    catch (error) {
        return res.status(401).json({
            success: false,
            message: "Invalid or Expired Token."
        });
    }
};

module.exports = authenticateUser;