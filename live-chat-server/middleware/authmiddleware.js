const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    //trying to split the authorization from users.js to "bearer" and jwt token
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select("-password");
      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

module.exports = { protect };


// const jwt = require("jsonwebtoken");
// const User = require("../models/userModel");
// const asyncHandler = require("express-async-handler");

// const protect = asyncHandler(async (req, res, next) => {
//   let token;
//   // console.log("req.headers is " , req.headers)

//   // Check if Authorization header exists and starts with Bearer
//   if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
//     try {
//       // Extract token from Authorization header
//       token = req.headers.authorization.split(" ")[1];

//       // Verify the token
//       const decoded = jwt.verify(token, process.env.JWT_SECRET);

//       // Fetch user from database
//       req.user = await User.findById(decoded.id).select("-password");

//       // If user is found, proceed to the next middleware or route handler
//       if (req.user) {
//         return next();
//       } else {
//         // If user is not found, handle as unauthorized
//         res.status(401);
//         throw new Error("Not authorized, user not found");
//       }
//     } catch (error) {
//       // Token verification failed
//       console.error("Token verification error:", error);
//       res.status(401);
//       throw new Error("Not authorized, token failed");
//     }
//   } else {
//     // If no Authorization header with Bearer token is found
//     res.status(401);
//     throw new Error("Not authorized, no token found");
//   }
// });

// module.exports = { protect };
