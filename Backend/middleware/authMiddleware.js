const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    // Sending data through headers as authorization as Bearer and id during models timestamp.
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({
            message: "No Token"
        });
    }
    // split becuz in Authorization data is in Bearer Models timestamp
    const token = authHeader.split(" ")[1];
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({
            message: "Invalid Token"
        });
    }
};

module.exports = authMiddleware;