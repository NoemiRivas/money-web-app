const { ClerkExpressRequireAuth } = require("@clerk/clerk-sdk-node");

const clerkAuth = ClerkExpressRequireAuth(); // También usará CLERK_SECRET_KEY de process.env

module.exports = clerkAuth;
